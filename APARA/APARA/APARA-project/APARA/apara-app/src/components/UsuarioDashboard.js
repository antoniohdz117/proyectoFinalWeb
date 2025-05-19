import React from 'react';
import { useNavigate } from 'react-router-dom';

function UsuarioDashboard({ user }) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/perfil');
    };

    const cardClass = "bg-white p-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition duration-300";
    const titleClass = "text-xl font-semibold text-blue-800 hover:underline";

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Bienvenido, {user}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={cardClass} onClick={handleNavigate}>
                    <h3 className={titleClass}>Perfil</h3>
                    <ul className="mt-2 space-y-1 text-gray-700">
                        <li>📝 Consultar información</li>
                        <li>🔧 Editar datos personales</li>
                        <li>🔒 Cambiar contraseña</li>
                    </ul>
                </div>

                <div className={cardClass}>
                    <h3 className={titleClass}>Historial</h3>
                    <ul className="mt-2 space-y-1 text-gray-700">
                        <li>📦 Ver compras anteriores</li>
                        <li>📋 Seguimiento de pedidos</li>
                    </ul>
                </div>

                <div className={cardClass}>
                    <h3 className={titleClass}>Gestión</h3>
                    <ul className="mt-2 space-y-1 text-gray-700">
                        <li>⚙️ Actualizar preferencias</li>
                        <li>🗃️ Recuperar datos</li>
                        <li>📨 Contactar soporte</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UsuarioDashboard;
