import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../views/components/ui/button";
import React from "react";

describe("Button Component", () => {
  it("renders correctly with given text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = vitest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
