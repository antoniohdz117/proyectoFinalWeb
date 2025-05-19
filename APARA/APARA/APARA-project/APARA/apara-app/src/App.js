// App.js

import React from 'react';
import Login from './components/Login';
import Productos from './components/Productos';
import Perfil from './components/Perfil'; // Nueva importación

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Navegación entre páginas

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/perfil" element={<Perfil />} /> {/* Nueva ruta */}
            </Routes>
        </Router>
    );
}

export default App;
