"use client";

import React, { InputHTMLAttributes } from "react";
import { clsx } from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Input({ className, label, ...props }: Props) {
  return (
    <div className="grid w-full max-w-sm items-center">
      <label>{label}</label>
      <input
        className={clsx("bg-slate-200 rounded-lg", className)}
        {...props}
      />
    </div>
  );
}

export default Input;
