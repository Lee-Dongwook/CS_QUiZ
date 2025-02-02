import { HomeScreen } from "app/features/home/screen";
import { useEffect, useState } from "react";
import { Redirect, router } from "expo-router";
import { View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "app/api/axiosInstance";

interface OnboardingResponse {
  ok: boolean;
}

export default function Login() {
  return <HomeScreen />;
}
