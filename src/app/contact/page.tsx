import Eyebrow from '@/components/ui/Eyebrow';

const services = [
  'Cybersecurity Consulting',
  'Risk Management Consulting',
  'Business Consulting',
  'Security Awareness Training',
  'Not Sure Yet',
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <Eyebrow variant="light">Contact</Eyebrow>
          <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight mb-6 text-white">
            Let's Talk.
          </h1>
          <p className="text-lg text-cloud opacity-90 font-light max-w-2xl">
            Schedule a complimentary consultation or ask a question. We'll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cloud py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-16 items-start">

          {/* Form */}
          <div className="md:col-span-7 bg-white border border-border rounded p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold font-display mb-2">Schedule a Consultation</h2>
            <p className="text-muted font-light text-sm mb-8">
              Fill out the form and a member of our team will reach out to confirm your appointment.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    name="first_name"
                    placeholder="Jordan"
                    className="w-full border border-border rounded px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold transition-colors bg-cloud"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    name="last_name"
                    placeholder="Smith"
                    className="w-full border border-border rounded px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold transition-colors bg-cloud"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2" htmlFor="company">
                  Company / Organization
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Acme Corp"
                  className="w-full border border-border rounded px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold transition-colors bg-cloud"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="w-full border border-border rounded px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold transition-colors bg-cloud"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="(555) 000-0000"
                  className="w-full border border-border rounded px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold transition-colors bg-cloud"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2" htmlFor="service">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full border border-border rounded px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors bg-cloud appearance-none"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2" htmlFor="message">
                  Tell Us About Your Situation
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Briefly describe your business, the challenge you're facing, or what you'd like help with..."
                  className="w-full border border-border rounded px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold transition-colors bg-cloud resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-white font-semibold text-sm py-4 rounded hover:bg-[#A87420] transition-colors"
              >
                Request Consultation →
              </button>

              <p className="text-muted text-xs text-center">
                By submitting this form you agree to be contacted by our team regarding your inquiry.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <Eyebrow>Direct Contact</Eyebrow>
              <h3 className="text-xl font-bold mb-4">Prefer to Call?</h3>
              <a
                href="tel:18003572011"
                className="font-mono text-2xl text-gold hover:text-ink transition-colors font-semibold"
              >
                1-800-357-2011
              </a>
              <p className="text-muted text-sm mt-2 font-light">Monday – Friday, 9am – 5pm ET</p>
            </div>

            <div className="h-px bg-border" />

            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-3">Location</h3>
              <p className="text-ink font-light">Westland, Michigan</p>
              <p className="text-muted text-sm font-light mt-1">Serving businesses nationwide.</p>
            </div>

            <div className="h-px bg-border" />

            <div className="bg-forest-bg border border-forest-border rounded p-6">
              <h3 className="font-bold mb-2">What to Expect</h3>
              <ul className="space-y-3 text-sm text-ink font-light">
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-0.5">01</span>
                  Submit the form or call us directly.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-0.5">02</span>
                  We'll respond within one business day to confirm timing.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-0.5">03</span>
                  A 30-minute discovery call at no charge.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-0.5">04</span>
                  We propose a clear scope of work with no surprises.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
