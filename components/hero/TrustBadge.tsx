import { LucideIcon } from 'lucide-react';

interface TrustBadgeProps {
  icon: LucideIcon;
  text: string;
}

export default function TrustBadge({ icon: Icon, text }: TrustBadgeProps) {
  return (
    <div className="group flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-2.5 lg:p-3 border border-white/10 hover:bg-white/10 hover:border-[var(--cyan-500)]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--cyan-500)]/20">
      <div className="bg-[var(--cyan-500)]/20 p-1.5 lg:p-2 rounded-lg group-hover:bg-[var(--cyan-500)]/30 transition-colors">
        <Icon className="h-4 w-4 lg:h-5 lg:w-5 text-[var(--cyan-400)] flex-shrink-0" />
      </div>
      <span className="font-semibold text-sm lg:text-base">{text}</span>
    </div>
  );
}
