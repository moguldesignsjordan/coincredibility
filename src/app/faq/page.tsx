import SectionWrapper from '@/components/ui/SectionWrapper';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "What types of businesses does Coin Credibility work with?",
        a: "We work with businesses of all sizes across a range of industries including finance, healthcare, legal, technology, and professional services. Our clients are typically small-to-midsize businesses that want practical, business-focused security guidance without the overhead of an enterprise consulting firm.",
      },
      {
        q: "Do I need to be experiencing a security issue to work with you?",
        a: "Not at all. Most of our clients engage us proactively , to understand their current risk posture, improve their security practices, or prepare for growth. Acting before a problem occurs is always more effective and less costly.",
      },
      {
        q: "How does an engagement typically begin?",
        a: "We start with a consultation to understand your business, your current environment, and your concerns. From there we scope a focused engagement , whether that's an assessment, a specific project, or ongoing advisory support.",
      },
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      {
        q: "What is a cybersecurity assessment and what does it include?",
        a: "A cybersecurity assessment is a structured review of your organization's digital environment. We examine your systems, network configuration, access controls, user practices, and security policies to identify vulnerabilities and gaps. You receive a prioritized report with clear recommendations.",
      },
      {
        q: "My business is small , do I really need cybersecurity consulting?",
        a: "Yes. Small businesses are frequently targeted precisely because attackers expect weaker defenses. A breach can result in financial loss, reputational damage, regulatory penalties, and operational disruption. A modest investment in security now costs a fraction of what remediation costs later.",
      },
      {
        q: "Do you handle incident response if we're breached?",
        a: "We help clients build incident response plans so they know exactly what to do if a breach occurs. We also provide guidance and advisory support during and after an incident. For active forensic investigation we can coordinate with specialist partners.",
      },
    ],
  },
  {
    category: "Risk & Operations",
    items: [
      {
        q: "What's the difference between cybersecurity consulting and risk management consulting?",
        a: "Cybersecurity consulting focuses on your digital systems and threats , vulnerabilities, breaches, access controls, and protective tools. Risk management consulting takes a broader operational view , identifying process gaps, continuity risks, compliance exposures, and business disruptions that may not be purely technical in nature. The two disciplines are complementary and we often address both together.",
      },
      {
        q: "Can you help us prepare for an audit or compliance review?",
        a: "Yes. We help businesses understand the requirements they're subject to, identify where they fall short, and implement the controls and documentation needed to demonstrate compliance. Common frameworks we work with include SOC 2, HIPAA, and NIST.",
      },
      {
        q: "How do you approach business continuity planning?",
        a: "We work with you to identify critical business functions, single points of failure, and recovery time objectives. From there we develop documented plans so your team knows exactly how to respond, communicate, and restore operations if a disruption occurs.",
      },
    ],
  },
  {
    category: "Working Together",
    items: [
      {
        q: "Are your services offered remotely or in person?",
        a: "Both. We serve businesses nationwide and the majority of our work is conducted remotely. For clients in the Michigan area we're also available for on-site engagements when appropriate.",
      },
      {
        q: "How long does a typical engagement take?",
        a: "It depends on the scope of work. A focused assessment might be completed in two to four weeks. Larger projects or ongoing advisory relationships run three to six months or longer. We'll be clear about timelines before any work begins.",
      },
      {
        q: "How do I get started?",
        a: "Schedule a consultation using the form on our contact page or call us directly at 1-800-357-2011. The initial conversation is complimentary and we'll give you an honest assessment of where we can help.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-8 max-w-3xl">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight mb-6 text-white">
            Common Questions,<br />Straight Answers.
          </h1>
          <p className="text-lg text-cloud opacity-90 font-light max-w-2xl">
            If you don't see what you're looking for, reach out , we're happy to talk through your specific situation.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <SectionWrapper bgClass="bg-cloud">
        <div className="max-w-3xl">
          {faqs.map((group) => (
            <div key={group.category} className="mb-16 last:mb-0">
              <h2 className="text-xs font-mono uppercase tracking-widest text-forest mb-6 pb-3 border-b border-forest-border">
                {group.category}
              </h2>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-white border border-border rounded overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-6 px-6 py-5 cursor-pointer list-none text-ink font-semibold select-none hover:bg-cloud transition-colors">
                      <span>{item.q}</span>
                      <span className="shrink-0 text-gold text-xl font-light transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-ink font-light leading-relaxed border-t border-border">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-content mx-auto px-6 lg:px-8 text-center">
          <Eyebrow>Still Have Questions?</Eyebrow>
          <h2 className="text-4xl font-bold text-white mb-6">Talk to Us Directly.</h2>
          <p className="text-cloud opacity-90 font-light mb-10 max-w-xl mx-auto">
            We're happy to answer questions about your specific situation before you commit to anything.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">Schedule a Consultation →</Button>
            <a
              href="tel:18003572011"
              className="inline-flex items-center justify-center px-6 py-3 rounded text-[14px] font-semibold border-[1.5px] border-gold text-gold bg-transparent hover:bg-gold-bg transition-colors"
            >
              📞 1-800-357-2011
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
