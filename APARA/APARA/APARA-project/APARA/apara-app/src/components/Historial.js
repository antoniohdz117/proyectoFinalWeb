// src/components/Historial.js
import React from 'react';

function Historial() {
    const pedidos = [
        { id: 1, fecha: '2024-05-01', estado: 'Entregado', total: '$1,200.00' },
        { id: 2, fecha: '2024-04-20', estado: 'En tránsito', total: '$800.00' },
        { id: 3, fecha: '2024-03-10', estado: 'Cancelado', total: '$450.00' },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Historial de Compras</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pedidos.map(pedido => (
                    <div key={pedido.id} className="bg-white p-4 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Pedido #{pedido.id}</h3>
                        <p className="text-gray-700">📅 Fecha: {pedido.fecha}</p>
                        <p className="text-gray-700">🚚 Estado: {pedido.estado}</p>
                        <p className="text-gray-700">💲 Total: {pedido.total}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Historial;
