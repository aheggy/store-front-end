import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function ShoppingPage() {
  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Shop Our Oud Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
