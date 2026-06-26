import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cloud border-t border-iron">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Coin Credibility LLC"
              width={80}
              height={80}
              className="rounded-full"
            />
          </Link>
          <p className="mt-4 text-sm text-muted max-w-xs font-light">
            Practical cybersecurity and business consulting that helps you protect, strengthen, and grow.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-forest-lt mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-forest-lt mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="tel:18003572011" className="font-mono hover:text-gold transition-colors">
                1-800-357-2011
              </a>
            </li>
            <li>
              <a href="mailto:info@coincredibility.com" className="hover:text-gold transition-colors">
                info@coincredibility.com
              </a>
            </li>
            <li className="text-muted">Westland, MI</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-iron">
        <div className="max-w-content mx-auto px-6 lg:px-8 py-6 text-xs text-muted">
          © {year} Coin Credibility. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
