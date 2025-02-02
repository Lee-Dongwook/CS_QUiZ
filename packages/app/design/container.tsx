import { useSafeArea } from "app/provider/safe-area/use-safe-area.web";
import { Platform, type StyleProp, type ViewStyle } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

interface ContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  bottomOffset?: number;
  onScroll?: (event: any) => void;
  scrollEventThrottle?: number;
  backgroundColor?: string;
  applyAndroidTopPadding?: boolean;
}

export default function Container({
  children,
  style,
  contentContainerStyle,
  bottomOffset = 62,
  onScroll,
  scrollEventThrottle = 16,
  backgroundColor = "#F0F4F9",
  applyAndroidTopPadding = true,
}: ContainerProps) {
  const { top } = useSafeArea();

  const topPadding = Platform.select({
    android: applyAndroidTopPadding ? top : 0,
    ios: 0,
  });

  return (
    <KeyboardAwareScrollView
      bottomOffset={bottomOffset}
      style={[{ flex: 1, marginBottom: bottomOffset, backgroundColor }, style]}
      contentContainerStyle={[
        { paddingTop: topPadding },
        contentContainerStyle,
      ]}
      onScroll={onScroll}
      scrollEventThrottle={scrollEventThrottle}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}
