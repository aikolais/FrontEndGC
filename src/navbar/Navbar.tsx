import React, { useState } from "react";
import "./styles.css";
import { Icon } from "@fluentui/react/lib/Icon";
import Hamb from "./Hamb";


const Navbar = (props: any) => {
  const MyIcon = () => <Icon iconName="UserOptional" />;
  const MenuHamb = () => <Icon iconName="CollapseMenu" />;
  const [isActive, setActive] = useState(false);
  
  const toggleClass = () => {
    setActive(!isActive);
  };

  let button;
  if (isActive) {
    button = <div className="navbar__btn-active"><button className={'navbar__menu-btn'} onClick={toggleClass}><MenuHamb /></button>
        <Hamb /></div>;
  } else {
    button = <button className={'navbar__menu-btn'} onClick={toggleClass}><MenuHamb /></button>
    
  }

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <h1>GRC</h1>
       
        <ul className="navbar__links">
          <li>
            <a href="enterprise.html">
              <MyIcon />
            </a>
          </li>
        </ul>
        {button}
      </div>
    </nav>
  );
};

export default Navbar;
