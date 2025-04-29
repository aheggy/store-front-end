import { Link } from 'react-router-dom';
import products from '../data/products';
import HomeProductCard from '../components/HomeProductCard';

export default function Home() {
  const trending = products.filter(product => product.trending);
  const bestSellers = products.slice(0, 5); // Simulated for now
  const womenProducts = products.filter(p => p.gender === 'women');
  const menProducts = products.filter(p => p.gender === 'men');

  return (
    <div className="space-y-10">
        

      {/* Trending Section */}
      <section className="px-4">
        <h1 className="text-2xl text-center font-semibold mb-4">Trending</h1>
        <div className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible">
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

      <hr />

      {/* Best Seller Section */}
      <section className="px-4">
        <h1 className="text-2xl text-center font-semibold mb-4">Best Seller</h1>
        <div className="flex gap-4 overflow-x-auto px-4 pb-6">
            {bestSellers.map((product) => (
                <div
                key={product.id}
                    // className="flex-shrink-0 w-[350px] sm:w-[350px] md:w-[350px]"
                    className="flex-shrink-0 w-[250px] sm:w-[250px] md:w-[250px]"
                >
                <HomeProductCard product={product} />
                </div>
            ))}
        </div>

      </section>

      <hr />

      {/* Women's Products */}
      <section className="px-4">
        <h1 className="text-2xl text-center font-semibold mb-4">Women's Best Seller</h1>
        <div className="flex gap-4 overflow-x-auto px-4 pb-6">
            {womenProducts.map((product) => (
                <div
                key={product.id}
                className="flex-shrink-0 w-[250px] sm:w-[250px] md:w-[250px]"
                >
                <HomeProductCard product={product} />
                </div>
            ))}
        </div>
      </section>

      <hr />

      {/* Men's Products */}
      <section className="px-4">
        <h1 className="text-2xl text-center font-semibold mb-4">Men's Best Seller</h1>
        <div className="flex gap-4 overflow-x-auto px-4 pb-6">
            {menProducts.map((product) => (
                <div
                key={product.id}
                className="flex-shrink-0 w-[250px] sm:w-[250px] md:w-[250px]"
                >
                <HomeProductCard product={product} />
                </div>
            ))}
        </div>
      </section>

      <hr />

    </div>
  );
}
