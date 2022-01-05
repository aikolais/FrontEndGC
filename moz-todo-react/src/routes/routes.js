import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Routa = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" component={() => <h1>Login, teste</h1>} />
        </Routes>
    </BrowserRouter>

)

export default Routa;