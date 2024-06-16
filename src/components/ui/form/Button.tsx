import React from "react";
import { clsx } from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

function Button({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-lg bg-blue-600 px-6 py-2 text-neutral-50 hover:bg-blue-900 h-12 font-semibold text-lg",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
