import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/ui-components/Button/Button";
import Input from "../../Components/ui-components/Input/Input";
import { AuthContextValue, AuthUserContext } from "../../Context/AuthUserContext";
import classes from "./LoginForm.module.scss";
import lendsqrLogo from "../../Assets/Images/lendsqrLogo.svg";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

const LoginForm = () => {
  const { setUser, user } = useContext(AuthUserContext) as AuthContextValue;
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [buttonIsValid, setButtonIsValid] = useState(emailIsValid && passwordIsValid);
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailIsValid(emailRegex.test(event.target.value.trim()));
  };

  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordIsValid(passwordRegex.test(event.target.value.trim()));
  };

  const loginButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setUser({ email, password });
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard/users");
  };

  const displayPasswordHandler = () => {
    setDisplayPassword(!displayPassword);
  };

  useEffect(() => {
    setButtonIsValid(emailIsValid && passwordIsValid);
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
        <div className={classes.inputSubSection}>
          <Input
            value={email}
            type="text"
            placeholder=" "
            id="email"
            onChange={emailChangeHandler}
            invalid={!emailIsValid}
          >
            Email
          </Input>
          {!emailIsValid && <span className={classes.warning}>Invalid Email</span>}
        </div>

        <div>
        <div className={classes.inputSubSection}>
          <Input
            value={password}
            type={displayPassword ? "text" : "password"}
            placeholder=" "
            id="password"
            onChange={passwordChangeHandler}
            invalid={!passwordIsValid}
          >
            Password
          </Input>
          <div className={classes.displayPasswordToggler} onClick={displayPasswordHandler}>
            {displayPassword ? "HIDE" : "SHOW"}
          </div>
        </div>

          <small className={classes.passwordInstructions}>
            Password: 8+ chars, 1+ letter, 1+ number
          </small>
          {!passwordIsValid && <span className={classes.warning}>Invalid Password</span>}
          
        </div>

        <div className={classes.forgotPassword}>FORGOT PASSWORD?</div>

        <Button onClick={loginButtonClickHandler} disabled={!buttonIsValid}>
          LOG IN
        </Button>
      </div>
    </section>
  );
};

export default LoginForm;
