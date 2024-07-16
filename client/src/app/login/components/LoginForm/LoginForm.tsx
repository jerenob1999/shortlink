import React from "react";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { LoginFormData } from "@/types/login";
import Input from "@/components/ui/form/Input";
import Button from "@/components/ui/form/Button";
import { zodResolver } from "@hookform/resolvers/zod";

const schema: ZodType<LoginFormData> = z.object({
  email: z.string().email().min(1, { message: "Required" }),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

const defaultValues = {
  email: "",
  password: "",
};

interface Props {
  onSubmit: (data: LoginFormData) => void;
}

function LoginForm({ onSubmit }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>({
    mode: "onSubmit",
    defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
      <Button type="submit" className="w-full mt-4  h-12 max-w-sm">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
