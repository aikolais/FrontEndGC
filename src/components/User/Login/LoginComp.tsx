import React, {useState} from "react";
import { initializeIcons } from "@fluentui/react";
import { useAuth } from "../../../context/AuthProvider/useAuth"
import {useNavigate } from 'react-router-dom';

import styles from './LoginComp.module.css';

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
        <div className={styles.userBody}>
        <div className={styles.userLogin}>
                <img src={require('../../../assets/images/Logo_Green.png')} alt="Logo GreenDocs" />
            <h1 className={styles.userLogin}>Use seus dados para acessar:</h1>
            <form className={styles.login} autoComplete="nope"  onSubmit={handleSubmit}>
                <div className={styles.loginForm__user}>
                    <label htmlFor="email" id={styles.email__label}>E-mail</label>
                    <input id={styles.email} type="email" name="email" value={email} placeholder="Insira seu e-mail cadastrado" onChange={e => setEmail(e.target.value)} autoComplete="off"/>
                    <label htmlFor="password" id={styles.password__label}>Senha</label>
                    <input id={styles.password} type="password" name="password" value={password} placeholder="Insira sua senha cadastrada" onChange={e => setPassword(e.target.value)} />
                <button className={styles.btnLogin__user} type="submit">Entrar</button>
                </div>
            </form>

            <div className={styles.remember}>
            <input id={styles.remember} type="checkbox" name="remember" value={email} placeholder="Insira seu e-mail cadastrado" onChange={e => setEmail(e.target.value)} autoComplete="off"/>
            <label htmlFor="remember" id={styles.remember}>Lembrar de mim</label>
            </div>

            <p className={styles.lost__password}>
                <a href="/">Esqueceu sua senha?</a>
            </p>

            
        </div>
        </div>
    );
}

export default LoginComp;