import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const mockProductos = [
    {
        id: 1,
        nombre: 'AMD Ryzen 5 5600X',
        categoria: 'Procesadores',
        marca: 'AMD',
        precio: 180,
        descripcion: '6 núcleos, 12 hilos, excelente rendimiento para gaming',
        imagen: '/imagenes/procesador.jpg',
    },
    {
        id: 2,
        nombre: 'ASUS Prime B550M',
        categoria: 'Tarjetas Madre',
        marca: 'ASUS',
        precio: 120,
        descripcion: 'Compatibilidad con Ryzen, diseño compacto',
        imagen: '/imagenes/tarjeta-madre.jpg',
    },
    {
        id: 3,
        nombre: 'NVIDIA RTX 3060',
        categoria: 'Tarjetas Gráficas',
        marca: 'NVIDIA',
        precio: 350,
        descripcion: '8GB GDDR6, ideal para jugar en 1080p y 1440p',
        imagen: '/imagenes/tarjeta-grafica.jpg',
    },
    {
        id: 4,
        nombre: 'Corazel 650W',
        categoria: 'Fuentes de Poder',
        marca: 'Corazel',
        precio: 90,
        descripcion: 'Fuente confiable con certificación 80 Plus Bronze',
        imagen: '/imagenes/corazel.jpg',
    },
    {
        id: 5,
        nombre: 'ASUS 16GB',
        categoria: 'Memoria RAM',
        marca: 'ASUS',
        precio: 70,
        descripcion: '3200MHz DDR4 de alta rendimiento',
        imagen: '/imagenes/RAM.jpg',
    },
    {
        id: 6,
        nombre: 'Mouse Gamer RGB',
        categoria: 'Periféricos',
        marca: 'Genérico',
        precio: 45,
        descripcion: 'Sensor preciso, iluminación RGB personalizable',
        imagen: '/imagenes/mouse.jpg',
    },
];

function Productos() {
    const location = useLocation();
    const navigate = useNavigate();

    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [carrito, setCarrito] = useState(() => {
        const guardado = localStorage.getItem('carrito');
        return guardado ? JSON.parse(guardado) : [];
    });

    const query = new URLSearchParams(location.search);
    const filtroCategoria = query.get('categoria');
    const filtroMarca = query.get('marca');

    useEffect(() => {
        let productos = [...mockProductos];

        if (filtroCategoria) {
            productos = productos.filter(
                (p) => p.categoria.toLowerCase() === filtroCategoria.toLowerCase()
            );
        }

        if (filtroMarca) {
            productos = productos.filter(
                (p) => p.marca.toLowerCase() === filtroMarca.toLowerCase()
            );
        }

        setProductosFiltrados(productos);
    }, [filtroCategoria, filtroMarca]);

    const agregarAlCarrito = (producto) => {
        if (!carrito.find((p) => p.id === producto.id)) {
            const nuevoCarrito = [...carrito, producto];
            setCarrito(nuevoCarrito);
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
        }
    };

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter((p) => p.id !== id);
        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Productos Disponibles</h2>

            {productosFiltrados.length === 0 ? (
                <p className="text-gray-600">Selecciona una categoría o marca para ver productos.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productosFiltrados.map((producto) => (
                        <div
                            key={producto.id}
                            className="border p-4 rounded shadow hover:shadow-lg transition"
                        >
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                className="w-full h-40 object-cover mb-3 rounded"
                            />
                            <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
                            <p className="text-gray-700 capitalize">
                                Categoría: {producto.categoria} <br />
                                Marca: {producto.marca}
                            </p>
                            <p className="text-gray-700">{producto.descripcion}</p>
                            <p className="font-bold mt-2">${producto.precio}</p>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 disabled:opacity-50"
                                onClick={() => agregarAlCarrito(producto)}
                                disabled={carrito.some((p) => p.id === producto.id)}
                            >
                                {carrito.some((p) => p.id === producto.id) ? "Agregado" : "Agregar al carrito"}
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {carrito.length > 0 && (
                <div className="mt-10 border-t pt-6">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-900">Carrito de compra</h3>
                    <ul className="space-y-3">
                        {carrito.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between items-center border p-3 rounded shadow"
                            >
                                <div>
                                    <p className="font-semibold">{item.nombre}</p>
                                    <p>${item.precio}</p>
                                </div>
                                <button
                                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500"
                                    onClick={() => eliminarDelCarrito(item.id)}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="mt-6 w-full md:w-auto bg-green-600 text-white py-3 px-6 rounded hover:bg-green-500 transition"
                        onClick={() => navigate('/compra')}
                    >
                        Finalizar compra ({carrito.length} productos)
                    </button>
                </div>
            )}
        </div>
    );
}

export default Productos;
