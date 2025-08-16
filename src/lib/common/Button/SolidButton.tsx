import { Button, ButtonProps } from "antd";
import { twMerge } from "tailwind-merge";

export const SolidButton = ({ className, ...props }: ButtonProps) => {
  return (
    <Button {...props} variant="solid" className={twMerge(`${className}`)} />
  );
};

export const SolidButtonRed = ({ className, ...props }: ButtonProps) => {
  return (
    <SolidButton {...props} className={`bg-red-700 text-white ${className}`} />
  );
};

export const SolidButtonGreen = ({ className, ...props }: ButtonProps) => {
  return (
    <SolidButton
      {...props}
      rootClassName="bg-green-700 text-white"
      className={`bg-green-700 text-white ${className}`}
    />
  );
};

export const SolidButtonBlue = ({ className, ...props }: ButtonProps) => {
  return (
    <SolidButton {...props} className={`bg-blue-700 text-white ${className}`} />
  );
};

export const SolidButtonYellow = ({ className, ...props }: ButtonProps) => {
  return (
    <SolidButton
      {...props}
      className={`bg-yellow-500 text-white ${className}`}
    />
  );
};
