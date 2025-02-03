import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Alert } from "react-native";
import { Button } from "app/design/button";

const TodayQuizCard = ({ quiz }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const quizQuestion = {
    question: "JavaScript의 변수 선언 키워드 중 값 재할당이 불가능한 것은?",
    options: ["var", "let", "const"],
    correctAnswer: "const",
  };

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const checkAnswer = () => {
    if (selectedAnswer === quizQuestion.correctAnswer) {
      Alert.alert("정답입니다!");
      setSelectedAnswer(null);
      setIsModalVisible(false);
    } else {
      Alert.alert("틀렸습니다. 다시 시도해주세요.");
      setSelectedAnswer(null);
    }
  };

  return (
    <View>
      <View className="p-4 bg-white shadow-md rounded-lg mb-4">
        <Text className="text-lg font-semibold mb-2">오늘의 퀴즈</Text>
        <Text className="text-md font-bold">{quiz.title}</Text>
        <Text className="text-sm text-blue-600">난이도: {quiz.difficulty}</Text>
        <Text className="text-sm text-gray-700 mt-2">{quiz.description}</Text>
        <TouchableOpacity
          className="mt-4 bg-blue-500 py-2 px-4 rounded-lg"
          onPress={() => setIsModalVisible(true)}
        >
          <Text className="text-white text-center font-semibold">도전하기</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-lg p-6 w-4/5">
            <Text className="text-lg font-bold text-center mb-4">
              {quizQuestion.question}
            </Text>
            {quizQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                className={`p-3 rounded-lg mb-3 ${selectedAnswer === option ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                onPress={() => handleAnswerSelection(option)}
              >
                <Text
                  className={`text-center ${
                    selectedAnswer === option ? "text-white" : "text-gray-800"
                  }`}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
            <Button text="확인" onPress={checkAnswer} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TodayQuizCard;
