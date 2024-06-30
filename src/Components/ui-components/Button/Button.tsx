import classes from "./Button.module.scss";
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
