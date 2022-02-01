import React, {useState} from "react";
import { initializeIcons } from "@fluentui/react";
import { useAuth } from "../../../context/AuthProvider/useAuth"
import {useNavigate } from 'react-router-dom';

import './LoginComp.css';

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

            <h1 className="user-login__title">Use seus dados para acessar:</h1>
            <form className="login" autoComplete="nope"  onSubmit={handleSubmit}>
                <div className="login--form__user">
                    <label htmlFor="email" id="email-label">E-mail</label>
                    <input id="email" type="email" name="email" value={email} placeholder="Insira seu e-mail cadastrado" onChange={e => setEmail(e.target.value)} autoComplete="off"/>
                    <label htmlFor="password" id="password-label">Senha</label>
                    <input id="password" type="password" name="password" value={password} placeholder="Insira sua senha cadastrada" onChange={e => setPassword(e.target.value)} />
                <button className="btn-login__user" type="submit">Entrar</button>
                </div>
            </form>

            <div className="remember">
            <input id="remember" type="checkbox" name="remember" value={email} placeholder="Insira seu e-mail cadastrado" onChange={e => setEmail(e.target.value)} autoComplete="off"/>
            <label htmlFor="remember" id="remember">Lembrar de mim</label>
            </div>

            <p className="lost__password">
                <a href="/">Esqueceu sua senha?</a>
            </p>

            
        </div>
    );
}

export default LoginComp;