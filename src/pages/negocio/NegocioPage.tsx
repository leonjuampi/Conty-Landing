import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import Pricing from '../home/components/Pricing';
import CTABanner from '../home/components/CTABanner';
import Footer from '../home/components/Footer';

interface Feature {
  icon: string;
  title: string;
  description: string;
  badge?: string | null;
}

interface FAQ {
  question: string;
  answer: string;
}

interface NegocioPageProps {
  tag: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  stats: { value: string; label: string }[];
  featuresTitle: string;
  featuresSubtitle: string;
  features: Feature[];
  faqs: FAQ[];
  ctaTagline: string;
}

function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900 text-base pr-4">{faq.question}</span>
            <i className={`ri-arrow-down-s-line text-xl text-gray-400 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}></i>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const badgeColors: Record<string, string> = {
  'Plan Pro': 'bg-green-100 text-green-700',
  'Plan Full': 'bg-purple-100 text-purple-700',
};

export default function NegocioPage({
  tag,
  headline,
  subheadline,
  heroImage,
  stats,
  featuresTitle,
  featuresSubtitle,
  features,
  faqs,
}: NegocioPageProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={tag} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-900/60 to-green-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <span className="text-white text-sm font-medium">{tag}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">{headline}</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">{subheadline}</p>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3.5 bg-white text-green-800 font-semibold rounded-full hover:bg-green-50 transition-colors text-sm"
            >
              Probar Gratis
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              Ver Planes
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 bg-black/30 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className={`grid grid-cols-${stats.length} gap-4 text-center`}>
              {stats.map((stat, i) => (
                <div key={i} className={i > 0 && i < stats.length ? 'border-l border-white/20' : ''}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{featuresTitle}</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">{featuresSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center">
                    <i className={`${feature.icon} text-xl text-green-700`}></i>
                  </div>
                  {feature.badge && (
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeColors[feature.badge] ?? 'bg-gray-100 text-gray-700'}`}>
                      {feature.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Preguntas frecuentes</h2>
            <p className="text-gray-500">Todo lo que querías saber</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
