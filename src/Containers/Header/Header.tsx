import React, { useContext, useState } from "react";
import classes from "./Header.module.scss";
import lendsqrLogo from "../../Assets/Images/lendsqrLogo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../../Assets/Images/userProfileImage.svg";
import { AppContext } from "../../Context/AppContext";
import notificationBell from "../../Assets/Icons/notificationBell.svg";
import { AppContextValues } from "../../Utilities/types";
import SideNav from "../SideNav/SideNav";
import { MenuProps } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const Header = () => {
  const { searchValue, setSearchValue, filterData } = useContext(AppContext) as AppContextValues;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    filterData(value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const items: MenuProps["items"] = [
    {
      label: "Profile",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Settings",
      key: "2",
      icon: <SettingOutlined />,
    },
    {
      label: "Logout",
      key: "3",
      icon: <LoginOutlined />,
      danger: true,
    },
  ];

  return (
    <>
      <section className={classes.container}>
        <div className={classes.logoSection}>
          <img src={lendsqrLogo} alt="lendsqr logo" />
        </div>
        <div className={classes.searchSection}>
          <input
            value={searchValue}
            type="text"
            placeholder="Search for anything"
            onChange={searchChangeHandler}
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
        <div className={classes.hamburgerMenu} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </section>
      <SideNav isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </>
  );
};

export default Header;
