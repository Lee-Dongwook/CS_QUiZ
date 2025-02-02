import { TextProps } from "react-native";

export type TypographyVariant = "t1" | "t2" | "t3" | "c1" | "c2" | "c3";
export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";
export type TypographyColor =
  | "primary"
  | "secondary"
  | "white"
  | "black"
  | "gray"
  | "error"
  | "success";
export type TypographyAlign = "left" | "center" | "right";

export interface StyledTypographyProps extends TextProps {
  $variant?: TypographyVariant;
  $weight?: TypographyWeight;
  $color?: TypographyColor;
  $align?: TypographyAlign;
}

export interface TypographyProps extends Omit<TextProps, "children"> {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
  align?: TypographyAlign;
  children?: React.ReactNode;
  className?: string;
}
