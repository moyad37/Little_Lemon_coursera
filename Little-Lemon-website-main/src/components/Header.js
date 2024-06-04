import React, { useState } from "react";
import logo from "../assets/Asset 16@4x.png";
import classes from "./Header.module.css";

export default function Header({ onOpenLayout }) {
  const [drawerOpen, setDawerOpen] = useState(false);

  function drawerToggleHandlerByShihFengHsu() {
    setDawerOpen(!drawerOpen);
  }

  return (
    <header className={classes.mainHeader}>
      <nav className={classes.nav}>
        <div className={classes.logoDrawerContainer}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div
            className={classes.drawerButton}
            onClick={drawerToggleHandlerByShihFengHsu}
          >

          </div>
        </div>
        <ul className={`${classes.navUl} ${drawerOpen && classes.drawerOpen}`}>
          <li>
            <a href="/">Home</a>
          </li>

          <li>About</li>


          <li>Menu</li>

          <li
            onClick={() => {
              onOpenLayout();
            }}
          >
            Reservation
          </li>

          <li>Order Online</li>

          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}
