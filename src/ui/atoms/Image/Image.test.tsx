import { render, screen } from "@testing-library/react";
import Image from "@/ui/atoms/Image/Image.tsx";
import "@testing-library/jest-dom";

describe("Image", () => {
  it("should render image with correct src and alt passed as props", () => {
    const src = "/path/to/your-image.jpg";
    const alt = "Alternative text";

    render(<Image src={src} alt={alt} />);

    const image = screen.getByRole("img", { name: /Alternative text/i });

    expect(image).toHaveAttribute("src", src);
    expect(image).toHaveAttribute("alt", alt);
  });
});
