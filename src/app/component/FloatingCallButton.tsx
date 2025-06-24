import React from 'react';

const PHONE_NUMBER = '01600018656';

const FloatingCallButton = () => (
  <a
    href={`tel:${PHONE_NUMBER}`}
    className="fixed z-50 bottom-2 right-6 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold w-16 h-16 py-3 px-5 rounded-full shadow-lg transition-all duration-300 group"
    style={{ boxShadow: '0 4px 24px rgba(34,197,94,0.2)' }}
    aria-label="Call Us"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
    <span className="hidden sm:inline">Call Us</span>
  </a>
);

export default FloatingCallButton; 