import React, { useContext, useState } from "react";
import classes from "./Header.module.scss";
import lendsqrLogo from "../../Assets/Images/lendsqrLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../../Assets/Images/userProfileImage.svg";
import { AppContext } from "../../Context/AppContext";
import { AppContextValues } from "../../Utilities/types";
import SideNav from "../SideNav/SideNav";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { IoMdNotificationsOutline } from "react-icons/io";

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

  const menuProps = {
    items
  };

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
        <a href="https://github.com/Peluboy/lendsqr-fe-test" target="_blank">Docs</a>
          <IoMdNotificationsOutline fontSize={26} color="#213F7D" className={classes.notifiIcon}/>
          <div>
            <Avatar size={40} src={profileImage} />
            <Dropdown menu={menuProps}>
              <Space>
                <div className={classes.profileDropdown}>
                  <span className={classes.userName}>Adedeji</span>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </Space>
          </Dropdown>
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
