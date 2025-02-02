import { StyledTypography } from "./styled";
import type { TypographyProps } from "./types";

const variantStyles = {
  t1: "text-2xl leading-9 font-bold",
  t2: "text-xl leading-8 font-bold",
  t3: "text-lg leading-7 font-bold",
  c1: "text-base leading-6",
  c2: "text-sm leading-5",
  c3: "text-xs leading-4",
};

const weightStyles = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorStyles = {
  primary: "text-primary",
  secondary: "text-secondary",
  white: "text-white",
  black: "text-gray-900",
  gray: "text-gray-500",
  error: "text-point-coral",
  success: "text-point-green",
};

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function Typography({
  variant = "c1",
  weight,
  color = "black",
  align = "left",
  children,
  className = "",
  ...props
}: TypographyProps) {
  const combinedClassName = `
    ${variantStyles[variant]}
    ${weight ? weightStyles[weight] : ""}
    ${colorStyles[color]}
    ${alignStyles[align]}
    ${className}
  `.trim();

  return (
    <StyledTypography className={combinedClassName} {...props}>
      {children}
    </StyledTypography>
  );
}
