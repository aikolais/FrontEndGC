import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import './Modal.css'
import axios from "axios";

const initialValues = {
    'name': '',
    'login': '',
    'organizations': '',
    'password': '',
}

const FormUserModal = () => {

    const [values, setValues] = useState(initialValues);

    //get /api/Organization
    //popular um select list com as 


    const handleSubmit = values => {

        let access_token = localStorage.getItem('access_token');

        let organizations = [];
        organizations.push({'idOrganization': values.organizations});
        values.organizations = organizations;
        values.groups = [];

        // axios.get('http://grc.greendocs.net/api/Organization').then((response) => {
        //     var response = response.data;
        //     console.log(response)
        // }),
        //     (error) => {
        //         var status = error.response.status
        //         console.error(error)
        //     }
        

        axios.post('http://grc.greendocs.net/api/User', values, {
        headers: {
                "Authorization": `Bearer ${access_token}`,
                "scope": "greendocs",
                //"Content-Type": "application/x-www-form-urlencoded"
        }, body: {
            "idOrganization": "",
        },    
        })
        .then((response) => {
                console.log(response)
        })
    }

return (
            <div className="Teste">
                <h1>Cadastro</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="form-user-modal__group">
                            <label htmlFor="login">Nome Completo</label>
                            <Field
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Digite o nome do usuário"
                            />
                        </div>
                        <div className="form-user-modal__group">
                            <label htmlFor="login">Login</label>
                            <Field
                                id="login"
                                name="login"
                                type="email"
                                placeholder="Digite o e-mail do usuário"
                            />
                        </div>
                        <div className="form-user-modal__group">
                            <label htmlFor="organizations">Organização</label>
                            <Field
                                id="organizations"
                                name="organizations"
                                type="textarea"
                                placeholder="Selecione as organizações do usuário"
                            />
                        </div>
                        <div className="form-user-modal__group">
                            <label htmlFor="password">Senha</label>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Digite a senha do usuário"
                            />
                        </div>
                        <div>
                            <button type="submit">Salvar</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        );
    }

    export default FormUserModal;