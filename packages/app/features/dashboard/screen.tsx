import { NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import { useEffect, useState } from "react";
import Container from "app/design/container";

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
      <></>
    </Container>
  );
};

export default DashboardScreen;
