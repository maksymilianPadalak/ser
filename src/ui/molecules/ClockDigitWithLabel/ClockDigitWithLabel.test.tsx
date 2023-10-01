import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ClockDigitWithLabel } from "./ClockDigitWithLabel.tsx";

describe("ClockDigitWithLabel", () => {
  const testDigit = 1000;
  const testLabel = "ClockDigitWithLabel test label";

  it("should render component with digit and label passed as props", () => {
    render(<ClockDigitWithLabel digit={testDigit} label={testLabel} />);

    expect(screen.getByText(testDigit)).toBeInTheDocument();
    expect(screen.getByText(testLabel)).toBeInTheDocument();
  });
});
