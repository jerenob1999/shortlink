import React from "react";
import Image from "next/image";
import Card from "@/components/ui/card/Card";
import { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  title: string;
  description: string;
}

function LandingCard({ src, title, description }: Props) {
  return (
    <Card className="flex lg:flex-col flex-row justify-between">
      <div className="flex justify-center">
        <Image className="w-24" src={src} alt={"logo"} />
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-base text-slate-900">{title}</p>
        <p className="font-normal text-slate-500 text-sm">{description}</p>
      </div>
    </Card>
  );
}

export default LandingCard;
