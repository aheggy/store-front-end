// import { FacebookIcon, TwitterIcon, InstagramIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          {/* Logo Section */}
          <div className="flex items-center justify-center sm:justify-start">
            <h1 className="text-2xl font-extrabold text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
              OudWind
            </h1>
          </div>
          
            <div className="mt-8 text-center text-sm text-gray-400">
            <p>© 2025 OudWind. All rights reserved.</p>
            </div>

          {/* Navigation Links */}
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              About Us
            </a>
          </div>
        </div>

        {/* <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex justify-center space-x-6">
            Social Media Icons
            <a href="#" className="text-gray-300 hover:text-white">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div> */}

      </div>
    </footer>
  );
}
