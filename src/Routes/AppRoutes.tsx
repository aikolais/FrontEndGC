import React ,{ useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from '../context/AuthProvider';

import Home from "../components/User/Home/HomeComp";
import Teste from "../components/User/Home/TesteComp";
import Login from "../components/User/Login/LoginComp";
import ProtectedLayout from '../components/ProtectedLayout/ILayoutProtected';
import PublicLayout from '../components/PublicLayout/ILayoutPublic';

import {AuthContext}  from '../context/AuthProvider/index'

const AppRoutes = () => {


    return(
        <AuthProvider>
            <BrowserRouter>
                    <Routes>
                        <Route element = { <ProtectedLayout/> }>
                            <Route path="/" element = { <Home/>  } />
                            <Route path="/teste" element = { <Teste/>  } />
                        </Route>
                        <Route element = { <PublicLayout/> }>
                            <Route path="/login" element = { <Login/> } />
                        </Route>
                    </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
 };
 
 export default AppRoutes;