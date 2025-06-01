import React from 'react';
import Login from './components/Login';
import Productos from './components/Productos';
import Perfil from './components/Perfil';
import Compra from './components/Compra';  // Importa el nuevo componente

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/compra" element={<Compra />} />  {/* Ruta para compra */}
            </Routes>
        </Router>
    );
}

export default App;
