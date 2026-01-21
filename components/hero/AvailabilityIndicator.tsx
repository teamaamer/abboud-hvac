export default function AvailabilityIndicator() {
  return (
    <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-300 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--orange-400)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--orange-400)]"></span>
        </span>
        <span className="font-medium">Available Now</span>
      </div>
      <span className="text-gray-400">•</span>
      <span>Response within 15 minutes</span>
    </div>
  );
}
