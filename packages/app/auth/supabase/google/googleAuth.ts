import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import axiosInstance from "app/api/axiosInstance";
import { supabase } from "app/utils/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { asyncAuthStorage } from "app/utils/auth";

export const initializeGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: "",
    iosClientId: "",
    offlineAccess: true,
    forceCodeForRefreshToken: true,
  });
};

export const handleGoogleSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    if (userInfo.data?.idToken) {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: userInfo.data.idToken,
      });

      const res = await axiosInstance.post("/v1/user", {
        email: data.session?.user.email,
        authProvider: "GOOGLE",
        supabaseUuid: data.session?.user.id,
        gender: "MALE",
        isPolicyAgreeded: true,
      });

      if (data.session) {
        await asyncAuthStorage.setSession(data.session);
      }

      return { success: res.data.ok, data, error };
    } else {
      throw new Error("no Id token present!");
    }
  } catch (error: any) {
    let errorMessage = "Unknown error occurred";

    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      errorMessage = "Sign in cancelled";
    } else if (error.code === statusCodes.IN_PROGRESS) {
      errorMessage = "Sign in already in progress";
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      errorMessage = "Play services not available";
    }

    return {
      success: false,
      error: {
        code: error.code,
        message: errorMessage,
      },
    };
  }
};
