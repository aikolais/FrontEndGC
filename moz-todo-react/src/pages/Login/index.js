import React from 'react'
import './login.css'

function Login() {
    return (
        <div className="main"><h1>Login</h1>

        <div className="login">
            <input 
                className="login__input--email"
                type="email"
                placeholder="Digite seu e-mail cadastrado"
                />
            <input
                className="login__input--password"
                type="password"
                placeholder="Digite sua senha cadastrada"
                />
        
        <button type="submit">
            Entrar
        </button>

        <h4>Esqueci a senha</h4>

        <button type="submit">
            Reset
        </button>
        </div></div>

    )
}
export default Login