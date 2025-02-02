import React from "react";
import { View } from "react-native";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }) => {
  return (
    <View className={`rounded-2xl bg-white p-6 shadow-sm ${className}`}>
      {children}
    </View>
  );
};
