import { View, Platform } from "react-native";
import { useRouter } from "solito/router";
import { TAB_ITEMS } from "./constants";
import { TabItem } from "./tab-item";
import type { TabBarProps } from "./types";

const StyledView = View;

export function TabBar({ currentPath, onTabPress }: TabBarProps) {
  const router = useRouter();

  const activePath = currentPath;

  const handlePress = (path: string) => {
    if (onTabPress) {
      onTabPress(path);
    } else {
      router.push(path);
    }
  };

  return (
    <StyledView
      className={`absolute bottom-0 left-0 right-0 h-[85px] overflow-visible rounded-t-[20px] border-t border-t-[#f0f0f0] bg-white`}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: Platform.OS === "android" ? 10 : 0,
      }}
    >
      <StyledView className="flex-row items-center justify-center h-full">
        {TAB_ITEMS.map((item) => (
          <TabItem
            key={item.href}
            {...item}
            isFocused={activePath === item.href}
            onPress={() => handlePress(item.href)}
          />
        ))}
      </StyledView>
    </StyledView>
  );
}
