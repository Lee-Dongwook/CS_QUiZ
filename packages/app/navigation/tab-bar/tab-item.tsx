import { View, Text, Pressable } from "react-native";
import type { TabItemProps } from "./types";

const StyledView = View;
const StyledText = Text;
const StyledPressable = Pressable;

interface TabItemComponentProps extends TabItemProps {
  isFocused: boolean;
  onPress: () => void;
}

export function TabItem({
  label,
  icon,
  isCamera,
  isFocused,
  onPress,
}: TabItemComponentProps) {
  if (isCamera) {
    return (
      <StyledPressable onPress={onPress}>
        <StyledView></StyledView>
      </StyledPressable>
    );
  }

  return (
    <StyledPressable
      onPress={onPress}
      className={`items-center pt-3 ${!isFocused && "opacity-50"}`}
    >
      <StyledText
        className={`text-secondary' mt-1 min-w-[60px] text-center text-xs`}
      >
        {label}
      </StyledText>
    </StyledPressable>
  );
}
