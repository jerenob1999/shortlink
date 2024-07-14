import React from "react";
import shield from "../../../../public/shield.png";
import LandingCard from "../LandingCard/LandingCard";
import bestprice from "../../../../public/best-price.png";
import userfriendly from "../../../../public/user-friendly.png";

const cards = [
  {
    src: userfriendly,
    title: "Intuitive interface and easy to use.",
    description:
      "Once Login, you will have access to all of our premium features without needing your credit card account.",
  },
  {
    src: shield,
    title: "Data and statistics 100% secure.",
    description:
      "Once Login, you will have access to all of our premium features without needing your credit card account.",
  },
  {
    src: bestprice,
    title: "30 days of trial 100% Free.",
    description:
      "Once Login, you will have access to all of our premium features without needing your credit card account.",
  },
];

function CardContainer() {
  return (
    <div className="p-8 grid lg:grid-rows-1 lg:grid-cols-3 grid-rows-3 grid-cols-1 gap-2">
      {cards.map(({ src, title, description }) => (
        <LandingCard src={src} title={title} description={description} />
      ))}
    </div>
  );
}

export default CardContainer;
