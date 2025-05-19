import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Procesador AMD Ryzen 5 5600X',
    category: 'CPU',
    brand: 'AMD',
    description: '6 núcleos, 12 hilos, excelente rendimiento para gaming.',
    image: 'https://via.placeholder.com/150',
    price: '$180',
  },
  {
    id: 2,
    name: 'Tarjeta Gráfica NVIDIA RTX 3060',
    category: 'GPU',
    brand: 'NVIDIA',
    description: '8GB GDDR6, ideal para juegos en 1080p y 1440p.',
    image: 'https://via.placeholder.com/150',
    price: '$350',
  },
  {
    id: 3,
    name: 'Memoria RAM ASUS 16GB',
    category: 'RAM',
    brand: 'ASUS',
    description: '3200MHz DDR4 de alto rendimiento.',
    image: 'https://via.placeholder.com/150',
    price: '$70',
  },
  {
    id: 4,
    name: 'Placa Madre ASUS Prime B550M',
    category: 'Motherboards',
    brand: 'ASUS',
    description: 'Compatibilidad con Ryzen, diseño compacto.',
    image: 'https://via.placeholder.com/150',
    price: '$120',
  },
  {
    id: 5,
    name: 'Fuente de Poder Corsair 650W',
    category: 'Fuentes de poder',
    brand: 'INTEL',
    description: 'Fuente confiable con certificación 80 Plus Bronze.',
    image: 'https://via.placeholder.com/150',
    price: '$90',
  },
  {
    id: 6,
    name: 'Mouse Gamer RGB',
    category: 'Otros componentes',
    brand: 'ASUS',
    description: 'Sensor preciso, iluminación RGB personalizable.',
    image: 'https://via.placeholder.com/150',
    price: '$45',
  },
];

const categories = [
  'CPU',
  'GPU',
  'RAM',
  'Motherboards',
  'Fuentes de poder',
  'Otros componentes',
];

const brands = ['AMD', 'NVIDIA', 'ASUS', 'INTEL'];

function Productos() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchBrand = selectedBrand ? product.brand === selectedBrand : true;
    return matchCategory && matchBrand;
  });

  return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Componentes para Armar tu PC</h2>

        {/* Filtros */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 justify-center">
          <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border rounded-md"
          >
            <option value="">Todas las categorías</option>
            {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="p-2 border rounded-md"
          >
            <option value="">Todas las marcas</option>
            {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Productos filtrados */}
        {filteredProducts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-semibold text-blue-900">{item.name}</h3>
                    <p className="text-gray-700 mt-2">{item.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-lg font-bold text-green-600">{item.price}</span>
                      <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
                        Ver más
                      </button>
                    </div>
                  </div>
              ))}
            </div>
        ) : (
            <p className="text-center text-gray-600 mt-8">No hay productos que coincidan con los filtros seleccionados.</p>
        )}
      </div>
  );
}

export default Productos;
