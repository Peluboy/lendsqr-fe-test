import { useState } from "react";
import Header from "../../Containers/Header/Header";
import SideNav from "../../Containers/SideNav/SideNav";
import { LayoutProps } from "../../Utilities/types";
import classes from "./Layout.module.scss";

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.sideNav}>
        <SideNav isOpen={isSidebarOpen} onClose={handleSidebarClose} />
        </div>
        <div className={classes.body}>{children}</div>
      </div>
    </section>
  );
};

export default Layout;
