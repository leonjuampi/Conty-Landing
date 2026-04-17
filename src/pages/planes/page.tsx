import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import CTABanner from '../home/components/CTABanner';
import Footer from '../home/components/Footer';

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

const comparisonRows = [
  { category: 'Límites del Plan', isCategory: true },
  { label: 'Productos totales', basic: '250', pro: 'Ilimitados', full: 'Ilimitados' },
  { label: 'Usuarios', basic: '1', pro: '10', full: 'Ilimitados' },
  { label: 'Sucursales', basic: '1', pro: '5', full: 'Ilimitadas' },
  { category: 'Ventas y POS', isCategory: true },
  { label: 'Punto de venta rápido', basic: true, pro: true, full: true },
  { label: 'Código de barras', basic: true, pro: true, full: true },
  { label: 'Múltiples métodos de pago', basic: true, pro: true, full: true },
  { label: 'Impresión de tickets', basic: true, pro: true, full: true },
  { label: 'Compatible balanza Kretz', basic: false, pro: true, full: true },
  { category: 'Gestión e Inventario', isCategory: true },
  { label: 'Control de stock', basic: 'Básico', pro: 'Avanzado', full: 'Ilimitado' },
  { label: 'Gestión de caja', basic: true, pro: true, full: true },
  { label: 'Clientes y fiados', basic: false, pro: true, full: true },
  { label: 'Cruce de inventarios', basic: false, pro: true, full: true },
  { label: 'Sistema de recargo', basic: false, pro: true, full: true },
  { label: 'Etiquetas de góndola', basic: false, pro: false, full: true },
  { category: 'Tienda Online', isCategory: true },
  { label: 'Catálogo web', basic: true, pro: true, full: true },
  { label: 'Pedidos por WhatsApp', basic: true, pro: true, full: true },
  { label: 'Dominio propio', basic: false, pro: false, full: true },
  { category: 'Facturación', isCategory: true },
  { label: 'Facturación AFIP/ARCA', basic: false, pro: true, full: true },
  { label: 'Facturas A, B y C', basic: false, pro: true, full: true },
  { category: 'Reportes', isCategory: true },
  { label: 'Dashboard de métricas', basic: true, pro: true, full: true },
  { label: 'Reportes en tiempo real', basic: false, pro: true, full: true },
  { label: 'Exportación de datos', basic: false, pro: true, full: true },
  { category: 'Soporte', isCategory: true },
  { label: 'Soporte', basic: 'Email', pro: 'WhatsApp', full: 'WhatsApp 24/7' },
  { label: 'Onboarding dedicado', basic: false, pro: false, full: true },
];

function CellValue({ val }: { val: boolean | string | undefined }) {
  if (val === true) return <i className="ri-check-line text-green-600 text-lg"></i>;
  if (val === false) return <span className="text-gray-300">—</span>;
  return <span className="text-sm text-gray-700">{val}</span>;
}

export default function Planes() {
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
    return Math.round(monthly * (1 - getDiscount()));
  };

  const formatPrice = (val: number) => {
    if (currency === 'ARS') return `$${val.toLocaleString('es-AR')}`;
    return `$${val}`;
  };

  const scrollToContact = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="bg-gray-50 py-14 text-center border-b border-gray-200">
        <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-4 py-1.5 mb-4">
          <i className="ri-price-tag-3-line text-green-700 text-sm"></i>
          <span className="text-green-700 text-sm font-medium">Planes y Precios</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Elegí el plan que mejor
          <br />
          <span className="text-green-700">se adapte a tu negocio</span>
        </h1>
        <p className="text-gray-500">Sistema completo: POS + Inventario + Tienda Online + Facturación AFIP</p>

        {/* Free trial banner */}
        <div className="mt-6 inline-flex items-center gap-3 bg-green-700 text-white rounded-xl px-5 py-3">
          <i className="ri-sparkling-line"></i>
          <span className="text-sm font-medium">Probá el plan PRO gratis por 7 días — Sin tarjeta</span>
          <button className="bg-white text-green-700 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-green-50 transition-colors">
            ACTIVAR GRATIS
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Billing & currency toggles */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            {(['monthly', 'quarterly', 'annual'] as BillingPeriod[]).map((period) => (
              <button
                key={period}
                onClick={() => setBilling(period)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  billing === period ? 'bg-green-700 text-white shadow' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period === 'monthly' && 'Mensual'}
                {period === 'quarterly' && <>Trimestral <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${billing === 'quarterly' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700'}`}>-10%</span></>}
                {period === 'annual' && <>Anual <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${billing === 'annual' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700'}`}>-20%</span></>}
              </button>
            ))}
          </div>
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            {(['USD', 'ARS'] as Currency[]).map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  currency === cur ? 'bg-green-700 text-white shadow' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 items-start">
          {plans.map((plan, index) => {
            const price = getPrice(plan.monthlyPrice);
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-7 ${
                  plan.highlighted
                    ? 'bg-green-800 text-white shadow-2xl ring-2 ring-green-600'
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
                <h3 className={`text-xl font-bold mb-4 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
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
                    <div className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>A consultar</div>
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
                    plan.highlighted ? 'bg-white text-green-800 hover:bg-green-50' : 'bg-green-700 text-white hover:bg-green-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Full comparison table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Comparación completa de funcionalidades</h3>
            <p className="text-sm text-gray-500 mt-1">Mirá en detalle todo lo que incluye cada plan</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-3 font-semibold text-gray-600 w-1/2">Funcionalidad</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-600">Básico</th>
                  <th className="text-center px-4 py-3 font-semibold text-green-700">Pro</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-600">Empresarial</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => {
                  if ('isCategory' in row && row.isCategory) {
                    return (
                      <tr key={i} className="bg-green-50">
                        <td colSpan={4} className="px-6 py-2 text-xs font-bold text-green-700 uppercase tracking-wide">
                          {row.category}
                        </td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-700">{row.label}</td>
                      <td className="text-center px-4 py-3"><CellValue val={row.basic} /></td>
                      <td className="text-center px-4 py-3 bg-green-50/50"><CellValue val={row.pro} /></td>
                      <td className="text-center px-4 py-3"><CellValue val={row.full} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTABanner />
      <Footer />
    </div>
  );
}
