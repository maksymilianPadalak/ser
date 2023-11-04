import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeadingWithText } from "@/ui/molecules/HeadingWithText/HeadingWithText.tsx";

describe("HeadingWithText", () => {
  const testHeading = "Heading with text test heading";
  const testText = "Heading with text test text";

  it("should render component with heading only if passed as prop", () => {
    render(<HeadingWithText heading={testHeading} />);

    expect(screen.getByText(testHeading)).toBeInTheDocument();
  });

  it("should render component with heading and text passed as prop", () => {
    render(<HeadingWithText heading={testHeading} text={testText} />);

    expect(screen.getByText(testHeading)).toBeInTheDocument();
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
