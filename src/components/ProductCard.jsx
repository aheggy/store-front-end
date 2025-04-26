import { useNavigate } from "react-router-dom"

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`)
  }

  return (
    <div className="bg-white hover:shadow-lg transition overflow-hidden max-w-xs border">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button 
          onClick={handleViewDetails}
          className="mt-4 w-full bg-blue-800 text-white py-2 hover:bg-blue-500">
          View Details
        </button>
      </div>
    </div>
  )
}
