"use client";

import {
  Platform,
  TouchableOpacity,
  Image,
  View,
  Text,
  Linking,
  Pressable,
} from "react-native";
import { Typography } from "app/design/typography";

export function HomeScreen() {
  return (
    <>
      <View className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center space-y-3 px-6">
          <Typography className="mt-8" variant="t1" weight="bold">
            CS Quiz
          </Typography>
        </View>
      </View>
    </>
  );
}

export default HomeScreen;
