"use client";

import React from "react";
import Card from "@/components/ui/card/Card";
import Input from "@/components/ui/form/Input";
import Button from "@/components/ui/form/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "@/types/register";
import { Path } from "@/types/router";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const schema: ZodType<RegisterFormData> = z
  .object({
    email: z.string().email().min(1, { message: "Required" }),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords does not match",
  });

const defaultValues = {
  email: "",
  password: "",
};

function RegisterCard() {
  const {
    register,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onSubmit",
    defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <Card className="h-4/5 w-1/3 border-2 px-8 py-12 max-w-md border-slate-200">
      <div className="flex flex-col items-center h-full w-full justify-between ">
        <form className="w-full">
          <h2 className="font-bold mb-10 text-2xl text-center">Register</h2>
          <Input
            error={errors.email}
            {...register("email")}
            label="Email"
            className="h-10 mt-2 mb-8 max-w-sm"
            placeholder="example@gmail.com "
          />
          <Input
            error={errors.password}
            {...register("password")}
            label="Password"
            className="h-10 mt-2 mb-8 max-w-sm"
            type="password"
          />
          <Input
            error={errors.confirmPassword}
            {...register("confirmPassword")}
            label="Confirm Password"
            className="h-10 mt-2 mb-8 max-w-sm"
            type="password"
          />
          <Button type="submit" className="w-full mt-4  h-12 max-w-sm">
            Register
          </Button>
        </form>
        <div>
          <span>Already have an account? </span>
          <Link className="text-blue-600" href={Path.LOGIN}>
            Login here
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default RegisterCard;
