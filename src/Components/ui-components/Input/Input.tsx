import React from "react";
import classes from "./Input.module.css";
import { InputProps } from "../../../Utilities/types";

const Input = ({
  type,
  onChange,
  placeholder,
  invalid,
  value,
  onBlur,
  children,
  id,
}: InputProps) => {
  return (
    <div className={classes.inputSubClass}>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={
          invalid ? `${classes.textInput_invalid}` : `${classes.textInput}`
        }
        value={value}
        onBlur={onBlur}
        id={id}
      />
      <label className={classes.inputLabel} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default Input;
