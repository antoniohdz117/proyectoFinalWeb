import React from 'react';
import { useNavigate } from 'react-router-dom';

function UsuarioDashboard({ user }) {
    const navigate = useNavigate();

    const handleNavigatePerfil = () => {
        navigate('/perfil');
    };

    const handleNavigateHistorial = () => {
        navigate('/historial');
    };

    const handleNavigateGestion = () => {
        navigate('/gestion');
    };

    const handleCerrarSesion = () => {
        navigate('/');
    };

    const cardClass =
        'bg-white p-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition duration-300';
    const titleClass = 'text-xl font-semibold text-blue-800 hover:underline';

    return (
        <div className="flex flex-col justify-between min-h-screen p-6 bg-gray-100">
            {/* Contenido principal */}
            <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                    Bienvenido, {user}
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className={cardClass} onClick={handleNavigatePerfil}>
                        <h3 className={titleClass}>Perfil</h3>
                        <ul className="mt-2 space-y-1 text-gray-700">
                            <li>📝 Consultar información</li>
                            <li>🔧 Editar datos personales</li>
                            <li>🔒 Cambiar contraseña</li>
                        </ul>
                    </div>

                    <div className={cardClass} onClick={handleNavigateHistorial}>
                        <h3 className={titleClass}>Historial</h3>
                        <ul className="mt-2 space-y-1 text-gray-700">
                            <li>📦 Ver compras anteriores</li>
                            <li>📋 Seguimiento de pedidos</li>
                        </ul>
                    </div>

                    <div className={cardClass} onClick={handleNavigateGestion}>
                        <h3 className={titleClass}>Gestión</h3>
                        <ul className="mt-2 space-y-1 text-gray-700">
                            <li>⚙️ Actualizar preferencias</li>
                            <li>🗃️ Recuperar datos</li>
                            <li>📨 Contactar soporte</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ÚNICO botón de cerrar sesión */}
            <div className="mt-10 flex justify-center">
                <button
                    onClick={handleCerrarSesion}
                    className="bg-red-600 hover:bg-red-500 text-white py-2 px-6 rounded"
                >
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
}

export default UsuarioDashboard;
