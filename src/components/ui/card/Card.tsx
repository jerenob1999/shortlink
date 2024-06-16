import React from "react";
import { clsx } from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

function Card({ children, className, ...props }: Props) {
  return (
    <div
      {...props}
      className={clsx(
        "rounded-lg shadow-lg bg-neutral-50 p-2 min-w-64",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
