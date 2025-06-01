import React from 'react';

function Carrito({ cartItems, removeFromCart }) {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="p-6 bg-white min-h-screen">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Tu carrito está vacío.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-b py-3"
                        >
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-600">
                                    {item.quantity} x ${item.price}
                                </p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-600 hover:underline"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <div className="mt-4 text-right font-bold text-xl">
                        Total: ${total.toFixed(2)}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carrito;
