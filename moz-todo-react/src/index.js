import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/Login/index';
import PagesFormModal from './pages/Form/Modal'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={{}} />
        <Route path="/home" element={<Login />} />
        <Route path="/api/User" element={<PagesFormModal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
