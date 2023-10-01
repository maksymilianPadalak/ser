import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Heading } from "./Heading.tsx";

describe("Heading", () => {
  const testText = "Heading test text";

  it("should render component with text passed as props", () => {
    render(<Heading text={testText} />);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
