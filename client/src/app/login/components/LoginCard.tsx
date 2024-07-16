"use client";

import React from "react";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import { Path } from "@/types/router";
import Card from "@/components/ui/card/Card";
import LoginForm from "./LoginForm/LoginForm";
import { LoginFormData } from "@/types/login";
import { useMutation } from "@tanstack/react-query";

function LoginCard() {
  const { mutateAsync, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: (loginform: LoginFormData) => {
      return axios.post("http://localhost:3000/api/v1/auth", loginform);
    },
  });

  console.log(isPending, isError, error);
  const onSubmit = (data: LoginFormData) => {
    mutateAsync(data);
  };

  return (
    <Card className="h-3/5 w-1/3 border-2 px-8 py-12 max-w-md border-slate-200">
      <div className="flex flex-col items-center h-full w-full justify-between ">
        <h2 className="font-bold mb-10 text-2xl text-center">Login</h2>
        <LoginForm onSubmit={onSubmit} />
        <div>
          <span>New user? </span>
          <Link className="text-blue-600" href={Path.SIGNUP}>
            Create account here
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default LoginCard;
