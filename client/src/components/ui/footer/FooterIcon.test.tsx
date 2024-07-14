import { render, screen } from "@testing-library/react";
import FooterIcon from "./FooterIcon";
import { describe, it, expect } from "vitest";

const icon = "github";
const href = "www.google.com";

describe("FooterIcon component", () => {
  it("should render Footer", () => {
    render(<FooterIcon icon={icon} href={href} />);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should render a link with passed props", () => {
    render(<FooterIcon icon={icon} href={href} />);
    expect(screen.getAllByTitle(href)[0]).toHaveAttribute("href", href);
  });
});
