export default function ProductImagePlaceholder() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="400" fill="#F3F4F6" />
      
      {/* HVAC Unit Icon */}
      <g transform="translate(100, 100)">
        {/* Main unit body */}
        <rect x="20" y="40" width="160" height="120" rx="8" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="3" />
        
        {/* Top vent lines */}
        <line x1="40" y1="60" x2="160" y2="60" stroke="#9CA3AF" strokeWidth="2" />
        <line x1="40" y1="70" x2="160" y2="70" stroke="#9CA3AF" strokeWidth="2" />
        <line x1="40" y1="80" x2="160" y2="80" stroke="#9CA3AF" strokeWidth="2" />
        <line x1="40" y1="90" x2="160" y2="90" stroke="#9CA3AF" strokeWidth="2" />
        
        {/* Fan circle */}
        <circle cx="100" cy="125" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
        <circle cx="100" cy="125" r="15" fill="none" stroke="#9CA3AF" strokeWidth="2" />
        
        {/* Fan blades */}
        <line x1="100" y1="110" x2="100" y2="140" stroke="#9CA3AF" strokeWidth="2" />
        <line x1="85" y1="125" x2="115" y2="125" stroke="#9CA3AF" strokeWidth="2" />
        
        {/* Control panel */}
        <rect x="140" y="130" width="30" height="20" rx="2" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
        <circle cx="148" cy="140" r="2" fill="#9CA3AF" />
        <circle cx="162" cy="140" r="2" fill="#9CA3AF" />
        
        {/* Pipes */}
        <rect x="10" y="100" width="8" height="40" rx="4" fill="#9CA3AF" />
        <rect x="182" y="100" width="8" height="40" rx="4" fill="#9CA3AF" />
      </g>
      
      {/* Text */}
      <text
        x="200"
        y="300"
        textAnchor="middle"
        fill="#9CA3AF"
        fontSize="12"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        No image available
      </text>
    </svg>
  );
}
