import classes from "./LoginPictureSection.module.scss";
import lendsqrLogo from "../../Assets/Images/lendsqrLogo.svg";
import lensdqrLoginImage from "../../Assets/Images/lensdqrLoginImage.svg";

const LoginPictureSection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.lendsqrLogoSection}>
        <img src={lendsqrLogo} alt="lendsqr-logo" />
      </div>
      <div className={classes.loginImageSection}>
        <img src={lensdqrLoginImage} alt="lendsqr-image" />
      </div>
    </section>
  );
};

export default LoginPictureSection;
