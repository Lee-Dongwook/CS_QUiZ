"use client";

import {
  Platform,
  TouchableOpacity,
  Image,
  View,
  Text,
  Linking,
  Pressable,
} from "react-native";
import { useRouter } from "solito/router";
import { Typography } from "app/design/typography";
import { AppleLoginButton } from "app/auth/supabase/apple/AppleLoginButton";
import { GoogleLoginButton } from "app/auth/supabase/google/GoogleLoginButton";

export function HomeScreen() {
  const { push } = useRouter();

  const handleLoginError = (error: any) => {
    console.error("Login failed:", error);
  };

  const handleMoveToDashboard = () => {
    push({ pathname: "/dashboard" });
  };

  return (
    <>
      <View className="flex-1 bg-white items-center justify-center">
        <View className="flex-1  space-y-3 px-6">
          <Typography className="mt-8" variant="t1" weight="bold">
            CS Quiz
          </Typography>
        </View>
        <Pressable
          className="w-96 items-center mb-10"
          onPress={handleMoveToDashboard}
        >
          <Text>개발자 버튼</Text>
        </Pressable>
        {Platform.OS === "ios" && (
          <View>
            <AppleLoginButton onError={handleLoginError} />
          </View>
        )}
        {/* <View>
          <GoogleLoginButton onError={handleLoginError} />
        </View> */}
      </View>
    </>
  );
}

export default HomeScreen;
