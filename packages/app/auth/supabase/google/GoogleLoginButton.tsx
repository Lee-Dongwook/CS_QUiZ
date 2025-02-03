import { TouchableOpacity, Text, Image, View } from "react-native";
import { useEffect } from "react";
import { initializeGoogleSignIn, handleGoogleSignIn } from "./googleAuth";
import { supabase } from "app/utils/supabase";

interface GoogleLoginButtonProps {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export function GoogleLoginButton({
  onSuccess,
  onError,
}: GoogleLoginButtonProps) {
  useEffect(() => {
    initializeGoogleSignIn();
  }, []);

  const onGoogleSignIn = async () => {
    const result = await handleGoogleSignIn();
    if (result.success) {
      onSuccess?.(result.data);
    } else {
      onError?.(result.error);
    }
  };

  return (
    <TouchableOpacity
      className="h-12 w-96 flex-row items-center justify-center rounded-full bg-gray-100"
      onPress={onGoogleSignIn}
    >
      <View></View>
      <Text className="text-black">구글 로그인</Text>
    </TouchableOpacity>
  );
}
