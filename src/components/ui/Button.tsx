import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, href, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded text-[14px] font-semibold transition-colors duration-200";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-[#A87420]",
    secondary: "border-[1.5px] border-gold text-gold bg-transparent hover:bg-gold-bg",
    ghost: "text-gold hover:underline underline-offset-4 decoration-2"
  };

  const combinedStyles = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={combinedStyles}>{children}</Link>;
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}