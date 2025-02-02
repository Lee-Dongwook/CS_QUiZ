import { Platform, TextInput, TouchableOpacity, View } from "react-native";
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

  return (
    <Container>
      <View className="p-4">
        <View className="mt-4">
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
