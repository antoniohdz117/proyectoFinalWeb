// src/components/Gestion.js
import React from 'react';

function Gestion() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Centro de Gestión</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition duration-300">
                    <h3 className="text-xl font-semibold text-blue-800 hover:underline">⚙️ Preferencias</h3>
                    <p className="text-gray-700 mt-2">Configura notificaciones y temas de visualización.</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition duration-300">
                    <h3 className="text-xl font-semibold text-blue-800 hover:underline">🗃️ Recuperar Datos</h3>
                    <p className="text-gray-700 mt-2">Solicita una copia de tus datos o historial de actividad.</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition duration-300">
                    <h3 className="text-xl font-semibold text-blue-800 hover:underline">📨 Soporte</h3>
                    <p className="text-gray-700 mt-2">Contacta con nuestro equipo de ayuda para resolver problemas.</p>
                </div>
            </div>
        </div>
    );
}

export default Gestion;
