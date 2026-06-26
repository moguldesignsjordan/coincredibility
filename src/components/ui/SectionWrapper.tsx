type SectionWrapperProps = {
  children: React.ReactNode;
  bgClass?: string;
};

export default function SectionWrapper({ children, bgClass = '' }: SectionWrapperProps) {
  return (
    <section className={`py-20 md:py-28 ${bgClass}`}>
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
