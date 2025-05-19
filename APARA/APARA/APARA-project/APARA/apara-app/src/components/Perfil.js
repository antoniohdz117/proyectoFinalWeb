import React, { useState } from 'react';

export default function Perfil() {
    const [formData, setFormData] = useState({
        nombre: 'Juan',
        apellidoPaterno: 'Pérez',
        apellidoMaterno: 'García',
        username: 'juan.perez',
        email: 'usuario@ejemplo.com',
        nacimiento: '1990-01-01',
    });

    const [addresses, setAddresses] = useState([
        'Calle Falsa 123, Ciudad',
        'Avenida Siempre Viva 742, Ciudad',
    ]);
    const [cards, setCards] = useState([
        { type: 'Visa', last4: '1234' },
        { type: 'Mastercard', last4: '5678' },
    ]);

    const [ordersCount] = useState(5);

    const [newAddress, setNewAddress] = useState('');
    const [newCardType, setNewCardType] = useState('');
    const [newCardName, setNewCardName] = useState('');
    const [newCardNumber, setNewCardNumber] = useState('');
    const [newCardCVV, setNewCardCVV] = useState('');

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Datos personales actualizados:', formData);
        alert('Datos personales actualizados correctamente');
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        console.log('Contraseña actualizada:', passwordData);
        alert('Contraseña actualizada correctamente');
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    };

    const addAddress = () => {
        if (newAddress.trim()) {
            setAddresses((prev) => [...prev, newAddress.trim()]);
            setNewAddress('');
        }
    };

    const removeAddress = (idx) => {
        if (window.confirm('¿Eliminar esta dirección?')) {
            setAddresses((prev) => prev.filter((_, i) => i !== idx));
        }
    };

    const addCard = () => {
        if (
            newCardType.trim() &&
            newCardName.trim() &&
            newCardNumber.trim().length === 16 &&
            newCardCVV.trim().length === 3
        ) {
            const last4 = newCardNumber.slice(-4);
            setCards((prev) => [...prev, { type: newCardType, last4 }]);
            setNewCardType('');
            setNewCardName('');
            setNewCardNumber('');
            setNewCardCVV('');
        } else {
            alert('Por favor, llena correctamente todos los campos de la tarjeta.');
        }
    };

    const removeCard = (idx) => {
        if (window.confirm('¿Eliminar esta tarjeta?')) {
            setCards((prev) => prev.filter((_, i) => i !== idx));
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-900 text-white flex justify-between items-center px-6 py-4 w-full">
                <div className="text-xl font-bold">🅱️</div>
                <div className="flex items-center space-x-4">
                    <span className="text-lg font-medium">Mi Perfil</span>
                    <div className="text-white text-2xl">&#128113;</div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto p-6 space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Información General</h2>
                    <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
                        <div className="p-4 border rounded-lg bg-blue-50 text-blue-900 font-semibold text-lg">
                            Pedidos realizados: {ordersCount}
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">Direcciones de Entrega</h3>
                            <ul className="space-y-2">
                                {addresses.map((addr, idx) => (
                                    <li key={idx} className="flex justify-between items-center">
                                        <span>🏠 {addr}</span>
                                        <button
                                            onClick={() => removeAddress(idx)}
                                            className="px-2 py-1 text-sm text-red-600 hover:underline"
                                        >
                                            Eliminar
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 flex space-x-2">
                                <input
                                    type="text"
                                    placeholder="Nueva dirección"
                                    value={newAddress}
                                    onChange={(e) => setNewAddress(e.target.value)}
                                    className="flex-1 p-2 border rounded"
                                />
                                <button
                                    onClick={addAddress}
                                    className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
                                >
                                    Agregar
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">Tarjetas Registradas</h3>
                            <ul className="space-y-2">
                                {cards.map((card, idx) => (
                                    <li key={idx} className="flex justify-between items-center">
                                        <span>{card.type} **** {card.last4}</span>
                                        <button
                                            onClick={() => removeCard(idx)}
                                            className="px-2 py-1 text-sm text-red-600 hover:underline"
                                        >
                                            Eliminar
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 space-y-2">
                                <select
                                    value={newCardType}
                                    onChange={(e) => setNewCardType(e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Selecciona tipo de tarjeta</option>
                                    <option value="Visa">Visa</option>
                                    <option value="Mastercard">Mastercard</option>
                                    <option value="American Express">American Express</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Nombre del titular"
                                    value={newCardName}
                                    onChange={(e) => setNewCardName(e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Número de tarjeta (16 dígitos)"
                                    maxLength={16}
                                    value={newCardNumber}
                                    onChange={(e) => setNewCardNumber(e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="CVV (3 dígitos)"
                                    maxLength={3}
                                    value={newCardCVV}
                                    onChange={(e) => setNewCardCVV(e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                                <button
                                    onClick={addCard}
                                    className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
                                >
                                    Agregar Tarjeta
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Editar Datos Personales</h2>
                    <form onSubmit={handleFormSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
                        {['nombre', 'apellidoPaterno', 'apellidoMaterno', 'username', 'email', 'nacimiento'].map((field) => {
                            const labelMap = {
                                nombre: 'Nombre(s)',
                                apellidoPaterno: 'Apellido Paterno',
                                apellidoMaterno: 'Apellido Materno',
                                username: 'Usuario',
                                email: 'Correo Electrónico',
                                nacimiento: 'Fecha de Nacimiento',
                            };
                            return (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-700">{labelMap[field]}</label>
                                    <input
                                        type={field === 'nacimiento' ? 'date' : field === 'email' ? 'email' : 'text'}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleFormChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                            );
                        })}
                        <div className="flex justify-end">
                            <button type="submit" className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
                                Guardar Cambios
                            </button>
                        </div>
                    </form>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Cambiar Contraseña</h2>
                    <form onSubmit={handlePasswordSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contraseña Actual</label>
                            <input
                                type="password"
                                name="currentPassword"
                                value={passwordData.currentPassword}
                                onChange={handlePasswordChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nueva Contraseña</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={passwordData.newPassword}
                                onChange={handlePasswordChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirmar Nueva Contraseña</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={passwordData.confirmPassword}
                                onChange={handlePasswordChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
                                Actualizar Contraseña
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}
