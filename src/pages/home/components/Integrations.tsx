export default function Integrations() {
  const integrations = [
    { name: 'Stripe', logo: 'ri-bank-card-line' },
    { name: 'PayPal', logo: 'ri-paypal-line' },
    { name: 'Mercado Pago', logo: 'ri-money-dollar-circle-line' },
    { name: 'QuickBooks', logo: 'ri-file-chart-line' },
    { name: 'Shopify', logo: 'ri-shopping-bag-line' },
    { name: 'WooCommerce', logo: 'ri-shopping-cart-2-line' },
    { name: 'Slack', logo: 'ri-slack-line' },
    { name: 'Google Analytics', logo: 'ri-line-chart-line' },
    { name: 'Mailchimp', logo: 'ri-mail-send-line' },
    { name: 'Zapier', logo: 'ri-flashlight-line' },
    { name: 'WhatsApp', logo: 'ri-whatsapp-line' },
    { name: 'Excel', logo: 'ri-file-excel-line' }
  ];

  const technologies = [
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Computing',
      description: 'Infraestructura en la nube con 99.9% de disponibilidad'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Seguridad Avanzada',
      description: 'Encriptación de datos y cumplimiento de estándares internacionales'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Apps Móviles',
      description: 'Accede desde cualquier dispositivo, en cualquier momento'
    },
    {
      icon: 'ri-code-s-slash-line',
      title: 'API Completa',
      description: 'Integra Conty con tus sistemas personalizados'
    }
  ];

  return (
    <section id="integrations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Integraciones Poderosas
          </h2>
          <p className="text-xl text-gray-600">
            Conecta Conty con tus herramientas favoritas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                <i className={`${integration.logo} text-4xl text-gray-400 group-hover:text-teal-500 transition-colors`}></i>
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <button className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition-all inline-flex items-center space-x-2 whitespace-nowrap">
            <span>Ver Todas las Integraciones</span>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tecnología de Vanguardia
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <i className={`${tech.icon} text-4xl text-white`}></i>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {tech.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
