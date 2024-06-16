"use client";

import React, { InputHTMLAttributes } from "react";
import { clsx } from "clsx";
import { FieldError } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

function Input({ className, error, label, ...props }: Props) {
  return (
    <div className="grid w-full items-center">
      <label>{label}</label>
      <input
        className={clsx("bg-slate-200 rounded-lg p-2 outline-none", className, {
          "border border-red-500": error,
        })}
        {...props}
      />
    </div>
  );
}

export default Input;
