import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import axios from "axios";
import CustomImage from "app/design/custom-image";
import { Typography } from "app/design/typography";
import { Button } from "app/design/button";
import { useSafeArea } from "app/provider/safe-area/use-safe-area";
import Container from "app/design/container";

export function SettingScreen() {
  const { top } = useSafeArea();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [name, setName] = useState<string>("홍길동");
  const [nickname, setNickname] = useState<string>("김퀴즈");
  const [birthDate, setBirthDate] = useState({ year: 2025, month: 1, day: 1 });
  const [national, setNational] = useState<string>("대한민국");
  const [language, setLanguage] = useState<string>("한글");
  const [gender, setGender] = useState<string>("male");

  const handleUploadImage = async () => {
    try {
      const response = await fetch(selectedImage as string);
      const blob = await response.blob();

      const formData = new FormData();
      formData.append("file", blob, "photo.jpg");

      const uploadResponse = await axios.post("/example", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(uploadResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    try {
      const payload = {
        name,
        nickname,
        birthDate,
        national,
        language,
        gender,
      };

      console.log(payload);
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <Container>
      <View className="p-4">
        <View className="mt-4">
          <TouchableOpacity className="items-center">
            {selectedImage ? (
              <CustomImage
                src={selectedImage}
                contentFit="contain"
                style={{ width: 100, height: 100 }}
              />
            ) : (
              <View className="bg-gray-300 rounded-full w-24 h-24 items-center justify-center">
                <Typography variant="t2">이미지 선택</Typography>
              </View>
            )}
          </TouchableOpacity>

          <View className="mt-6 gap-6">
            <View className="p-2">
              <Typography variant="t2">이름</Typography>
              <TextInput
                value={name}
                placeholder="이름"
                onChangeText={setName}
                className="font-pretendard mt-3 h-10 w-full rounded-xl bg-white px-6 font-bold text-black"
              />
            </View>

            <View className="p-2">
              <Typography variant="t2">닉네임</Typography>
              <TextInput
                value={nickname}
                placeholder="닉네임"
                onChangeText={setNickname}
                className="font-pretendard mt-3 h-10 w-full rounded-xl bg-white px-6 font-bold text-black"
              />
            </View>

            {/* 국가 */}
            <View className="p-2">
              <Typography variant="t2">국가</Typography>
              <TextInput
                value={national}
                aria-disabled
                placeholder="국가"
                className="font-pretendard mt-3 h-10 w-full rounded-xl bg-white px-4 text-black"
              />
            </View>

            {/* 언어 */}
            <View className="p-2">
              <Typography variant="t2">언어</Typography>
              <TextInput
                value={language}
                aria-disabled
                placeholder="언어"
                className="font-pretendard mt-3 h-10 w-full rounded-xl bg-white px-4 text-black"
              />
            </View>

            {/* 성별 */}
            <View className="p-2">
              <Typography variant="t2">성별</Typography>
              <View className="flex-row justify-center mt-5 gap-10">
                <TouchableOpacity
                  onPress={() => setGender("male")}
                  className={`w-32 h-10 justify-center items-center px-4 py-2 rounded-xl ${
                    gender === "male" ? "bg-blue-500" : "bg-gray-200"
                  }`}
                >
                  <Text
                    className={`font-bold ${
                      gender === "male" ? "text-white" : "text-black"
                    }`}
                  >
                    남성
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setGender("female")}
                  className={`w-32 h-10 justify-center items-center px-4 py-2 rounded-xl ${
                    gender === "female" ? "bg-blue-500" : "bg-gray-200"
                  }`}
                >
                  <Text
                    className={`font-bold ${
                      gender === "female" ? "text-white" : "text-black"
                    }`}
                  >
                    여성
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
}
