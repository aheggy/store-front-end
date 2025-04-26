import { Link } from 'react-router-dom';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import {
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
        {/* Top Row — Logo, Search (on sm+), Cart, Profile */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/">
          <div className="flex items-center px-4">
            <h1 className="text-2xl font-extrabold text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
              OudWind
            </h1>
          </div>
          </Link>

          {/* Search Input (centered on sm+) */}
          <div className="hidden sm:flex flex-1 justify-center px-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full max-w-2xl rounded-full border border-gray-300 bg-white py-2 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 pr-2">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <ShoppingCartIcon className="h-8 w-auto text-gray-400 hover:text-white" />
            </button>

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

        {/* Second Row: Search bar on mobile (shown only on small screens) */}
        <div className="flex sm:hidden items-center justify-center py-2">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md rounded-full border border-gray-300 bg-white py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
    </Disclosure>
  );
}
