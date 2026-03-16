import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'ARS'>('USD');

  const plans = [
    {
      name: 'Básico',
      description: 'Perfecto para pequeños negocios',
      monthlyPrice: { USD: 10, ARS: 10000 },
      annualPrice: { USD: 8, ARS: 8000 },
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
      description: 'Ideal para negocios en crecimiento',
      monthlyPrice: { USD: 25, ARS: 25000 },
      annualPrice: { USD: 20, ARS: 20000 },
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

  const getCurrencySymbol = () => currency === 'USD' ? '$' : '$';
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
            Elige el plan perfecto
            <br />
            para tu negocio
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sin contratos, cancela cuando quieras
          </p>

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
                  Ahorra 20%
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

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-teal-50' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                {plan.customPrice ? (
                  <div>
                    <div className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      Personalizado
                    </div>
                    <p className={`text-sm mt-2 ${plan.highlighted ? 'text-teal-50' : 'text-gray-600'}`}>
                      Según tus necesidades
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline">
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                        {getCurrencySymbol()}{isAnnual ? plan.annualPrice[currency].toLocaleString() : plan.monthlyPrice[currency].toLocaleString()}
                      </span>
                      <span className={`ml-2 ${plan.highlighted ? 'text-teal-50' : 'text-gray-600'}`}>
                        {getCurrencyLabel()}/mes
                      </span>
                    </div>
                    {isAnnual && (
                      <p className={`text-sm mt-2 ${plan.highlighted ? 'text-teal-50' : 'text-gray-600'}`}>
                        Facturado anualmente
                      </p>
                    )}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className={`ri-check-line text-xl mr-3 flex-shrink-0 ${
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
      </div>
    </section>
  );
}
