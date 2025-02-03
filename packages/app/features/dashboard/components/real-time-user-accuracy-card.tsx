import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const RealTimeUserAccuracyCard = ({ stats }) => {
  const correctRate = (stats.correctAnswers / stats.totalAnswers) * 100;
  const incorrectRate = (stats.incorrectAnswers / stats.totalAnswers) * 100;

  const pieChartData = [
    { value: 80, color: "#4caf50", text: "정답률" },
    { value: 20, color: "#f44336", text: "오답률" },
  ];

  return (
    <View className="p-4 bg-white shadow-md items-center rounded-lg mb-4">
      <Text className="text-lg font-semibold mb-2">실시간 사용자 정답률</Text>
      <PieChart
        data={pieChartData}
        donut
        radius={80}
        innerRadius={50}
        showText
        textColor="white"
        textSize={12}
        centerLabelComponent={() => (
          <Text className="text-lg font-bold text-white">정답률</Text>
        )}
      />
      <View className="flex-row justify-between gap-6 mt-4">
        <View className="flex-row items-center gap-2">
          <View className="w-4 h-4 rounded-full bg-green-500" />
          <Text className="text-gray-700">정답: 80%</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="w-4 h-4 rounded-full bg-red-500" />
          <Text className="text-gray-700">오답: 20%</Text>
        </View>
      </View>
    </View>
  );
};

export default RealTimeUserAccuracyCard;
