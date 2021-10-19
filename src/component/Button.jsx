import React from "react";
import "./button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLORS = ["primary", "red", "blue", "green"];

export function Button({
  children,
  type,
  buttonStyle,
  buttonSize,
  buttonColor,
  onClick,
}) {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : SIZES[0];

  const checkButtonColor = COLORS.includes(buttonColor)
    ? buttonColor
    : SIZES[0];

  console.log(children, type, buttonStyle, buttonSize, buttonColor, onClick);

  return (
    <button
      className={`btn ${checkButtonSize} ${checkButtonStyle} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
