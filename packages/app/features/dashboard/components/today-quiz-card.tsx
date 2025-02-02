import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TodayQuizCard = ({ quiz }) => {
  return (
    <View className="p-4 bg-white shadow-md rounded-lg mb-4">
      <Text className="text-lg font-semibold mb-2">오늘의 퀴즈</Text>
      <Text className="text-md font-bold">{quiz.title}</Text>
      <Text className="text-sm text-blue-600">난이도: {quiz.difficulty}</Text>
      <Text className="text-sm text-gray-700 mt-2">{quiz.description}</Text>
      <TouchableOpacity
        className="mt-4 bg-blue-500 py-2 px-4 rounded-lg"
        onPress={() => console.log(`퀴즈 시작: ${quiz.id}`)}
      >
        <Text className="text-white text-center font-semibold">도전하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodayQuizCard;
