import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ClockDigit } from "./ClockDigit.tsx";

describe("ClockDigit", () => {
  it("should render component with digit passed as prop", () => {
    render(<ClockDigit digit={1} />);

    expect(screen.getByText(1)).toBeInTheDocument();
  });
});
