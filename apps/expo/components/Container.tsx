import { View } from "react-native";
import React from "react";

const StyledView = View;

export function Container({ children }: { children: React.ReactNode }) {
  return <StyledView className="flex-1 bg-white">{children}</StyledView>;
}
