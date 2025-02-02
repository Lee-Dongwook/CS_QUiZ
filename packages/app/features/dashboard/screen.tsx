import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  Text,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { Button } from "app/design/button";
import Container from "app/design/container";
import CustomImage from "app/design/custom-image";
import { Calendar } from "app/design/calendar";
import ProgressBar from "app/design/progress-bar";
import { mockDashboardData } from "./lib/mockDashboardData";

const DashboardScreen = () => {
  const [data, setData] = useState(mockDashboardData);

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
      <View className="p-4 items-center">
        <Text className="text-xl font-bold">
          {data.user.name}님, 환영합니다!
        </Text>
        <Text className="text-sm">
          LV. {data.user.level} | XP: {data.user.xp} | 랭킹: {data.user.rank}위
        </Text>
      </View>

      {/* 퀴즈 진행도 */}
      <View className="p-4">
        <Text className="text-lg font-semibold">퀴즈 진행 상황</Text>
        <View className="mt-2 flex flex-col gap-10">
          <ProgressBar
            label="전체 진행도"
            progress={
              data.progress.completedQuizzes / data.progress.totalQuizzes
            }
          />
          <ProgressBar
            label="오늘 목표"
            progress={data.progress.todayCompleted / data.progress.dailyGoal}
          />
        </View>
      </View>
    </Container>
  );
};

export default DashboardScreen;
