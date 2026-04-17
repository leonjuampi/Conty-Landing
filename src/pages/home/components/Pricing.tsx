import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../../../hooks/useInView';

type BillingPeriod = 'monthly' | 'quarterly' | 'annual';
type Currency = 'USD' | 'ARS';

const plans = [
  {
    name: 'Básico',
    monthlyPrice: { USD: 10, ARS: 10000 },
    badge: null,
    highlighted: false,
    features: [
      'Hasta 250 productos',
      'Punto de venta completo',
      'Código de barras',
      'Control de stock',
      'Gestión de caja',
      'Reportes básicos',
      '1 usuario · 1 sucursal',
      'Soporte por email',
    ],
    cta: 'Empezar',
  },
  {
    name: 'Profesional',
    monthlyPrice: { USD: 25, ARS: 25000 },
    badge: 'RECOMENDADO',
    highlighted: true,
    features: [
      'Productos ilimitados',
      'Punto de venta avanzado',
      'Código de barras + balanza Kretz',
      'Clientes y cuenta corriente',
      'Sistema de recargo por pago',
      'Cruce de inventarios',
      'Reportes en tiempo real',
      'Multi-sucursal (hasta 5)',
      'Hasta 10 usuarios con roles',
      'Soporte prioritario WhatsApp',
    ],
    cta: 'Empezar con Pro',
  },
  {
    name: 'Empresarial',
    monthlyPrice: null,
    badge: null,
    highlighted: false,
    features: [
      'Productos ilimitados',
      'Todo lo de Profesional',
      'Sucursales ilimitadas',
      'Usuarios ilimitados',
      'Recetas y costos de elaboración',
      'Gestión de materias primas',
      'Etiquetas de góndola',
      'Soporte dedicado 24/7',
      'Implementación personalizada',
      'SLA garantizado',
    ],
    cta: 'Contactar Ventas',
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>('monthly');
  const [currency, setCurrency] = useState<Currency>('USD');

  const getDiscount = () => {
    if (billing === 'quarterly') return 0.10;
    if (billing === 'annual') return 0.20;
    return 0;
  };

  const getPrice = (base: { USD: number; ARS: number } | null) => {
    if (!base) return null;
    const monthly = base[currency];
    const discounted = monthly * (1 - getDiscount());
    return Math.round(discounted);
  };

  const formatPrice = (val: number) => {
    if (currency === 'ARS') return `$${val.toLocaleString('es-AR')}`;
    return `$${val}`;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const titleRef = useInView<HTMLDivElement>();
  const cardsRef = useInView<HTMLDivElement>();

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-12 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Elegí el plan que mejor
            <br />
            <span className="text-green-700">se adapte a tu negocio</span>
          </h2>
          <p className="text-gray-500 mb-8">Sin contratos. Cancelá cuando quieras.</p>

          {/* Billing toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm">
              {(['monthly', 'quarterly', 'annual'] as BillingPeriod[]).map((period) => (
                <button
                  key={period}
                  onClick={() => setBilling(period)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    billing === period ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {period === 'monthly' && 'Mensual'}
                  {period === 'quarterly' && (
                    <>Trimestral <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${billing === 'quarterly' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700'}`}>-10%</span></>
                  )}
                  {period === 'annual' && (
                    <>Anual <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${billing === 'annual' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700'}`}>-20%</span></>
                  )}
                </button>
              ))}
            </div>

            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm">
              {(['USD', 'ARS'] as Currency[]).map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    currency === cur ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5">
            <i className="ri-device-line text-amber-600"></i>
            <p className="text-sm text-amber-800">
              <span className="font-semibold">1 licencia = 1 dispositivo</span> (PC, tablet o celular)
            </p>
          </div>
        </div>

        {/* Plans */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 items-start mb-8 stagger fade-up">
          {plans.map((plan, index) => {
            const price = getPrice(plan.monthlyPrice);
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-7 transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-emerald-500 to-green-700 text-white shadow-2xl ring-2 ring-emerald-400'
                    : 'bg-white border border-gray-200 hover:shadow-lg'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className={`text-xl font-bold mb-4 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>

                <div className="mb-6">
                  {price !== null ? (
                    <>
                      <div className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                        {formatPrice(price)}
                        <span className={`text-base font-normal ${plan.highlighted ? 'text-green-200' : 'text-gray-400'}`}>/mes</span>
                      </div>
                      {billing !== 'monthly' && (
                        <p className={`text-sm mt-1 ${plan.highlighted ? 'text-green-200' : 'text-gray-400'}`}>
                          Facturado {billing === 'quarterly' ? 'trimestralmente' : 'anualmente'}
                        </p>
                      )}
                    </>
                  ) : (
                    <div className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      A consultar
                    </div>
                  )}
                </div>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start text-sm gap-2 ${plan.highlighted ? 'text-green-100' : 'text-gray-600'}`}>
                      <i className={`ri-check-line mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-green-300' : 'text-green-600'}`}></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.highlighted
                      ? 'bg-white text-green-800 hover:bg-green-50'
                      : 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Link to full comparison */}
        <div className="text-center">
          <Link
            to="/planes"
            className="inline-flex items-center gap-2 text-sm text-green-700 font-medium hover:underline"
          >
            <i className="ri-list-check"></i>
            Ver comparación completa de funcionalidades
          </Link>
        </div>
      </div>
    </section>
  );
}
