export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-2 mb-4">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
        {children}
      </span>
      <div className="h-[2px] w-12 bg-gold"></div>
    </div>
  );
}