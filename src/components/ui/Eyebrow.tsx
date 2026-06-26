type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'light';
};

export default function Eyebrow({ children, className = 'items-start', variant = 'default' }: EyebrowProps) {
  const textColor = variant === 'light' ? 'text-forest-lt' : 'text-forest';
  const barColor  = variant === 'light' ? 'bg-forest-lt'  : 'bg-forest';

  return (
    <div className={`flex flex-col gap-2 mb-4 ${className}`}>
      <span className={`text-[11px] font-semibold uppercase tracking-wider ${textColor}`}>
        {children}
      </span>
      <div className={`h-[2px] w-12 ${barColor}`}></div>
    </div>
  );
}
