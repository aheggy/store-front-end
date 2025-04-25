export default function ProductCard({ product }) {
    console.log(product.image)
    return (
      <div className="bg-white shadow hover:shadow-lg transition overflow-hidden max-w-xs">
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <button className="mt-4 w-full bg-gray-800 text-white py-2 hover:bg-gray-700">
            view details
          </button>
        </div>
      </div>
    )
  }
  