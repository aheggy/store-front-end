import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CategoryTabs from './components/CategoryTabs';
import Home from './pages/Home';
import ShoppingPage from './pages/Shopingpage';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <CategoryTabs />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShoppingPage />} />
          <Route path="/products/:id" element={<ProductDetails />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;