import React from "react";
import { Link } from "@/types/link";

interface Props {
  link: Link;
}

function LinkCard({ link }: Props) {
  return (
    <article className="grid-rows-2 grid-cols-2 rounded-lg shadow-lg bg-neutral-50 p-4 flex flex-col justify-between">
      <div>
        <h5 className="font-bold text-gray-800 text-lg">{link.shortUrl}</h5>
        <p className="font-semibold text-gray-600 text-sm">{link.fullUrl}</p>
        <p className="text-gray-600 text-sm">{link.description}</p>
      </div>
      <div className="flex justify-end">
        <p className=" font-semibold text-gray-600 text-sm">
          Total clicks: {link.clicks}
        </p>
      </div>
    </article>
  );
}

export default LinkCard;
