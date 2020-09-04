import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import layoutStyles from "./layout.module.scss";

import "../../styles/index.scss";

function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
        <Footer />
    </div>
  );
}

export default Layout;
