import { useSafeArea } from "app/provider/safe-area/use-safe-area";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  Linking,
  Platform,
  Pressable,
} from "react-native";
import { router } from "expo-router";

import {
  Camera,
  CameraDevice,
  CameraPermissionStatus,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";

import * as ImagePicker from "expo-image-picker";
import { uploadFiles } from "../utils/tus";
import { StatusBar } from "expo-status-bar";
import axiosInstance from "app/api/axiosInstance";

export default function CameraScreen() {
  const { top, bottom } = useSafeArea();
  const device = useCameraDevice("back");
  const camera = useRef<Camera>(null);

  const [mode, setMode] = useState("");
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>("not-determined");

  const [isUploading, setIsUploading] = useState(false);

  const requestCameraPermission = async () => {
    const permission = await Camera.requestCameraPermission();
    setCameraPermissionStatus(permission);
    return permission;
  };

  useEffect(() => {
    const initialize = async () => {
      const permission = await Camera.getCameraPermissionStatus();
      setCameraPermissionStatus(permission);

      if (permission === "not-determined") {
        await requestCameraPermission();
      } else if (permission !== "granted") {
        Alert.alert(
          "카메라 권한 필요",
          "사진을 찍기 위해 카메라 접근이 필요합니다.",
          [
            { text: "취소", onPress: () => router.back() },
            {
              text: "권한 요청",
              onPress: async () => {
                const newPermission = await requestCameraPermission();
                if (newPermission !== "granted") {
                  Alert.alert(
                    "카메라 권한 거부됨",
                    "설정에서 카메라 권한을 허용해주세요.",
                    [
                      { text: "취소", onPress: () => router.back() },
                      {
                        text: "설정으로 이동",
                        onPress: () => {
                          Linking.openSettings();
                          router.back();
                        },
                      },
                    ]
                  );
                }
              },
            },
          ]
        );
      }
    };

    initialize();
  }, []);

  const handleAlbumPress = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.status === "denied") {
        Alert.alert(
          "앨범 접근 권한 필요",
          "앨범에서 사진을 선택하기 위해 권한이 필요합니다.",
          [
            { text: "취소" },
            { text: "설정으로 이동", onPress: () => Linking.openSettings() },
          ]
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        allowsMultipleSelection: false,
      });

      if (!result.canceled) {
        setIsUploading(true);
        try {
          await uploadFiles("test", result);
        } catch (error) {
          Alert.alert("오류", "이미지 업로드 중 문제가 발생했습니다.");
        } finally {
          setIsUploading(false);
        }
      }
    } catch (error) {
      Alert.alert("오류", "이미지를 선택하는 중 문제가 발생했습니다.");
    }
  };

  const onClose = useCallback(() => {
    router.back();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes) => {
      console.log(codes);
    },
  });

  return (
    <>
      <SafeAreaView
        className="flex-1 bg-secondary"
        style={{ paddingTop: Platform.OS === "android" ? top : 0 }}
      >
        {" "}
        <View className="flex-1">
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device as CameraDevice}
            isActive={true}
            photo={true}
            enableZoomGesture
          />
        </View>
      </SafeAreaView>
    </>
  );
}
