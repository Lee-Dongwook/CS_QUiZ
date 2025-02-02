import { NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import { useEffect, useState } from "react";
import Container from "app/design/container";
import CustomImage from "app/design/custom-image";
import { Calendar } from "app/design/calendar";

const DashboardScreen = () => {
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
    </Container>
  );
};

export default DashboardScreen;
