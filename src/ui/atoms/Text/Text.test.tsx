import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text.tsx";

describe("Text", () => {
  const testText = "Text component test";

  it("should render component with text passed as prop", () => {
    render(<Text text={testText} />);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
