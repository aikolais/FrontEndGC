import React ,{ useState } from "react";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {AuthProvider} from '../context/AuthProvider';

import Home from "../components/User/Home/HomeComp";
import Teste from "../components/User/Home/TesteComp";
import Login from "../components/User/Login/LoginComp";
import ProtectedLayout from '../components/ProtectedLayout/ILayoutProtected';
import PublicLayout from '../components/PublicLayout/ILayoutPublic';
import ErrorPage from '../components/ErroPage/ErrorPage';

import {AuthContext}  from '../context/AuthProvider/index';
import { useAuth } from "../context/AuthProvider/useAuth";
import {  IUser } from '../context/AuthProvider/types';

const AppRoutes = () => {
    
    const auth = useAuth();

    return(
            <BrowserRouter>
                    <Routes>
                        <Route element = { <ProtectedLayout/> }>
                            <Route path="/" element = { <Home/>  } />
                            <Route path="/teste" element = { <Teste/>  } />
                        </Route> 
                        <Route element = { <PublicLayout/> }>
                            <Route path="/login" element = { <Login/> } />
                        </Route>
                        <Route path="*" element = { <ErrorPage/> } />
                    </Routes>
            </BrowserRouter>
    )
 };

 const PrivateRoute: React.SFC<{}> = props => {
    return (
        <AuthContext.Consumer>
            {({token}) => (
                <Route path="/" element={
                    token ? (
                        <Route element = { <ProtectedLayout/> }>
                            <Route path="/" element = { <Home/>  } />
                            <Route path="/teste" element = { <Teste/>  } />
                        </Route>
                    ) : (
                        <Route element = { <PublicLayout/> }>
                            <Route path="/login" element = { <Login/> } />
                        </Route>
                    )
                } />
            )}
        </AuthContext.Consumer>
    );
};
 
 export default AppRoutes;