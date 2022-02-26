import { render, screen } from "@testing-library/react";
import { ComponentButton } from "./Button";

describe("Button", () => {
  it("should render correctly children", () => {
    render(<ComponentButton>Text</ComponentButton>);

    expect(screen.getByText("Text")).toBeInTheDocument();
  });

  it("check button primary color", () => {
    render(<ComponentButton>Text</ComponentButton>);
    expect(screen.getByText("Text")).toHaveStyle("background-color: #026C00");
  });

  it("check button secondary color", () => {
    render(<ComponentButton buttonType="secondary">Text</ComponentButton>);
    expect(screen.getByText("Text")).toHaveStyle("background-color: #F7C346");
  });

  it("check button primary disabled color", () => {
    render(<ComponentButton disabled>Text</ComponentButton>);
    expect(screen.getByText("Text")).toHaveStyle("background-color: #B7D0B6");
  });

  it("check button secondary disabled color", () => {
    render(
      <ComponentButton buttonType="secondary" disabled>
        Text
      </ComponentButton>
    );
    expect(screen.getByText("Text")).toHaveStyle("background-color: #FFE58D");
  });

  it("check button icon", () => {
    render(<ComponentButton icon="arrow-right">Text</ComponentButton>);
    expect(screen.getByTitle("icon")).toHaveStyle("padding-left: 80%");
  });
});
