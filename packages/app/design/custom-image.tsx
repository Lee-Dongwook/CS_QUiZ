import { ImageStyle } from "react-native";
import { SolitoImage } from "solito/image";

type CustomImageProps = {
  src: string;
  contentFit: "contain" | "cover";
  style: ImageStyle | undefined;
  alt?: string;
};

export default function CustomImage({
  src,
  contentFit,
  style,
}: CustomImageProps) {
  //@ts-ignore
  return <SolitoImage src={src} contentFit={contentFit} style={style} />;
}
