import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  Text,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { BarChart } from "react-native-gifted-charts";
import { Button } from "app/design/button";
import Container from "app/design/container";
import CustomImage from "app/design/custom-image";
import { Calendar } from "app/design/calendar";
import ProgressBar from "app/design/progress-bar";
import { mockDashboardData } from "./lib/mockDashboardData";
import { mockQuizData } from "./lib/mockQuizData";
import CheckListCard from "./components/check-list-card";
import TodayQuizCard from "./components/today-quiz-card";
import RealTimeUserAccuracyCard from "./components/real-time-user-accuracy-card";

const DashboardScreen = () => {
  const [data, setData] = useState(mockDashboardData);
  const [quiz, setQuiz] = useState(mockQuizData);

  const barChartData = [
    { value: 2, label: "Mon" },
    { value: 3, label: "Tue" },
    { value: 1, label: "Wed" },
    { value: 4, label: "Thu" },
    { value: 2.5, label: "Fri" },
    { value: 3.5, label: "Sat" },
    { value: 5, label: "Sun" },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;

    if (isCloseToBottom) {
    }
  };

  return (
    <Container onScroll={handleScroll}>
      <Calendar
        headerTitle="캘린더"
        onDateSelect={(date) => console.log("Selected: ", date)}
      />

      <View className="p-4">
        {/* 프로필 카드 */}
        <View className="mt-2 p-4 bg-white shadow-md rounded-lg mb-4 items-center">
          <Text className="text-xl font-bold">
            {data.user.name}님, 환영합니다!
          </Text>
          <Text className="text-sm text-gray-900">
            LV. {data.user.level} | XP: {data.user.xp} | 랭킹: {data.user.rank}
            위
          </Text>
        </View>

        {/* 사용자 활동 요약 */}
        <View className="mt-2 p-4 bg-white shadow-md rounded-lg mb-4 items-center">
          <Text className="text-lg font-bold">최근 학습 활동</Text>
          <BarChart
            data={barChartData}
            barWidth={20}
            barBorderRadius={4}
            yAxisThickness={0}
            xAxisThickness={0}
            hideRules
            height={200}
          />
          <Text className="text-blue-700 text-sm mt-2">
            최근 7일간 학습 기록 (단위: 시간)
          </Text>
        </View>

        <TodayQuizCard quiz={quiz.todayQuiz} />
        <RealTimeUserAccuracyCard stats={quiz.answerStats} />

        {/* 퀴즈 진행도 */}
        <View className="p-4 bg-white shadow-md rounded-lg mb-4">
          <Text className="text-lg font-semibold">퀴즈 진행 상황</Text>
          <View className="mt-2 flex flex-col gap-4">
            <ProgressBar
              label="전체 진행도"
              progress={
                (data.progress.completedQuizzes / data.progress.totalQuizzes) *
                100
              }
            />
            <ProgressBar
              label="오늘 목표"
              progress={
                (data.progress.todayCompleted / data.progress.dailyGoal) * 100
              }
            />
          </View>
        </View>
        <View className="mt-10">
          <CheckListCard items={data.checkList} />
        </View>

        <View className=" mt-10 p-4 bg-white shadow-md rounded-lg mb-4">
          <Text className="text-lg font-semibold mb-2">추천 퀴즈</Text>
          <FlatList
            data={data.recommendedQuizzes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="p-2 bg-gray-100 rounded-md mb-2">
                <Text className="font-bold">{item.title}</Text>
                <Text className="mt-1 text-sm text-blue-600">
                  난이도 : {item.difficulty}
                </Text>
                <Button
                  className="mt-2 mb-2"
                  size="sm"
                  onPress={() => console.log(`퀴즈 시작: ${item.id}`)}
                  text="도전하기"
                />
              </View>
            )}
          />
        </View>
      </View>
    </Container>
  );
};

export default DashboardScreen;
