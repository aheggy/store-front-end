import { Link } from 'react-router-dom';

export default function HomeProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="block group w-50">
      <div className="overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition-all transform hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-50 object-cover"
        />
      </div>
      <h2 className="mt-2 text-center text-gray-800 text-sm font-semibold">{product.name}</h2>
    </Link>
  );
}
