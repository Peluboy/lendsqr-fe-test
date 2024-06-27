import LoginForm from "../LoginForm/LoginForm";
import LoginPictureSection from "../LoginPictureSection/LoginPictureSection";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <section className={classes.container}>
      <div className={classes.imageSection}>
        <LoginPictureSection />
      </div>

      <div className={classes.formSection}>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
