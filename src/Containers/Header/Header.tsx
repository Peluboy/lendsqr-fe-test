import React, { useContext } from "react";
import classes from "./Header.module.scss";
import lendsqrLogo from "../../Assets/Images/lendsqrLogo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import profileImage from "../../Assets/Images/userProfileImage.svg";
import { AppContext } from "../../Context/AppContext";
import notificationBell from "../../Assets/Icons/notificationBell.svg"
import { AppContextValues } from "../../Utilities/types";

const Header = () => {
  const { searchValue, setSearchValue } = useContext(
    AppContext
  ) as AppContextValues;

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <section className={classes.container}>
      <div className={classes.logoSection}>
        <img src={lendsqrLogo} alt="lendsqr logo" />
      </div>
      <div className={classes.searchSection}>
        <input
          value={searchValue}
          type="text"
          placeholder="Search for anything"
          onChange={(event) => {
            searchChangeHandler(event);
          }}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className={classes.profileAndDocs}>
        <Link to="/">Docs</Link>
        <div>
          <img src={notificationBell} alt="notification bell" />
        </div>
        <div>
          <img src={profileImage} alt="Profile" />
          <span>Adedeji</span>
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>
      </div>
      <div className={classes.hamburgerMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </section>
  );
};

export default Header;
