import Link from 'next/link';
import Button from '../ui/Button';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-ink text-white border-b border-iron">
      <div className="max-w-content mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display font-bold text-2xl tracking-wide text-white">
            Coin<span className="text-gold">Credibility</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-gold transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium hover:text-gold transition-colors">About</Link>
          <Link href="/services" className="text-sm font-medium hover:text-gold transition-colors">Services</Link>
          <Link href="/faq" className="text-sm font-medium hover:text-gold transition-colors">FAQ</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-gold transition-colors">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:18003572011" className="font-mono text-sm text-cloud hover:text-gold transition-colors">
            1-800-357-2011
          </a>
          <Button href="/contact" variant="primary">Schedule Consultation</Button>
        </div>

        {/* Mobile Toggle Placeholder */}
        <button className="md:hidden text-white" aria-label="Open Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}