import React from 'react'
import axios from 'axios';
import './login.css'

const Login = () => {
    const handleSubmit = (e, values) => {
        e.preventDefault();
        console.log(e);
        const params = new URLSearchParams()
        
        params.append('grant_type', 'password');
        params.append('client_id', 'resourceownerclient');
        params.append('client_secret', 'greendocs');
        params.append('scope', 'greendocs');
        params.append('username', 'cassio.vargas@w3k.com.br');
        params.append('password', '12345');

        axios.post('http://grcauth.greendocs.net/connect/token', params, {
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
            }})
            .then((response) => {
                var response = response.data;
                console.log(response);
            }, (error) => {
                var status = error.response.status
                console.log(error);
            });
        }



// let access_token = '1ED119A5B871107A6E9FF50EB48BD1103256ADC3455601F91EACCB0A005ABECA'; 

// const headers = { Authorization: `Bearer ${access_token}` };
// axios.get('http://grc.greendocs.net/api/User',     {headers: {
//     "Access-Control-Allow-Origin" : "*",
//     "Content-type": "Application/json",
//     "Authorization": `Bearer ${access_token}`
//     }   
// }
// )
// .then((response) => {
// var response = response.data;
// console.log(response)
// },
// (error) => {
// var status = error.response.status
// console.error(error)
// }
// );

    return (
        <form className="main" onSubmit={handleSubmit}><h1>Login</h1>

        <div className="login">
            <input 
                className="login__input--email"
                type="email"
                name="username"
                placeholder="Digite seu e-mail cadastrado"
                />
            <input
                className="login__input--password"
                type="password"
                name="password"
                placeholder="Digite sua senha cadastrada"
                />
        
        <button type="submit">
            Entrar
        </button>

        <h4>Esqueci a senha</h4>

        <button type="submit">
            Reset
        </button>
        </div></form>

    )
}
export default Login