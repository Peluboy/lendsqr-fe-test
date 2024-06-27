import { Link, useLocation } from "react-router-dom";
import classes from "./SideNavListContainer.module.scss";

type SideNavListContainerProps = {
  header: string;
  navListstArray: {
    title: string;
    route: string;
    icon: string;
  }[];
};

const SideNavListContainer = ({
  header,
  navListstArray,
}: SideNavListContainerProps) => {
  const location = useLocation();

  return (
    <div className={classes.container}>
      <div className={classes.navListHeader}>{header}</div>
      <div className={classes.navListItems}>
        {navListstArray.map((navItem, i) => {
          const isActive = location.pathname === navItem.route;
          return (
            <Link
              className={`${classes.navListItem} ${
                isActive ? classes.activeNav : ""
              }`}
              key={i}
              to={navItem.route}
            >
              {isActive && (
                <div className={classes.activenavIndicator}></div>
              )}
              <div>
                <img src={navItem.icon} alt={navItem.title} />
              </div>
              <div>{navItem.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavListContainer;
