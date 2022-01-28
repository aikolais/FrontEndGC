import React, {useState} from "react";
import UIButton from '../../Button/BtnOrganization';
import { initializeIcons } from "@fluentui/react";
import { useAuth } from "../../../context/AuthProvider/useAuth"
import {useNavigate } from 'react-router-dom';

initializeIcons();

const LoginComp = (props: any) => {
    
    const auth = useAuth();
    const navegate = useNavigate();

    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

    const handleSubmit =(event: any) =>{
        event.preventDefault();
        console.log('submit');

        try{
            auth.authenticate(email, password);

            navegate("/");
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return (
        <div className="user-login">
            <h1 className="user-login__title">Acessar o Sistema</h1>
            <form autoComplete="nope"  onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="off"/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default LoginComp;