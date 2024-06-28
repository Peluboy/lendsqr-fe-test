import React from "react";
import classes from "./Input.module.css";
import { InputProps } from "../../../Utilities/types";

const FormInput = ({
  type,
  onChange,
  placeholder,
  invalid,
  value,
  onBlur,
  name,
  children,
  id,
}: InputProps) => {
  return (
    <div className={classes.formInputSubClass}>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={
          invalid ? `${classes.textInput_invalid}` : `${classes.textInput}`
        }
        value={value}
        onBlur={onBlur}
        id={id}
      />
      <label className={classes.formInputLabel}
      >
        {children}
      </label>
    </div>
  );
};

export default FormInput;
