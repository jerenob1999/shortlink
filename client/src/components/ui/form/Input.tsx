"use client";

import React, { InputHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { FieldError } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className, error, label, ...props },
  ref
) {
  return (
    <div className="grid w-full items-center">
      <label>{label}</label>
      <input
        ref={ref}
        className={clsx("bg-slate-200 rounded-lg p-2 outline-none", className, {
          "border border-red-500": error,
        })}
        {...props}
      />
    </div>
  );
});

export default Input;
