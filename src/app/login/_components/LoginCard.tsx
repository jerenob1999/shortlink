import React from "react";
import Card from "@/components/ui/card/Card";
import Input from "@/components/ui/form/Input";

function LoginCard() {
  return (
    <Card className="h-1/2 w-1/2">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl">Login</h2>
        <Input label="Email" className="h-8" />
        <Input label="Password" className="h-8" />
      </div>
    </Card>
  );
}

export default LoginCard;
