import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Eyebrow from '@/components/ui/Eyebrow';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Eyebrow className="items-center">About Coin Credibility</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">
            Built on Experience.<br />Driven by Credibility.
          </h1>
          <p className="text-lg text-cloud opacity-90 font-light">
            Coin Credibility is a cybersecurity and business consulting practice dedicated to helping entrepreneurs and organizations protect their digital assets, reduce operational risk, and build more resilient businesses.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <SectionWrapper bgClass="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="w-64 h-64 rounded-full border-[3px] border-gold p-2">
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/germain-tyler.jpg"
                  alt="Germain Tyler, Founder of Coin Credibility"
                  fill
                  className="object-cover object-top"
                  sizes="256px"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <Eyebrow>Meet the Founder</Eyebrow>
            <h2 className="text-4xl font-bold font-display mb-2">Germain Tyler</h2>
            <p className="text-muted text-sm uppercase tracking-wide mb-6 font-sans">
              Entrepreneur · Business Consultant · Technology Professional
            </p>
            <div className="space-y-4 text-ink font-light leading-relaxed">
              <p>
                Coin Credibility was founded by Germain Tyler, an entrepreneur, business consultant, and technology professional dedicated to helping businesses protect their digital assets and reduce operational risk.
              </p>
              <p>
                With years of experience owning and operating multiple businesses, Germain understands the challenges organizations face in today's rapidly evolving digital environment. His practical, business-first approach focuses on identifying security risks, strengthening internal processes, improving operational resilience, and helping organizations make informed technology decisions.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Entrepreneur', 'Business Consultant', 'Technology Professional', 'Risk Management Specialist'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-forest-bg text-forest text-xs rounded border border-forest-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission Section */}
      <SectionWrapper bgClass="bg-forest-bg">
        <div className="text-center">
          <Eyebrow className="items-center">Our Mission</Eyebrow>
          <h2 className="text-4xl font-bold font-display mb-8">Protect. Strengthen. Grow.</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-xl font-light font-sans italic text-ink mb-10">
            <p>
              Our mission is to help businesses identify cybersecurity risks, improve operational security, and build stronger, more resilient organizations.
            </p>
            <p>
              We believe every business, regardless of size, deserves practical cybersecurity guidance that helps protect sensitive information, reduce risk, and support long-term success.
            </p>
          </div>
          <div className="h-[2px] w-[60px] bg-forest mx-auto"></div>
        </div>
      </SectionWrapper>
    </>
  );
}
