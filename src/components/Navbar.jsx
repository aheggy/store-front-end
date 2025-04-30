import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products'; // Make sure this file exists and exports an array
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import {
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { cart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const results = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(value.length > 0 ? results.slice(0, 5) : []);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFiltered([]);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center px-4">
              <h1 className="text-2xl font-extrabold text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
                OudWind
              </h1>
            </div>
          </Link>

          {/* Search Input Desktop */}
          <div className="hidden sm:flex flex-1 justify-center px-4 relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full max-w-2xl rounded-full border border-gray-300 bg-white py-2 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            {filtered.length > 0 && (
              <div className="absolute top-full mt-1 w-full max-w-2xl bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <ul className="divide-y divide-gray-200">
                  {filtered.map((product) => (
                    <li key={product.id}>
                      <Link
                        to={`/products/${product.id}`}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                        onClick={clearSearch}
                      >
                        <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                        <span className="text-sm text-gray-800">{product.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 pr-2">
            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCartIcon className="h-8 w-auto text-gray-400 hover:text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Profile */}
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <UserIcon className="h-8 w-auto text-gray-400" />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="flex sm:hidden items-center justify-center py-2 relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full max-w-md rounded-full border border-gray-300 bg-white py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />
          {filtered.length > 0 && (
            <div className="absolute top-full mt-1 w-full max-w-md bg-white border border-gray-300 rounded-md shadow-lg z-50">
              <ul className="divide-y divide-gray-200">
                {filtered.map((product) => (
                  <li key={product.id}>
                    <Link
                      to={`/products/${product.id}`}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                      onClick={clearSearch}
                    >
                      <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                      <span className="text-sm text-gray-800">{product.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Disclosure>
  );
}
