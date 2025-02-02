import VersionCheck from "react-native-version-check-expo";
import { useCallback, useEffect } from "react";
import { Alert, Linking, Platform } from "react-native";

export const useAppVersion = () => {
  const isLatestAppVersion = useCallback(async () => {
    if (__DEV__) {
      return true;
    }

    const currentVersion = VersionCheck.getCurrentVersion();
    const latestVersion = await VersionCheck.getLatestVersion();
    const currentParts = currentVersion.split(".").map(Number);
    const latestParts = latestVersion.split(".").map(Number);

    return (
      currentParts[0] === latestParts?.[0] &&
      currentParts[1] >= latestParts?.[1]
    );
  }, []);

  useEffect(() => {
    const checkAppVersion = async () => {
      if (await isLatestAppVersion()) {
        return;
      }

      Alert.alert(
        "새로운 버전이 출시되었습니다.",
        "안정적인 서비스 사용을 위해 업데이트를 진행해주세요.",
        [
          {
            text: "업데이트",
            onPress: () => {
              // Linking.openURL(Platform.OS === 'ios' ? APP_STORE_LINK : PLAY_STORE_LINK);
            },
          },
        ]
      );
    };

    checkAppVersion();
  }, [isLatestAppVersion]);
};
