import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const trending = products.filter(product => product.trending);
  const bestSellers = products.slice(0, 5); // Simulated for now
  const womenProducts = products.filter(p => p.gender === 'women');
  const menProducts = products.filter(p => p.gender === 'men');

  return (
    <div className="space-y-10">

      {/* Categories (functionality can be added later) */}
      <div className="flex justify-center gap-14 text-gray-700 font-medium text-large mt-2">
        <button>All</button>
        <button>Best Seller</button>
        <button>Women</button>
        <button>Men</button>
      </div>

      {/* Trending Section */}
      <section className="px-4">
        <h1 className="text-xl text-center font-semibold mb-4">Trending</h1>
        <div className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible">
          {trending.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 sm:flex-shrink w-[300px] sm:w-auto border"
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

      <hr />

      {/* Best Seller Section */}
      <section className="px-4">
        <h1 className="text-xl text-center font-semibold mb-4">Best Seller</h1>
        <div className="flex gap-4 overflow-x-auto px-4">
            {bestSellers.map((product) => (
                <div
                key={product.id}
                className="flex-shrink-0 w-[350px] sm:w-[350px] md:w-[350px]"
                >
                <ProductCard product={product} />
                </div>
            ))}
        </div>

      </section>

      <hr />

      {/* Women's Products */}
      <section className="px-4">
        <h1 className="text-xl text-center font-semibold mb-4">Women's Perfume</h1>
        <div className="flex gap-4 overflow-x-auto px-4">
            {womenProducts.map((product) => (
                <div
                key={product.id}
                className="flex-shrink-0 w-[350px] sm:w-[350px] md:w-[350px]"
                >
                <ProductCard product={product} />
                </div>
            ))}
        </div>
      </section>

      <hr />

      {/* Men's Products */}
      <section className="px-4">
        <h1 className="text-xl text-center font-semibold mb-4">Men's Perfume</h1>
        <div className="flex gap-4 overflow-x-auto px-4">
            {menProducts.map((product) => (
                <div
                key={product.id}
                className="flex-shrink-0 w-[350px] sm:w-[350px] md:w-[350px]"
                >
                <ProductCard product={product} />
                </div>
            ))}
        </div>
      </section>

      <hr />

    </div>
  );
}
