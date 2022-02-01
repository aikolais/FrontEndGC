import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from "../../context/AuthProvider/useAuth"
import {IUser} from '../../context/AuthProvider/types'

import './ILayoutPublic.css';

const ILayoutPublic: React.FunctionComponent<IUser> = (props) => {
    return (
            <Outlet />
    );
};

export default ILayoutPublic;