import { useNavigate } from "react-router-dom"

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`)
  }

  return (
    <div className="relative bg-white rounded-lg overflow-hidden max-w-xs group hover:shadow-xl transition">
      {/* Image section */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Button slides up from bottom on hover */}
        <div className="absolute inset-0 flex items-end justify-center">
          <button 
            onClick={handleViewDetails}
            className="mb-4 bg-blue-700 hover:bg-blue-500 text-white font-semibold py-1.5 px-5 rounded-full opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-100 text-sm"
          >
            View Details
          </button> 
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
