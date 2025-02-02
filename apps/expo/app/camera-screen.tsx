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

export default function CameraScreen() {
  const { top, bottom } = useSafeArea();
  const device = useCameraDevice("back");
  const camera = useRef<Camera>(null);

  const [mode, setMode] = useState("");
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>("not-determined");

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
