import React from "react";
import LinkCardContainer from "@/app/user/dashboard/components/LinkCardContainer/LinkCardContainer";
import mockLinks from "./__mocks__/links";

function page() {
  return (
    <div className="h-full">
      <h1 className="text-gray-900 text-2xl px-24 font-bold">Dashboard</h1>
      <hr />
      <div className="h-full flex items-center justify-center">
        <LinkCardContainer links={mockLinks} />
      </div>
    </div>
  );
}

export default page;
