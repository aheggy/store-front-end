import { useNavigate } from "react-router-dom"

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`)
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col group hover:shadow-lg transition">
      {/* Image section */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-[200px] object-contain p-4"
        />

        {/* Button slides up from bottom on hover */}
        <div className="absolute inset-0 flex items-end justify-center">
          <button 
            onClick={handleViewDetails}
            className="mb-0 bg-blue-700 hover:bg-blue-500 text-white font-semibold py-1.5 px-5 rounded-full opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-100 text-sm"
          >
            View Details
          </button> 
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h2 className="text-lg font-serif text-gray-800">{product.name}</h2>
        <p className="font-serif text-gray-600 mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
