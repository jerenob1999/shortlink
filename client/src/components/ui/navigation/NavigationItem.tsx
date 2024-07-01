import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function NavigationItem({ className, children, href }: Props) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default NavigationItem;
