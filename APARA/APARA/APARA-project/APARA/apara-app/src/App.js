// App.js
import React from 'react';
import Login from './components/Login';
import Productos from './components/Productos';
import Perfil from './components/Perfil';
import Historial from './components/Historial';
import Gestion from './components/Gestion';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/historial" element={<Historial />} />
                <Route path="/gestion" element={<Gestion />} />
            </Routes>
        </Router>
    );
}

export default App;
