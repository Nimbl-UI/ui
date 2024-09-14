import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("Renders button with text as child", () => {
    const sampleText = "Click me";

    const { getByText } = render(<Button>{sampleText}</Button>);
    const sample = getByText(sampleText);
    expect(sample).toBeInTheDocument();
  });
});
