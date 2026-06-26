import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cloud border-t border-iron">

      {/* Google Maps */}
      <div className="w-full h-56 md:h-72 border-b border-iron overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=958+N+Newburgh+Rd,+Westland,+MI+48185&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) invert(0.85) contrast(0.9)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Coin Credibility office location"
        />
      </div>

      {/* Main grid */}
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Coin Credibility LLC"
              width={80}
              height={80}
              className="rounded-full"
            />
          </Link>
          <p className="mt-4 text-sm text-cloud/60 max-w-xs font-light leading-relaxed">
            Practical cybersecurity and business consulting that helps you protect, strengthen, and grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded hover:bg-gold-dk transition-colors"
          >
            Contact Us →
          </Link>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-forest-lt mb-5">Explore</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="text-cloud/80 hover:text-gold transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-cloud/80 hover:text-gold transition-colors">About</Link></li>
            <li><Link href="/services" className="text-cloud/80 hover:text-gold transition-colors">Services</Link></li>
            <li><Link href="/faq" className="text-cloud/80 hover:text-gold transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="text-cloud/80 hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Addresses & Contact */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-forest-lt mb-5">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="tel:18003572011" className="font-mono text-cloud/80 hover:text-gold transition-colors">
                1-800-357-2011
              </a>
            </li>
            <li>
              <a href="mailto:info@coincredibility.com" className="text-cloud/80 hover:text-gold transition-colors">
                info@coincredibility.com
              </a>
            </li>
            <li className="pt-1">
              <p className="text-forest-lt text-xs uppercase tracking-wider font-mono mb-1">Business Address</p>
              <address className="not-italic text-cloud/70 font-light leading-relaxed">
                958 N. Newburgh Rd.<br />
                Westland, MI 48185
              </address>
            </li>
            <li>
              <p className="text-forest-lt text-xs uppercase tracking-wider font-mono mb-1">Mailing Address</p>
              <address className="not-italic text-cloud/70 font-light leading-relaxed">
                P.O. Box 74792<br />
                Romulus, MI 48174
              </address>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-forest-lt mb-5">Business Hours</h3>
          <ul className="space-y-2 text-sm text-cloud/70 font-light">
            <li className="flex justify-between gap-4">
              <span>Monday</span><span className="text-cloud/50">9am – 5pm ET</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Tuesday</span><span className="text-cloud/50">9am – 5pm ET</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Wednesday</span><span className="text-cloud/50">9am – 5pm ET</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Thursday</span><span className="text-cloud/50">9am – 5pm ET</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Friday</span><span className="text-cloud/50">9am – 5pm ET</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Saturday</span><span className="text-cloud/50">Closed</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span><span className="text-cloud/50">Closed</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-iron">
        <div className="max-w-content mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cloud/40">
          <span>© {year} Coin Credibility LLC. All rights reserved.</span>
          <span>Westland, MI · Serving businesses nationwide</span>
        </div>
      </div>

    </footer>
  );
}
