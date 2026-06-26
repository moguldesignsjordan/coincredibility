import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';

const services = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Consulting',
    tagline: 'Identify and eliminate vulnerabilities before they become crises.',
    description:
      "Most businesses don't know where their security gaps are until it's too late. We conduct structured assessments of your digital environment , systems, access controls, network posture, and practices , then deliver a clear, prioritized action plan to close exposures.",
    points: [
      'Security posture assessments & gap analysis',
      'Access control and credential reviews',
      'Network and endpoint security guidance',
      'Incident response planning & preparedness',
      'Third-party vendor risk evaluation',
    ],
  },
  {
    id: 'risk-management',
    title: 'Risk Management Consulting',
    tagline: 'Protect continuity by addressing operational risk before it disrupts you.',
    description:
      'Business interruptions are rarely random , they stem from unmanaged risk. We evaluate your existing processes, identify operational exposures, and help you implement controls that reduce the likelihood and impact of costly disruptions.',
    points: [
      'Operational risk identification and scoring',
      'Business continuity and disaster recovery planning',
      'Process documentation and controls mapping',
      'Regulatory and compliance risk review',
      'Risk reporting frameworks for leadership',
    ],
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    tagline: 'Streamline operations, plan smarter, and build for sustainable growth.',
    description:
      'Security and efficiency go hand in hand. We provide operational consulting that helps you remove friction, modernize workflows, and make better technology decisions , so your team can focus on the work that matters.',
    points: [
      'Operational workflow analysis and improvement',
      'Technology stack planning and guidance',
      'Vendor selection and evaluation support',
      'Strategic planning for growth-stage businesses',
      'Process automation opportunities',
    ],
  },
  {
    id: 'security-awareness',
    title: 'Security Awareness Training',
    tagline: "Your team is your first line of defense , make sure they're ready.",
    description:
      "The most sophisticated security tools are undermined by a single phishing click. We provide practical, role-appropriate security education that helps your people recognize threats, adopt safe habits, and respond with confidence.",
    points: [
      'Phishing awareness and social engineering education',
      'Password hygiene and credential management',
      'Safe email, web, and device practices',
      'Incident reporting and escalation procedures',
      'Custom training aligned to your industry',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-8 max-w-3xl">
          <Eyebrow>What We Offer</Eyebrow>
          <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight mb-6 text-white">
            Services Built for<br />Real Business Risk.
          </h1>
          <p className="text-lg text-cloud opacity-90 font-light max-w-2xl">
            Coin Credibility offers four focused service areas designed to address the cybersecurity and operational challenges businesses face every day. No bloated retainers , just practical, results-driven consulting.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-28 scroll-mt-20 ${i % 2 === 0 ? 'bg-cloud' : 'bg-white'}`}
        >
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              {/* Left column */}
              <div className="md:col-span-5">
                <Eyebrow>0{i + 1}</Eyebrow>
                <h2 className="text-4xl font-bold font-display mb-4">{service.title}</h2>
                <p className="text-gold font-semibold text-lg mb-6 font-display italic">
                  {service.tagline}
                </p>
                <Button href="/contact" variant="primary">Get Started →</Button>
              </div>
              {/* Right column */}
              <div className="md:col-span-7">
                <p className="text-ink font-light leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-[6px] w-[6px] rounded-full bg-gold shrink-0" />
                      <span className="text-ink font-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-content mx-auto px-6 lg:px-8 text-center">
          <Eyebrow>Ready to Start?</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Assess Your Risk.
          </h2>
          <p className="text-cloud opacity-90 font-light text-lg mb-10 max-w-2xl mx-auto">
            Schedule a no-pressure consultation and we'll help you identify where to start.
          </p>
          <Button href="/contact" variant="primary">Schedule a Consultation →</Button>
        </div>
      </section>
    </>
  );
}
