import React from "react";
import Image from "next/image";
import Card from "@/components/ui/card/Card";
import { StaticImageData } from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface Props {
  src: StaticImageData;
  title: string;
  description: string;
}

function LandingCard({ src, title, description }: Props) {
  return (
    <Card className="flex flex-col justify-between">
      <div className="flex justify-center">
        <Image className="w-24" src={src} alt={"logo"} />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <IoMdCheckmarkCircleOutline className="font-semibold text-green-600 text-3xl min-w-8" />
        </div>
        <p className="font-medium text-base text-slate-900">{title}</p>
        <p className="font-normal text-slate-500 text-sm">{description}</p>
      </div>
    </Card>
  );
}

export default LandingCard;
