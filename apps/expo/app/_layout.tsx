import { Provider } from "app/provider";
import { Stack } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  AppState,
  Linking,
  Alert,
} from "react-native";
import AppsFlyerHandler from "../components/AppsFlyer/AppsFlyerHandler";
import "../global.css";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { useInitializer } from "../init/useInitializer";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import axiosInstance from "app/api/axiosInstance";
import { parseVersion, compareVersions } from "app/api/version/version";
import { useEffect } from "react";

export default function Root() {
  useInitializer();

  async function checkAppVersion() {
    try {
      const response = await axiosInstance.get("/v1/appVersion");
      const versionData = response.data;

      if (!versionData.ok || !versionData.data) return;

      const currentVersion = parseVersion(
        Constants.expoConfig?.version ?? "0.0.0"
      );
      const storeVersion = versionData.data;

      const { needsForceUpdate, needsSoftUpdate } = compareVersions(
        currentVersion,
        storeVersion
      );

      if (needsForceUpdate) {
        Alert.alert(
          "업데이트 필요",
          "새로운 버전이 출시되었습니다. 계속하려면 업데이트가 필요합니다."
        );
      }
    } catch (error) {
      console.error("Version check failed:", error);
    }
  }

  useEffect(() => {
    checkAppVersion();
  }, []);

  return (
    <KeyboardProvider>
      <Provider>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.container}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
          </Stack>
        </SafeAreaView>
        <AppsFlyerHandler />
      </Provider>
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
