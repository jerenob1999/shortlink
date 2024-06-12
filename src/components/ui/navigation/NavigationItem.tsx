import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
  className?: string;
}

function NavigationItem({ className, title, href }: Props) {
  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
}

export default NavigationItem;
