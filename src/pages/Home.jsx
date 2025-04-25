import products from '../data/products';
import ProductCard from '../components/ProductCard';
import trending from '../data/trending'

export default function Home() {
  return (
    <div className="space-y-10">

      {/* Categories */}
      <div className="flex justify-center gap-14 text-gray-700 font-medium text-large mt-2">
        <button>All</button>
        <button>Best Seller</button>
        <button>Women</button>
        <button>Men</button>
      </div>

      {/* Trending Section */}
      <section className="px-4">
        <h2 className="text-xl font-semibold mb-4">Trending</h2>

        {/* Mobile scroll view / Desktop grid view */}
        <div className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible">
          {trending.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 sm:flex-shrink w-[300px] sm:w-auto"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 sm:h-[480px] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Best Seller Section */}
      <section className="px-4">
        <h2 className="text-xl font-semibold mb-4">Best Seller</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

        {/* Best Seller Section */}
        <section className="px-4">
        <h2 className="text-xl font-semibold mb-4">Women's Best Seller</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>


        {/* Best Seller Section */}
        <section className="px-4">
        <h2 className="text-xl font-semibold mb-4">Men's Best Seller</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}
