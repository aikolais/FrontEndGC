import React, { useEffect, useState } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import { RiGroupLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdWorkspacesOutline } from "react-icons/md";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";


import './Sidebar.css';

interface SidebarProps {
  onChange?: (event: React.MouseEvent, isChecked?: boolean) => void;
  isCheckedInitial: boolean;
}

 
export function Sidebar({ onChange, isCheckedInitial, ...rest }: SidebarProps) {
  const [isChecked, setCheckedState] = useState(isCheckedInitial);

  useEffect(() => {
    setCheckedState(isCheckedInitial);
  }, [isCheckedInitial]);

  const handleChange = (event: React.MouseEvent) => {
    setCheckedState(!isChecked);
    onChange && onChange(event, isChecked);    
  };

  return (
    <div id="header">
    <ProSidebar collapsed={isChecked}>
          <SidebarContent>
              <Menu>
              <MenuItem icon={<MdWorkspacesOutline />}>Workspace</MenuItem>
            <MenuItem icon={<RiGroupLine />}>Usuários</MenuItem>
          </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu>
            <MenuItem icon={<IoSettingsOutline />}>Configurações</MenuItem>
            <MenuItem icon=
              {isChecked ? (        
                  <BsChevronDoubleRight /> 
                ) : (
                <BsChevronDoubleLeft />
                )
            } onClick={handleChange}>
              Diminiuir
            </MenuItem>
          </Menu>
          </SidebarFooter>
    </ProSidebar>
    </div>
  );
}

export default Sidebar;