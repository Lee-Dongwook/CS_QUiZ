import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useRouter } from "solito/router";

const LectureScreen = ({ lectures }) => {
  const { push } = useRouter();
  const handlePress = (videoUrl) => {
    push({ pathname: "/lecture/detail", query: { videoUrl } });
  };
  return (
    <View className="p-4 bg-gray-100 flex-1">
      <Text className="text-xl font-bold mb-4">퀴즈 관련 강의</Text>
      <FlatList
        data={lectures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row bg-white p-3 mb-3 rounded-lg shadow-md"
            onPress={() => handlePress(item.videoUrl)}
          >
            <Image
              source={{ uri: item.thumbnail }}
              className="w-24 h-24 rounded-md"
              resizeMode="cover"
            />
            <View className="ml-4 flex-1">
              <Text className="font-semibold text-lg text-gray-800">
                {item.title}
              </Text>
              <Text className="text-gray-600 text-sm mt-1">
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LectureScreen;
