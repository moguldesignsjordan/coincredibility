import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

/* ── inline SVG components ──────────────────────────────────────────────── */

function ShieldGraphic() {
  return (
    <div
      aria-hidden="true"
      className="hidden md:flex items-center justify-center"
      style={{ animation: 'float 5s ease-in-out infinite' }}
    >
      <svg viewBox="0 0 200 240" width="210" height="252">
        <defs>
          <clipPath id="shield-clip">
            <path d="M100 8 L184 37 L184 117 C184 169 142 208 100 228 C58 208 16 169 16 117 L16 37 Z" />
          </clipPath>
        </defs>

        {/* Shield body */}
        <path
          d="M100 8 L184 37 L184 117 C184 169 142 208 100 228 C58 208 16 169 16 117 L16 37 Z"
          fill="#0D1B2A"
          stroke="#1B5E38"
          strokeWidth="2.5"
        />

        {/* Grid lines (decorative) */}
        {[70, 110, 150, 190].map((y) => (
          <line key={y} x1="16" y1={y} x2="184" y2={y} stroke="#1B5E38" strokeWidth="0.5" opacity="0.25" clipPath="url(#shield-clip)" />
        ))}
        {[55, 100, 145].map((x) => (
          <line key={x} x1={x} y1="8" x2={x} y2="228" stroke="#1B5E38" strokeWidth="0.5" opacity="0.25" clipPath="url(#shield-clip)" />
        ))}

        {/* Scan line */}
        <rect
          x="16" y="0" width="168" height="3"
          fill="#2A7A4A" opacity="0.9"
          clipPath="url(#shield-clip)"
          style={{ animation: 'scanShield 2.8s linear infinite' }}
        />

        {/* Lock body */}
        <rect x="81" y="128" width="38" height="30" rx="5" fill="#1B5E38" />
        {/* Lock shackle */}
        <path
          d="M89 128 L89 119 C89 109 111 109 111 119 L111 128"
          fill="none" stroke="#1B5E38" strokeWidth="5.5" strokeLinecap="round"
        />
        {/* Lock keyhole */}
        <circle cx="100" cy="143" r="5" fill="#C9922A" />

        {/* Outer glow border */}
        <path
          d="M100 8 L184 37 L184 117 C184 169 142 208 100 228 C58 208 16 169 16 117 L16 37 Z"
          fill="none" stroke="#2A7A4A" strokeWidth="1" opacity="0.45"
        />
      </svg>
    </div>
  );
}

