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
    <View className="mt-4">
      <Text className="mb-2 font-bold text-lg">
        {label} {progress}%
      </Text>
      <View className="w-full overflow-hidden rounded-full bg-[#E4E4E4] justify-center">
        <View
          className={`rounded-full ${color}`}
          style={{
            width: `${clampedProgress}%`,
            height: height,
          }}
        />
      </View>
    </View>
  );
};

export default ProgressBar;
