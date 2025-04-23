import homeBg from '../assets/images/0002home.jpg';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="relative w-full max-w-md">
        {/* Icon on the left */}
        <MagnifyingGlassIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />

        {/* Input with padding to the left to fit the icon */}
        <input
          type="text"
          placeholder="Search Perfumes..."
          className="w-full rounded-md bg-gray-700/60 text-white pl-12 pr-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
    </div>
  );
}
