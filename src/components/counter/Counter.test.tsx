import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders Counter title text", () => {
  render(<Counter />);
  const element = screen.getByText(/Counter title/i);
  expect(element).toBeInTheDocument();
});
