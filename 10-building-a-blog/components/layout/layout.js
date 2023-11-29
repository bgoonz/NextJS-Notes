import { Fragment } from "react";
import MainNavigation from "./main-navigation";

function Layout({ children }) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
