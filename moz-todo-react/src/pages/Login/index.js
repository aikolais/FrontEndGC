import React from 'react'
import axios from 'axios';
import { Formik, Form, Field } from 'formik'
import './login.css'

const Login = () => {
    const handleSubmit = values => {

        const params = new URLSearchParams()

        params.append('grant_type', 'password');
        params.append('client_id', 'resourceownerclient');
        params.append('client_secret', 'greendocs');
        params.append('scope', 'greendocs');
        params.append('username', values.email);
        params.append('password', values.password);

        axios.post('http://grcauth.greendocs.net/connect/token', params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then((response) => {
                if (response.status === 200 && response.data) {
                    localStorage.setItem("access_token", response.data.access_token);

                    axios.get('http://grc.greendocs.net/api/User', {
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Content-type": "Application/json",
                            "Authorization": `Bearer ${response.data.access_token}`
                        }
                    }
                    )
                        .then((response) => {
                            var response = response.data;
                            console.log(response)
                        },
                            (error) => {
                                var status = error.response.status
                                console.error(error)
                            }
                        );
                }
            })
            .catch((error) =>
                alert("Usuário e/ou senha inválidos, tente novamente")
            );
    }

    return (
        <div className="login">
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
            >
                <Form className="Login">
                    <label>Login</label>
                    <Field
                        name="email"
                        type="text"
                        placeholder="Digite seu e-mail cadastrado"
                    />
                    <Field
                        name="password"
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
                </Form>
            </Formik>
        </div>
    )
}

export default Login