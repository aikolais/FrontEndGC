import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from "../../context/AuthProvider/useAuth"

export interface ILayoutComponentProps {}

const ILayoutProtected: React.FunctionComponent<ILayoutComponentProps> = (props) => {
    const auth = useAuth();
    // if(!auth.email)
    // {
    //     return (<h1>Sem acesso</h1>);
    // }

    return (
        <div>
            <h1>Bem vindo</h1>
            <Outlet />
        </div>
    );
};

export default ILayoutProtected;