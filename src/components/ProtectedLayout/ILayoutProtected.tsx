import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from "../../context/AuthProvider/useAuth"
import Navbar from '../../navbar/Navbar';
import SideBar from '../Sidebar/sidebar';

export interface ILayoutComponentProps {}

const ILayoutProtected: React.FunctionComponent<ILayoutComponentProps> = (props) => {
    const auth = useAuth();
    // if(!auth.email)
    // {
    //     return (<h1>Sem acesso</h1>);
    // }

    return (
        <div>
            <Navbar />
            <h1>Bem vindo</h1>
            <SideBar isCheckedInitial={false}/>
            <Outlet />
        </div>
    );
};

export default ILayoutProtected;