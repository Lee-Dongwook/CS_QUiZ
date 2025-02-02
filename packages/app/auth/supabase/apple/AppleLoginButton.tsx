import * as AppleAuthentication from "expo-apple-authentication";
import { handleAppleSignIn } from "./appleAuth";
import { TouchableOpacity, View, Text } from "react-native";

interface AppleLoginButtonProps {
  onError?: (error: any) => void;
}

export const AppleLoginButton = ({ onError }: AppleLoginButtonProps) => {
  const onAppleSignIn = async () => {
    const result = await handleAppleSignIn();
    if (result.success) {
      console.log("result.data", result.data);
    } else {
      onError?.(result.error);
    }
  };

  return (
    <TouchableOpacity
      className="h-12 w-96 flex-row items-center justify-center rounded-full bg-black"
      onPress={onAppleSignIn}
      activeOpacity={0.8}
    >
      <Text className="text-base font-medium text-white">애플 로그인</Text>
    </TouchableOpacity>
  );
};
