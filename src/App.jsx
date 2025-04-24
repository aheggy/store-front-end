import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ShoppingPage from './pages/Shopingpage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShoppingPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;