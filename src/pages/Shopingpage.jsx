import { useQuery } from '../hooks/useQuery';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const query = useQuery();
  const filter = query.get('filter');

  let filteredProducts = products;
  console.log({filter})
  if (filter === 'bestSeller') {
    filteredProducts = products.filter(p => p.bestSellar === true);
  } else if (filter === 'women') {
    filteredProducts = products.filter(p => p.gender === 'women');
  } else if (filter === 'men') {
    filteredProducts = products.filter(p => p.gender === 'men');
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-2">
      {filteredProducts.map(product => (
        <ProductCard 
        // className="h-full"
        key={product.id} 
        product={product} 
        />
      ))}
    </div>
  );
}
