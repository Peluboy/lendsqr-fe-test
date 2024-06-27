import React from "react";
import classes from "./Button.module.css";
import { ButtonProps } from "../../../Utilities/types";

const Button = ({
  children,
  invalid,
  isSendingRequest,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={
        invalid || isSendingRequest
          ? `${classes.button_invalid}`
          : `${classes.button}`
      }
      onClick={onClick}
      // type="button"
    >
      {children}
    </button>
  );
};

export default Button;
