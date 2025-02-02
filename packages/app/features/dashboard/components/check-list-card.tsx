import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface CheckListCardProps {
  id: string;
  title: string;
  completed: boolean;
}

const CheckListCard = ({ items }: { items: CheckListCardProps[] }) => {
  const [checkList, setCheckList] = useState(items);

  const toggleItem = (id: string) => {
    setCheckList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <View className="w-full p-4 bg-white shadow-md rounded-lg">
      <Text className="text-lg font-semibold mb-2">체크리스트</Text>
      {checkList.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => toggleItem(item.id)}
          className="flex-row items-center justify-between p-2 border-b last:border-none"
        >
          <Text
            className={`text-md ${item.completed ? "text-gray-400 line-through" : "text-gray-900"}`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CheckListCard;
