import React from "react";
import { View, Text } from "react-native";
import ProgressBar from "app/design/progress-bar";
const RealTimeUserAccuracyCard = ({ stats }) => {
  const correctRate = (stats.correctAnswers / stats.totalAnswers) * 100;
  const incorrectRate = (stats.incorrectAnswers / stats.totalAnswers) * 100;

  return (
    <View className="p-4 bg-white shadow-md rounded-lg mb-4">
      <Text className="text-lg font-semibold mb-2">실시간 사용자 정답률</Text>
      <View className="mb-4">
        <Text className="text-sm font-semibold">정답률</Text>
        <ProgressBar progress={correctRate} color="bg-green-500" />
        <Text className="text-sm text-green-600 mt-1">
          {correctRate.toFixed(1)}% ({stats.correctAnswers}/{stats.totalAnswers}
          )
        </Text>
      </View>
      <View>
        <Text className="text-sm font-semibold">오답률</Text>
        <ProgressBar progress={incorrectRate} color="bg-red-500" />
        <Text className="text-sm text-red-600 mt-1">
          {incorrectRate.toFixed(1)}% ({stats.incorrectAnswers}/
          {stats.totalAnswers})
        </Text>
      </View>
    </View>
  );
};

export default RealTimeUserAccuracyCard;
