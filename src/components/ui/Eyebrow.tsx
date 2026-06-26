type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className = 'items-start' }: EyebrowProps) {
  return (
    <div className={`flex flex-col gap-2 mb-4 ${className}`}>
      <span className="text-[11px] font-semibold uppercase tracking-wider text-forest">
        {children}
      </span>
      <div className="h-[2px] w-12 bg-forest"></div>
    </div>
  );
}
