import React from "react";

interface ButtonProps {
  styles?: string;
  name: string;
  handler: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  styles,
  name,
  handler,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={() => handler()}
      className={`border-2 rounded-md border-extraligthBlack capitalize text-extraligthBlack
      ${disabled && "opacity-20"}  ${styles}`}
    >
      {name}
    </button>
  );
};
