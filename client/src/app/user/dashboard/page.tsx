import React from "react";
import LinkCardContainer from "@/app/user/dashboard/components/LinkCardContainer/LinkCardContainer";
import mockLinks from "./__mocks__/links";

function page() {
  return (
    <div>
      <LinkCardContainer links={mockLinks} />
    </div>
  );
}

export default page;
