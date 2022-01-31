import React, { useState } from "react";

import { RiGroupLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdWorkspacesOutline } from "react-icons/md";

import { Icon } from "@fluentui/react/lib/Icon";


import "./Hamb.css";

const Hamb = (props: any) => {

  const MenuHamb = () => <Icon iconName="CollapseMenu" />;


  return (
    <div className="ContainerMobile">
      <div id="MyLinks">
        <a href="#workspace"><MdWorkspacesOutline /> Workspace</a>
        <a href="#users"><RiGroupLine /> Usuários</a>
        <a href="#config"><IoSettingsOutline /> Configurações</a>
      </div>
    </div>

  );
};

export default Hamb;
