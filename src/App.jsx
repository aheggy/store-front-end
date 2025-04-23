import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;