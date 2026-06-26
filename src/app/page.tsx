import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';

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
              In today's digital economy, cybersecurity isn't a luxury — it's a business requirement. Coin Credibility provides practical cybersecurity consulting and risk management solutions that help your business operate securely, efficiently, and with confidence.
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
    </>
  );
}
