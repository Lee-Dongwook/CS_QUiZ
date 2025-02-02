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

export default function Root() {
  useInitializer();

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
