import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'ARS'>('USD');

  const plans = [
    {
      name: 'Básico',
      description: 'Para empezar a gestionar tu negocio',
      monthlyPrice: { USD: 10, ARS: 10000 },
      annualPrice: { USD: 8, ARS: 8000 },
      licenses: { min: 1, max: 1, label: '1 licencia incluida' },
      features: [
        'Hasta 100 productos con variantes',
        'Punto de venta completo',
        'Gestión de caja (1 sesión)',
        'Control de stock básico',
        'Reportes mensuales',
        '1 usuario · 1 sucursal',
        'Soporte por email',
        'Actualizaciones gratuitas'
      ],
      highlighted: false
    },
    {
      name: 'Profesional',
      description: 'Para negocios en crecimiento',
      monthlyPrice: { USD: 25, ARS: 25000 },
      annualPrice: { USD: 20, ARS: 20000 },
      licenses: { min: 1, max: 5, label: 'Hasta 5 licencias' },
      features: [
        'Productos y categorías ilimitados',
        'Punto de venta con múltiples métodos de pago',
        'Gestión de caja avanzada con rendición',
        'Stock con transferencias y ajustes',
        'Clientes y cuenta corriente',
        'Presupuestos y cotizaciones',
        'Reportes en tiempo real',
        'Multi-sucursal (hasta 5)',
        'Hasta 10 usuarios con roles',
        'Soporte prioritario 24/7'
      ],
      highlighted: true,
      badge: 'Más Popular'
    },
    {
      name: 'Empresarial',
      description: 'Para grandes operaciones',
      monthlyPrice: null,
      annualPrice: null,
      customPrice: true,
      licenses: { min: null, max: null, label: 'Licencias ilimitadas' },
      features: [
        'Todo lo del plan Profesional',
        'Sucursales ilimitadas',
        'Usuarios ilimitados',
        'Listas de precios múltiples',
        'Costos de elaboración y recetas',
        'Gestión de materias primas',
        'Soporte dedicado',
        'Implementación personalizada',
        'Capacitación en sitio',
        'SLA garantizado'
      ],
      highlighted: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCurrencyLabel = () => currency === 'USD' ? 'USD' : 'ARS';

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-teal-50 rounded-full mb-6">
            <span className="text-sm font-medium text-teal-700">Planes y Precios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Elegí el plan perfecto
            <br />
            para tu negocio
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Sin contratos, cancelá cuando quieras
          </p>

          {/* License explanation */}
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 mb-8">
            <i className="ri-device-line text-amber-600 text-lg flex-shrink-0"></i>
            <p className="text-sm text-amber-800">
              <span className="font-semibold">El precio es por licencia.</span>{' '}
              Cada licencia habilita 1 dispositivo: PC, tablet o celular.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center space-x-2 whitespace-nowrap ${
                  isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                }`}
              >
                <span>Anual</span>
                <span className="px-2 py-1 bg-emerald-500 text-white text-xs rounded-full whitespace-nowrap">
                  Ahorrá 20%
                </span>
              </button>
            </div>

            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  currency === 'USD' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency('ARS')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  currency === 'ARS' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                }`}
              >
                ARS
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-2xl scale-105 border-4 border-teal-400'
                  : 'bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-emerald-400 text-white text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className={`text-2xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-teal-50' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              {/* License badge */}
              <div className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg mb-5 text-xs font-semibold ${
                plan.highlighted
                  ? 'bg-white/20 text-white'
                  : 'bg-teal-50 text-teal-700'
              }`}>
                <i className="ri-device-line"></i>
                <span>{plan.licenses.label}</span>
                {plan.licenses.max === 5 && (
                  <span className={`ml-1 ${plan.highlighted ? 'text-teal-100' : 'text-teal-500'}`}>
                    · comprables individualmente
                  </span>
                )}
              </div>

              <div className="mb-6">
                {plan.customPrice ? (
                  <div>
                    <div className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      Personalizado
                    </div>
                    <p className={`text-sm mt-1 ${plan.highlighted ? 'text-teal-50' : 'text-gray-600'}`}>
                      Según tus necesidades
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline flex-wrap gap-x-2">
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                        ${isAnnual ? plan.annualPrice![currency].toLocaleString() : plan.monthlyPrice![currency].toLocaleString()}
                      </span>
                      <span className={`text-sm leading-tight ${plan.highlighted ? 'text-teal-100' : 'text-gray-500'}`}>
                        {getCurrencyLabel()}<br />
                        por licencia/mes
                      </span>
                    </div>
                    {isAnnual && (
                      <p className={`text-xs mt-1 ${plan.highlighted ? 'text-teal-100' : 'text-gray-500'}`}>
                        Facturado anualmente
                      </p>
                    )}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className={`ri-check-line text-lg mr-3 flex-shrink-0 ${
                      plan.highlighted ? 'text-white' : 'text-emerald-500'
                    }`}></i>
                    <span className={`text-sm ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                  plan.highlighted
                    ? 'bg-white text-teal-600 hover:bg-gray-50 shadow-lg'
                    : 'bg-teal-500 text-white hover:bg-teal-600 border-2 border-teal-500'
                }`}
              >
                {plan.customPrice ? 'Contactar Ventas' : 'Comenzar Ahora'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <i className="ri-smartphone-line text-teal-500"></i>
            <span>1 licencia = 1 dispositivo (PC, tablet o celular)</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <i className="ri-add-circle-line text-teal-500"></i>
            <span>Plan Profesional: comprá licencias extra hasta un máximo de 5</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <i className="ri-infinity-line text-teal-500"></i>
            <span>Empresarial: licencias ilimitadas, precio a convenir</span>
          </div>
        </div>
      </div>
    </section>
  );
}
