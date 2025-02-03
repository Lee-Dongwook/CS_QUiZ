import { HomeScreen } from "app/features/home/screen";
import { asyncAuthStorage } from "app/utils/auth";
import { useEffect, useState } from "react";
import { Redirect, router } from "expo-router";
import { View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { Session } from "@supabase/supabase-js";
import axiosInstance from "app/api/axiosInstance";
import { supabase } from "app/utils/supabase";

interface OnboardingResponse {
  ok: boolean;
}

async function fetchOnboarding() {
  const { data } = await axiosInstance.get("/v1/user/onboarding");
  return data;
}

export default function Login() {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { data: onboardingData, isLoading: isOnboardingLoading } = useQuery({
    queryKey: ["onboarding"],
    queryFn: fetchOnboarding,
    enabled: !!session,
    retry: false,
    select: (data) => {
      return data.ok;
    },
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsLoading(false);
    });
  }, []);

  if (isLoading || (session && isOnboardingLoading)) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>로딩 중...</Text>
      </View>
    );
  }

  if (!session) {
    return <HomeScreen />;
  }

  if (!onboardingData) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/(main)/dashboard" />;
}
