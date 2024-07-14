import React from "react";
import LinkCard from "@/app/user/dashboard/components/LinkCard/LinkCard";
import { Link } from "@/types/link";

interface Props {
  links: Link[];
}

function LinkCardContainer({ links }: Props) {
  return (
    <section className="p-8 h-5/6 w-5/6 grid md:grid-cols-1 grid-rows-4 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {links.map((link) => (
        <LinkCard link={link} />
      ))}
    </section>
  );
}

export default LinkCardContainer;
