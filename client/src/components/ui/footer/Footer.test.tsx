import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { describe, it, expect } from "vitest";

describe("Footer component", () => {
  it("should render Footer", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
