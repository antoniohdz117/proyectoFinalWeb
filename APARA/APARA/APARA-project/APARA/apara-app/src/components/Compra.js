import React, { useState } from 'react';

const Compra = () => {
    const selectedProducts = [
        {
            id: 1,
            name: 'Procesador AMD Ryzen 5 5600X',
            description: '6 núcleos, 12 hilos, excelente rendimiento para gaming.',
            image: 'https://via.placeholder.com/150',
            price: 180,
        },
        {
            id: 2,
            name: 'Tarjeta Gráfica NVIDIA RTX 3060',
            description: '8GB GDDR6, ideal para juegos en 1080p y 1440p.',
            image: 'https://via.placeholder.com/150',
            price: 350,
        },
        {
            id: 3,
            name: 'Memoria RAM Corsair Vengeance 16GB (2x8)',
            description: '3200MHz DDR4, diseño elegante y alto rendimiento.',
            image: 'https://via.placeholder.com/150',
            price: 70,
        },
    ];

    const total = selectedProducts.reduce((acc, prod) => acc + prod.price, 0);

    const [addresses, setAddresses] = useState([]);
    const [cards, setCards] = useState([]);

    const [showAddressForm, setShowAddressForm] = useState(false);
    const [newAddress, setNewAddress] = useState({ calle: "", ciudad: "", codigoPostal: "" });

    const [showCardForm, setShowCardForm] = useState(false);
    const [newCard, setNewCard] = useState({ numero: "", vencimiento: "", cvv: "" });

    const handleAddAddress = () => {
        const fullAddress = `${newAddress.calle}, ${newAddress.ciudad}, ${newAddress.codigoPostal}`;
        setAddresses([...addresses, fullAddress]);
        setNewAddress({ calle: "", ciudad: "", codigoPostal: "" });
        setShowAddressForm(false);
    };

    const handleAddCard = () => {
        const last4 = newCard.numero.slice(-4);
        setCards([...cards, `**** **** **** ${last4}`]);
        setNewCard({ numero: "", vencimiento: "", cvv: "" });
        setShowCardForm(false);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center py-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Resumen de compra</h2>

            <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-6 px-4">

                {/* Columna izquierda: productos */}
                <div className="bg-blue-100 rounded-xl p-6 flex-1">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Componentes de tu PC</h3>
                    <div className="space-y-4">
                        {selectedProducts.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex gap-4">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                                <div className="flex flex-col justify-between">
                                    <h4 className="text-lg font-bold text-blue-900">{item.name}</h4>
                                    <p className="text-sm text-gray-700">{item.description}</p>
                                    <span className="text-green-600 font-semibold mt-2">${item.price}</span>
                                </div>
                            </div>
                        ))}
                        <div className="text-right text-xl font-bold text-blue-900 pt-4 border-t border-blue-300 mt-6">
                            Total: ${total}
                        </div>
                    </div>
                </div>

                {/* Columna derecha: formulario */}
                <div className="flex-1 bg-blue-100 p-6 rounded-lg shadow space-y-6">
                    {/* Dirección */}
                    <div>
                        <h3 className="text-blue-900 font-semibold mb-2">Dirección de envío</h3>
                        <select className="w-full border border-blue-300 rounded px-3 py-2 mb-2">
                            {addresses.length === 0 ? (
                                <option disabled>No hay direcciones guardadas</option>
                            ) : (
                                addresses.map((addr, i) => <option key={i}>{addr}</option>)
                            )}
                        </select>
                        <button
                            className="text-blue-700 hover:underline text-sm mb-2"
                            onClick={() => setShowAddressForm(!showAddressForm)}
                        >
                            {showAddressForm ? "Cancelar" : "Agregar nueva dirección"}
                        </button>

                        {showAddressForm && (
                            <div className="space-y-2 mt-2">
                                <input
                                    type="text"
                                    placeholder="Calle"
                                    value={newAddress.calle}
                                    onChange={(e) => setNewAddress({ ...newAddress, calle: e.target.value })}
                                    className="w-full border border-blue-300 rounded px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Ciudad"
                                    value={newAddress.ciudad}
                                    onChange={(e) => setNewAddress({ ...newAddress, ciudad: e.target.value })}
                                    className="w-full border border-blue-300 rounded px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Código Postal"
                                    value={newAddress.codigoPostal}
                                    onChange={(e) => setNewAddress({ ...newAddress, codigoPostal: e.target.value })}
                                    className="w-full border border-blue-300 rounded px-3 py-2"
                                />
                                <button
                                    className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500"
                                    onClick={handleAddAddress}
                                >
                                    Guardar dirección
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Método de pago */}
                    <div>
                        <h3 className="text-blue-900 font-semibold mb-2">Método de pago</h3>
                        <select className="w-full border border-blue-300 rounded px-3 py-2 mb-2">
                            {cards.length === 0 ? (
                                <option disabled>No hay tarjetas guardadas</option>
                            ) : (
                                cards.map((card, i) => <option key={i}>{card}</option>)
                            )}
                        </select>
                        <button
                            className="text-blue-700 hover:underline text-sm mb-2"
                            onClick={() => setShowCardForm(!showCardForm)}
                        >
                            {showCardForm ? "Cancelar" : "Agregar nueva tarjeta"}
                        </button>

                        {showCardForm && (
                            <div className="space-y-2 mt-2">
                                <input
                                    type="text"
                                    placeholder="Número de tarjeta"
                                    value={newCard.numero}
                                    onChange={(e) => setNewCard({ ...newCard, numero: e.target.value })}
                                    className="w-full border border-blue-300 rounded px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Fecha de vencimiento (MM/AA)"
                                    value={newCard.vencimiento}
                                    onChange={(e) => setNewCard({ ...newCard, vencimiento: e.target.value })}
                                    className="w-full border border-blue-300 rounded px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    value={newCard.cvv}
                                    onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
                                    className="w-full border border-blue-300 rounded px-3 py-2"
                                />
                                <button
                                    className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500"
                                    onClick={handleAddCard}
                                >
                                    Guardar tarjeta
                                </button>
                            </div>
                        )}
                    </div>

                    <button className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">
                        Finalizar compra
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Compra;