import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { describe, it, expect } from "vitest";

describe("Card component", () => {
  it("should render children correctly", () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should apply custom class names", () => {
    render(<Card className="custom-class">Test Component Classname</Card>);
    const cardElement = screen.getByText("Test Component Classname");
    expect(cardElement).toHaveClass("custom-class");
  });

  it("should apply default class names", () => {
    const cardElement = screen.getByText("Test Content");
    expect(cardElement).toHaveClass(
      "rounded-lg shadow-lg bg-neutral-50 p-2 min-w-64"
    );
  });

  it("should pass additional props to the div element", () => {
    render(<Card data-testid="card-element">Test Content</Card>);
    const cardElement = screen.getByTestId("card-element");
    expect(cardElement).toBeInTheDocument();
  });
});
