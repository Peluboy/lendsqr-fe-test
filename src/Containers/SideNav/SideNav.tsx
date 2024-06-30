import React, { useEffect, useRef } from "react";
import classes from "./SideNav.module.scss";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import switchOrganization from "../../Assets/Icons/switchOrganization.svg";
import home from "../../Assets/Icons/home.svg";
import { businessesNavItems, customerNavItems, settingsNavItems } from "../../Utilities/NavItems";
import SideNavListContainer from "../../Components/SideNavListContainer/SideNavListContainer";

const SideNav = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <section ref={sidebarRef} className={`${classes.container} ${isOpen ? classes.open : ""}`}>
      <div className={classes.switchOrganisation}>
        <span>
          <img src={switchOrganization} alt="Switch Organization" />
        </span>
        <span>Switch Organization</span>
        <span>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>

      <div className={classes.dashboard}>
        <span>
          <img src={home} alt="Dashboard" />
        </span>
        <span>Dashboard</span>
      </div>

      <div className={classes.navListContainer}>
        <SideNavListContainer
          navListstArray={customerNavItems}
          header="CUSTOMERS"
        />
      </div>

      <div className={classes.navListContainer}>
        <SideNavListContainer
          navListstArray={businessesNavItems}
          header="BUSINESSES"
        />
      </div>

      <div className={classes.navListContainer}>
        <SideNavListContainer
          navListstArray={settingsNavItems}
          header="SETTINGS"
        />
      </div>
    </section>
  );
};

export default SideNav;
