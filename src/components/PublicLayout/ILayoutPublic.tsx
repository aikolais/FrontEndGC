import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from "../../context/AuthProvider/useAuth"
import {IUser} from '../../context/AuthProvider/types'

const ILayoutPublic: React.FunctionComponent<IUser> = (props) => {
    return (
        <div>
            <h1>Bem vindo publico</h1>
            <Outlet />
        </div>
    );
};

export default ILayoutPublic;