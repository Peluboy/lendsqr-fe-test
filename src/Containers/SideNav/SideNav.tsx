import classes from "./SideNav.module.scss";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import switchOrganization from "../../Assets/Icons/switchOrganization.svg";
import home from "../../Assets/Icons/home.svg";
import {
  businessesNavItems,
  customerNavItems,
  settingsNavItems,
} from "../../Utilities/NavItems";
import SideNavListContainer from "../../Components/SideNavListContainer/SideNavListContainer";

const SideNav = () => {
  return (
    <section className={classes.container}>
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
