import { useState, type ReactNode } from "react";
import { View, Text, Pressable, Modal, ScrollView, Switch } from "react-native";
import {
  format,
  addDays,
  addMonths,
  subMonths,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  endOfWeek,
  startOfWeek,
  getDay,
} from "date-fns";
import { ko, enUS } from "date-fns/locale";

interface DayMarker {
  component: ReactNode;
  percentage?: number;
}

interface THeaderOptions {
  showSettings?: boolean;
}

export const WEEKS = ["일", "월", "화", "수", "목", "금", "토"];

const LANGUAGE = {
  ko: ko,
  en: enUS,
};

interface CalendarProps {
  isExpandable?: boolean;
  headerTitle?: string;
  renderDayMarker?: (date: Date) => ReactNode;
  renderHeaderMarker?: (date: Date) => ReactNode;
  onDateSelect?: (date: Date) => void;
  initialDate?: Date;
  onBack?: () => void;
  headerOptions?: THeaderOptions;
}

export const Calendar = ({
  isExpandable = false,
  headerTitle = "Calendar",
  renderDayMarker,
  renderHeaderMarker,
  onDateSelect,
  initialDate = new Date(),
  onBack,
  headerOptions,
}: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [currentMonth, setCurrentMonth] = useState(initialDate);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isExecutable, setIsExecutable] = useState(false);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onDateSelect?.(date);
  };

  const handleMonthChange = (direction: "prev" | "next") => {
    const newMonth =
      direction === "prev"
        ? subMonths(currentMonth, 1)
        : addMonths(currentMonth, 1);
    setCurrentMonth(newMonth);
  };

  const weekDays = [-3, -2, -1, 0, 1, 2, 3].map((diff) =>
    addDays(selectedDate, diff)
  );

  const getMonthDays = (date: Date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    return eachDayOfInterval({ start, end });
  };

  const WeekHeader = ({ onBack, headerOptions }: Partial<CalendarProps>) => (
    <View>
      <View className="bg-secondary rounded-b-3xl px-4 pb-6 pt-5">
        <View className="mb-6 mt-6 flex-row items-center justify-between">
          {onBack && <Pressable onPress={onBack}></Pressable>}
          {onBack ? <View></View> : <></>}
          <View className="flex-row gap-[15px]">
            {headerOptions?.showSettings && <></>}
          </View>
        </View>
        <View className="flex-row justify-between px-2">
          {weekDays.map((date, idx) => (
            <View key={idx} className="items-center px-2">
              <Text className="text-sm text-gray-400">
                {format(date, "EEE")}
              </Text>
              <Text
                className={`mb-2 text-xl ${
                  format(date, "yyyy-MM-dd") ===
                  format(new Date(), "yyyy-MM-dd")
                    ? "text-blue-400"
                    : "text-white"
                }`}
              >
                {format(date, "d")}
              </Text>
              {renderHeaderMarker && (
                <View className="mt-2">{renderHeaderMarker(date)}</View>
              )}
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-100">
      <WeekHeader onBack={onBack} headerOptions={headerOptions} />
    </View>
  );
};