function RadarGraphic() {
  return (
    <div
      aria-hidden="true"
      className="flex justify-center mb-10"
      style={{ animation: 'float 4s ease-in-out infinite' }}
    >
      <svg viewBox="0 0 200 200" width="120" height="120">
        {/* Pulsing radar rings */}
        {[0, 1.1, 2.2].map((delay) => (
          <circle
            key={delay}
            cx="100" cy="100" r="30"
            fill="none" stroke="#1B5E38" strokeWidth="1.2"
            style={{
              animation: `radarRing 3.3s ease-out ${delay}s infinite`,
              transformOrigin: '100px 100px',
            }}
          />
        ))}

        {/* Connection nodes */}
        {[
          { cx: 100, cy: 48 },
          { cx: 148, cy: 128 },
          { cx: 52, cy: 128 },
        ].map(({ cx, cy }, i) => (
          <g key={i}>
            <line
              x1="100" y1="100" x2={cx} y2={cy}
              stroke="#1B5E38" strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.5"
              style={{ animation: 'dashFlow 1.5s linear infinite' }}
            />
            <circle
              cx={cx} cy={cy} r="5"
              fill="#1B5E38" opacity="0.8"
              style={{
                animation: `nodePulse 2s ease-in-out ${i * 0.65}s infinite`,
                transformOrigin: `${cx}px ${cy}px`,
              }}
            />
          </g>
        ))}

        {/* Shield at center */}
        <path
          d="M100 80 L115 86 L115 99 C115 111 107 119 100 123 C93 119 85 111 85 99 L85 86 Z"
          fill="#1B5E38"
        />
        <path
          d="M93 100 L98.5 106 L108 93"
          fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ── review data ──────────────────────────────────────────────────────────── */

const reviews = [
  {
    quote:
      "Coin Credibility came in, assessed our entire practice, and helped us achieve HIPAA compliance we had been struggling with for over a year. Their approach was practical, not overwhelming. We finally feel protected.",
    name: 'Marcus T.',
    role: 'IT Director',
    company: 'Lakeside Medical Partners',
    industry: 'Healthcare',
  },
  {
    quote:
      "After a security audit, they found three critical gaps we had no idea existed in our client data systems. The remediation plan was clear and affordable. It is a relief knowing our clients information is truly secure.",
    name: 'Sandra R.',
    role: 'Managing Partner',
    company: 'Hartwell Law Group',
    industry: 'Legal',
  },
  {
    quote:
      "The risk assessment process was thorough and the recommendations were practical without requiring a complete overhaul of our operations. We reduced our exposure significantly and our team now understands security at a new level.",
    name: 'Kevin L.',
    role: 'CFO',
    company: 'Apex Financial Services',
    industry: 'Finance',
  },
];

/* ── use case data ─────────────────────────────────────────────────────────── */

const useCases = [
  {
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
        <rect x="6" y="4" width="28" height="32" rx="3" fill="none" stroke="#1B5E38" strokeWidth="2" />
        <path d="M13 14 L27 14 M13 20 L27 20 M13 26 L21 26" stroke="#1B5E38" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="30" r="7" fill="#1B5E38" />
        <path d="M27 30 L29 32 L33 28" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: 'Healthcare',
    title: 'HIPAA Compliance for a Medical Practice',
    body:
      'A 12-physician group was facing a compliance deadline with no documented security policies. Coin Credibility conducted a full HIPAA risk analysis, developed tailored policies, and trained their staff. The practice passed their audit with zero findings.',
    outcome: 'Compliance achieved in 6 weeks',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
        <path d="M20 4 L34 10 L34 22 C34 30 27 36 20 38 C13 36 6 30 6 22 L6 10 Z" fill="none" stroke="#1B5E38" strokeWidth="2" />
        <path d="M14 20 L18 24 L26 16" stroke="#1B5E38" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: 'Legal',
    title: 'Preventing a Data Breach at a Law Firm',
    body:
      'A regional law firm suspected vulnerabilities after a phishing attempt targeted a partner account. Our security assessment revealed three exposed access points. We secured them, implemented multi-factor authentication, and trained the entire team on threat recognition.',
    outcome: 'Zero incidents since audit in 2023',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
        <rect x="4" y="24" width="6" height="12" rx="1" fill="#1B5E38" opacity="0.5" />
        <rect x="13" y="16" width="6" height="20" rx="1" fill="#1B5E38" opacity="0.7" />
        <rect x="22" y="10" width="6" height="26" rx="1" fill="#1B5E38" />
        <path d="M31 8 L31 14 M31 11 L36 11" stroke="#C9922A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    tag: 'Finance',
    title: 'Reducing Risk Exposure for a Financial Firm',
    body:
      'A wealth management firm needed to satisfy client-driven security requirements to retain a key institutional account. We conducted a thorough risk assessment, implemented controls, and produced the documentation they needed. They kept the account.',
    outcome: 'Risk score reduced by 60%',
  },
];

/* ── page ─────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* SECTION A: Hero */}
      <section className="bg-ink text-inverse py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-[60%]">
            <Eyebrow>Cybersecurity & Business Consulting</Eyebrow>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6 text-white">
              Protect.<br />Strengthen.<br />Grow.
            </h1>
            <p className="text-lg md:text-xl text-cloud opacity-90 mb-8 max-w-xl font-light">
              In today's digital economy, cybersecurity isn't a luxury; it's a business requirement. Coin Credibility provides practical cybersecurity consulting and risk management solutions that help your business operate securely, efficiently, and with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">Schedule a Consultation →</Button>
              <Button href="/services" variant="secondary">Learn About Our Services</Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block w-full md:w-[40%]">
            <div className="relative aspect-[3/4] rounded overflow-hidden shadow-2xl border border-iron">
              <Image
                src="/hero.png"
                alt="Cybersecurity professional at work"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: Trust Banner */}
      <div className="bg-forest py-6 border-y border-forest-lt">
        <div className="max-w-content mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm font-medium">Trusted by businesses across Michigan and nationwide</p>
          <div className="flex gap-6 text-white/70 text-sm uppercase tracking-wide font-mono">
            <span>Finance</span> | <span>Healthcare</span> | <span>Legal</span> | <span>Technology</span>
          </div>
        </div>
      </div>

      {/* SECTION C: Services Overview */}
      <SectionWrapper bgClass="bg-cloud">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-12">Four Ways We Help Your Business</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded border border-border shadow-sm">
            <h3 className="text-2xl font-semibold font-display mb-4">Cybersecurity Consulting</h3>
            <p className="text-muted mb-6 font-light">Identify vulnerabilities, improve security practices, and strengthen your overall security posture before a threat becomes a crisis.</p>
            <Button href="/services#cybersecurity" variant="ghost">View Service →</Button>
          </div>
          <div className="bg-white p-8 rounded border border-border shadow-sm">
            <h3 className="text-2xl font-semibold font-display mb-4">Risk Management Consulting</h3>
            <p className="text-muted mb-6 font-light">Evaluate existing processes, identify operational risks, and implement strategies that reduce business interruptions and protect continuity.</p>
            <Button href="/services#risk-management" variant="ghost">View Service →</Button>
          </div>
          <div className="bg-white p-8 rounded border border-border shadow-sm">
            <h3 className="text-2xl font-semibold font-display mb-4">Business Consulting</h3>
            <p className="text-muted mb-6 font-light">Operational consulting, workflow improvement, technology planning, and strategic guidance to support sustainable business growth.</p>
            <Button href="/services#business-consulting" variant="ghost">View Service →</Button>
          </div>
          <div className="bg-white p-8 rounded border border-border shadow-sm">
            <h3 className="text-2xl font-semibold font-display mb-4">Security Awareness</h3>
            <p className="text-muted mb-6 font-light">Education and recommendations that help your team recognize threats, adopt safe practices, and become your first line of defense.</p>
            <Button href="/services#security-awareness" variant="ghost">View Service →</Button>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION D: Animated Stats */}
      <section className="bg-ink py-16 border-y border-iron/30">
        <div className="max-w-content mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Stats grid */}
          <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-12">
            {[
              { target: 200, suffix: '+', label: 'Businesses Assessed' },
              { target: 10,  suffix: '+', label: 'Years of Experience' },
              { target: 98,  suffix: '%', label: 'Client Satisfaction' },
              { target: 0,   suffix: '',  label: 'Post-Audit Breaches' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold font-display text-gold mb-2">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-cloud/60 text-xs uppercase tracking-widest font-mono">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Animated shield */}
          <ShieldGraphic />
        </div>
      </section>

      {/* SECTION E: Use Cases */}
      <SectionWrapper bgClass="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow className="items-center">Real Results</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Security That Works in the Real World
          </h2>
          <p className="text-muted font-light mb-4">
            Every business is different. Here's how we've helped organizations like yours solve real security challenges.
          </p>
        </div>

        <RadarGraphic />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="border border-border rounded-lg p-8 flex flex-col gap-5 hover:shadow-md transition-shadow duration-200 bg-cloud"
              style={{ animation: `fadeUp 0.65s ease-out ${i * 130}ms both` }}
            >
              <div className="flex items-center gap-3">
                {uc.icon}
                <span className="text-[11px] font-semibold uppercase tracking-wider text-forest font-mono">
                  {uc.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold font-display leading-snug">{uc.title}</h3>
              <p className="text-muted font-light text-sm leading-relaxed flex-1">{uc.body}</p>
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <div className="w-2 h-2 rounded-full bg-forest" />
                <span className="text-forest text-sm font-medium">{uc.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* SECTION F: Reviews */}
      <SectionWrapper bgClass="bg-cloud">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow className="items-center">Client Reviews</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Hear From the Businesses We Protect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-lg p-8 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-200 shadow-sm"
              style={{ animation: `fadeUp 0.65s ease-out ${i * 130 + 80}ms both` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-gold text-lg" aria-label="5 stars">
                {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
              </div>

              {/* Quote mark */}
              <svg viewBox="0 0 32 24" width="32" height="24" aria-hidden="true" className="-mb-2">
                <path
                  d="M0 24 L0 12 C0 5.4 4.5 1.2 13.5 0 L14 3.6 C9.8 4.5 7.4 6.6 6.8 10 L12 10 L12 24 Z M18 24 L18 12 C18 5.4 22.5 1.2 31.5 0 L32 3.6 C27.8 4.5 25.4 6.6 24.8 10 L30 10 L30 24 Z"
                  fill="#E2E8F0"
                />
              </svg>

              <p className="text-ink font-light text-sm leading-relaxed flex-1 italic">
                &ldquo;{r.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-ink text-sm">{r.name}</div>
                <div className="text-muted text-xs mt-0.5">{r.role}, {r.company}</div>
                <div className="mt-2">
                  <span className="inline-block text-[10px] uppercase tracking-wider font-mono text-forest bg-forest-bg border border-forest-border px-2 py-0.5 rounded">
                    {r.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* SECTION G: CTA */}
      <section className="bg-forest relative overflow-hidden py-24 md:py-32">
        {/* Decorative dot grid */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>

        {/* Decorative shield watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none translate-x-16">
          <svg viewBox="0 0 200 240" width="400" height="480" aria-hidden="true">
            <path
              d="M100 8 L184 37 L184 117 C184 169 142 208 100 228 C58 208 16 169 16 117 L16 37 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10 text-center">
          <Eyebrow className="items-center" variant="light">Take the First Step</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
            Ready to Protect<br className="hidden md:block" /> Your Business?
          </h2>
          <p className="text-white/75 text-lg md:text-xl font-light max-w-xl mx-auto mb-10">
            Let's start with a conversation about your security needs. No pressure, no jargon, just straightforward guidance from people who understand your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">Schedule a Free Consultation →</Button>
            <Button
              href="/services"
              variant="secondary"
              className="border-white/50 text-white hover:bg-white/10 hover:border-white"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
