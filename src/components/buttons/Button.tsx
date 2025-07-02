import React from "react";
import { classMerge } from "../../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "confirm" | "cancel";
};

const variants = {
  button: {
    confirm: "bg-indigo-400 hover:bg-indigo-900",
    cancel: "bg-red-400 hover:bg-red-600",
  },
};

export default function Button({
  children,
  isLoading,
  className,
  type = "button",
  variant = "confirm",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={classMerge([
        "flex items-center justify-center h-12 w-[14rem] transition-all ease-in",
        variants.button[variant],
        isLoading && "cursor-progress",
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
