import React from "react";
import LinkCard from "@/app/user/dashboard/components/LinkCard/LinkCard";
import { Link } from "@/types/link";

interface Props {
  links: Link[];
}

function LinkCardContainer({ links }: Props) {
  return (
    <div>
      {links.map((link) => (
        <LinkCard link={link} />
      ))}
    </div>
  );
}

export default LinkCardContainer;
