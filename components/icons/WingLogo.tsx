
import React from 'react';

const WingLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 150"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M85 30 C 70 10, 40 10, 20 30 C 0 50, 0 80, 20 100 L 85 30 Z" />
    <path d="M115 30 C 130 10, 160 10, 180 30 C 200 50, 200 80, 180 100 L 115 30 Z" />
    <path d="M90 80 C 80 70, 80 60, 90 50 L 110 50 C 120 60, 120 70, 110 80 C 115 95, 100 110, 100 110 C 100 110, 85 95, 90 80 Z" fill="#FFD700" />
    <circle cx="100" cy="45" r="5" fill="#FFD700" />
    <circle cx="85" cy="65" r="5" fill="#FFD700" />
    <circle cx="115" cy="65" r="5" fill="#FFD700" />
  </svg>
);

export default WingLogo;
