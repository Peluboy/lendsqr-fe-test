import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import {
  AuthContextValue,
  AuthUserContext,
} from "../../Context/AuthUserContext";
import classes from "./LoginForm.module.css";
import lendsqrLogo from "../../Assets/Images/lendsqrLogo.svg";

const LoginForm = () => {
  // Context
  const { setUser, user } = useContext(AuthUserContext) as AuthContextValue;

  // Navigation
  const navigate = useNavigate();

  // States
  const [email, setEmail] = useState<string>("");
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [buttonIsValid, setButtonIsValid] = useState(
    emailIsValid && passwordIsValid
  );
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (!event.target.value.trim().includes("@") || !event.target.value) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);

    if (event.target.value.length < 8) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  };

  const loginButtonClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setUser({
      email,
      password,
    });
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard/users");
  };

  const displayPasswordHandler = () => {
    setDisplayPassword(!displayPassword);
  };

  //   Effects
  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      setButtonIsValid(true);
    } else {
      setButtonIsValid(false);
    }

    // eslint-disable-next-line
  }, [emailIsValid, passwordIsValid]);

  return (
    <section className={classes.container}>
      <div className={classes.mobileLogoContainer}>
        <img src={lendsqrLogo} alt="lendsqr logo" />
      </div>
      <div className={classes.header}>
        <h4>Welcome!</h4>
        <p>Enter details to login.</p>
      </div>
      <div className={classes.formSection}>
        {/* Email Input */}
        <div className={classes.inputSubSection}>
          <Input
            value={email}
            type="text"
            placeholder=" "
            id="email"
            htmlFor="email"
            onChange={(event) => {
              emailChangeHandler(event);
            }}
            invalid={!emailIsValid}
          >
            Email
          </Input>
          {!emailIsValid && (
            <span className={classes.warning}>Invalid Email</span>
          )}
        </div>

        {/* Password Input */}
        <div className={classes.inputSubSection}>
          <Input
            value={password}
            type={displayPassword ? "text" : "password"}
            placeholder=" "
            id="password"
            htmlFor="password"
            onChange={(event) => {
              passwordChangeHandler(event);
            }}
            invalid={!passwordIsValid}
          >
            Password
          </Input>
          {!passwordIsValid && (
            <span className={classes.warning}>Invalid Password</span>
          )}
          <div
            className={classes.displayPasswordToggler}
            onClick={displayPasswordHandler}
          >
            {displayPassword ? "HIDE" : "SHOW"}
          </div>
        </div>

        {/* Forgot Password */}
        <div className={classes.forgotPassword}>FORGOT PASSWORD?</div>

        {/* Button */}
        <Button
          onClick={(event) => {
            loginButtonClickHandler(event);
          }}
          disabled={!buttonIsValid}
        >
          LOG IN
        </Button>
      </div>
    </section>
  );
};

export default LoginForm;
