import React from "react";
import { View, Text } from "react-native";

interface ProgressBarProps {
  label?: string;
  progress: number;
  height?: number;
  color?: string;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { label = "", progress, height = 8, color = "bg-blue-500" } = props;

  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <View className="w-full p-4 overflow-hidden rounded-full bg-[#E4E4E4] items-center justify-center">
      <Text className="">{label}</Text>
      <View
        className={`rounded-full ${color}`}
        style={{
          backgroundColor: color,
          width: `${clampedProgress}%`,
          height: height,
        }}
      />
    </View>
  );
};

export default ProgressBar;
