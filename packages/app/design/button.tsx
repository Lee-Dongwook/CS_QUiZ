import { Pressable, Text, type PressableProps } from "react-native";

interface ButtonProps extends PressableProps {
  variant?: "primary" | "secondary" | "default" | "success" | "danger";
  size?: "sm" | "md" | "lg";
  textSize?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  disabled?: boolean;
  className?: string;
  textClassName?: string;
  text: string;
}

export const Button = ({
  variant = "default",
  size = "md",
  textSize = "md",
  radius = "full",
  disabled = false,
  className = "",
  textClassName = "font-semibold",
  text,
  ...props
}: ButtonProps) => {
  const baseStyles = "w-full active:opacity-90";

  const variantStyles = {
    primary: "bg-primary",
    default: "bg-blue-500",
    secondary: "bg-gray-500",
    success: "bg-green-500",
    danger: "bg-red-500",
  };

  const sizeStyles = {
    sm: "px-3 py-2",
    md: "px-4 py-3",
    lg: "px-5 py-4",
  };

  const textSizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const radiusStyles = {
    none: "rounded-none",
    sm: "rounded",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <Pressable
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${radiusStyles[radius]}
        ${disabled ? "opacity-50" : ""}
        ${className}
      `}
      {...props}
    >
      <Text
        className={`
          text-center font-medium text-white
          ${textSizeStyles[textSize]}
          ${textClassName}
        `}
      >
        {text}
      </Text>
    </Pressable>
  );
};
