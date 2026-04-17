import { useInView } from '../../../hooks/useInView';

const testimonials = [
  {
    stars: 5,
    quote: 'Antes perdía plata en faltantes de caja. Con Conty, los cierres son exactos al centavo. Recuperé esa plata en 2 meses.',
    metric: '💰 Cierres exactos',
    name: 'María Rodríguez',
    business: 'Almacén Don José — Caballito, CABA',
    initials: 'MR',
    color: 'bg-green-600',
  },
  {
    stars: 5,
    quote: 'Me quedaba sin productos y perdía ventas. Ahora el sistema me avisa antes. Nunca más me quedé sin stock de lo que más vendo.',
    metric: '📦 +25% ventas',
    name: 'Carlos Méndez',
    business: 'Kiosco 24hs — Villa Urquiza, CABA',
    initials: 'CM',
    color: 'bg-blue-600',
  },
  {
    stars: 5,
    quote: 'El cierre de caja me tomaba 2 horas con calculadora y papel. Ahora son 5 minutos y tengo todo el detalle. Mi vida cambió.',
    metric: '⏱ 2hs → 5min',
    name: 'Ana Torres',
    business: 'Minimarket El Ahorro — Rosario',
    initials: 'AT',
    color: 'bg-purple-600',
  },
  {
    stars: 5,
    quote: 'Antes perdía clientes que preguntaban por talle en Instagram. Ahora ven mi catálogo online y compran por WhatsApp. Vendo mucho más.',
    metric: '🛍 +40% ventas online',
    name: 'Laura Fernández',
    business: 'Lola Store (Indumentaria) — Rosario',
    initials: 'LF',
    color: 'bg-pink-600',
  },
];

export default function Testimonials() {
  const titleRef = useInView<HTMLDivElement>();
  const gridRef = useInView<HTMLDivElement>();

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-12 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Historias de comerciantes reales
          </h2>
          <p className="text-gray-500 text-lg">
            Más de 700 negocios ya mejoraron su gestión con Conty
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger fade-up">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, s) => (
                  <i key={s} className="ri-star-fill text-amber-400 text-base"></i>
                ))}
                <span className="ml-auto text-4xl text-gray-100 font-serif leading-none select-none">"</span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">
                "{t.quote}"
              </p>

              <div className="inline-flex items-center bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 w-fit">
                {t.metric}
              </div>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
