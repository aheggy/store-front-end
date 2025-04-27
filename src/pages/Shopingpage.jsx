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
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-9">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
