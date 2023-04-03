import React from "react";
import { render, screen } from "@testing-library/react";
import User from "./User";

test("renders User title text", () => {
  render(<User />);
  const element = screen.getByText(/User title/i);
  expect(element).toBeInTheDocument();
});
