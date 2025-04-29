import { useState } from 'react';

export default function SiteBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 relative z-50" role="alert">
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-4 text-lg font-bold text-yellow-700"
        aria-label="Close"
      >
        ×
      </button>
      <p className="font-bold text-center">🚧 Site Under Construction</p>
      <p className="text-center">Some features may be incomplete or in progress. Thanks for your patience!</p>
    </div>
  );
}
