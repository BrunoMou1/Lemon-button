import styled from "styled-components";
import { IButton } from "./Button";

const colors = {
  primary: "#026C00",
  secondary: "#F7C346",

  primaryHover: "#079504",
  secondaryHover: "#FFDF77",

  primaryDisabled: "#B7D0B6",
  secondaryDisabled: "#FFE58D",

  primaryActive: "#013C00",
  secondaryActive: "#DCAC0D",
};

export const Button = styled.button<IButton>`
  width: 100%;
  height: 56px;
  min-width: 311px;
  margin-bottom: 10px;
  border: 0;
  color: #fff;
  padding: 0 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding-left: 80%;
  }

  background: ${(props: IButton) =>
    props.buttonType === "secondary" ? colors.secondary : colors.primary};

  color: ${(props: IButton) =>
    props.buttonType === "secondary" ? "#000" : "#fff"};

  &:hover {
    background: ${(props: IButton) =>
      props.buttonType === "secondary"
        ? colors.secondaryHover
        : colors.primaryHover};
  }

  &:active {
    background: ${(props: IButton) =>
      props.buttonType === "secondary"
        ? colors.secondaryActive
        : colors.primaryActive};
  }

  &:disabled {
    background: ${(props: IButton) =>
      props.buttonType === "secondary"
        ? colors.secondaryDisabled
        : colors.primaryDisabled};

    color: #fff;
  }
`;
