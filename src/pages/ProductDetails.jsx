import { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div className="text-center text-red-500 mt-10">Product not found</div>;
  }

  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-12">
      
      {/* LEFT - Product Image */}
      <div className="flex-1 flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w object-contain rounded-lg shadow-md"
        />
        {/* Small image thumbnails (optional) */}
        <div className="flex gap-2 mt-4">
          <img src={product.image} alt="" className="w-16 h-16 object-cover rounded" />
          <img src={product.image} alt="" className="w-16 h-16 object-cover rounded" />
        </div>
      </div>

      {/* RIGHT - Product Info */}
      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-2xl text-gray-800">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">BARCODE: {product.barcode || "N/A"}</p>
        </div>

        {/* Size */}
        <div>
          <label className="block mb-1 font-semibold">Size:</label>
          <select className="border rounded p-2 w-full max-w-sm">
            <option>3.4 oz / 100 ml Eau de Parfum Spray</option>
            {/* Add more options if needed */}
          </select>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded overflow-hidden">
            <button
              onClick={handleDecrease}
              className="px-3 py-2 text-lg font-bold bg-gray-100 hover:bg-gray-200"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="px-3 py-2 text-lg font-bold bg-gray-100 hover:bg-gray-200"
            >
              +
            </button>
          </div>

          <button className="bg-blue-800 w-md text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition">
            ADD TO CART
          </button>
        </div>

        {/* Short Description */}
        <p className="text-gray-700">{product.description}</p>

        {/* Collapsible Sections */}
        <div className="mt-8 space-y-4">
          <details className="border p-4 rounded cursor-pointer">
            <summary className="font-bold text-sm">PRODUCT DETAILS</summary>
            <p className="mt-2 text-gray-600">Details about the product...</p>
          </details>

          <details className="border p-4 rounded cursor-pointer">
            <summary className="font-bold text-sm">FRAGRANCE NOTES</summary>
            <p className="mt-2 text-gray-600">Fragrance notes description...</p>
          </details>

          <details className="border p-4 rounded cursor-pointer">
            <summary className="font-bold text-sm">INGREDIENTS</summary>
            <p className="mt-2 text-gray-600">Ingredients list...</p>
          </details>
        </div>
      </div>
    </div>
  );
}
