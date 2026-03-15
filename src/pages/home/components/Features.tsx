export default function Features() {
  const features = [
    {
      icon: 'ri-line-chart-line',
      title: 'Análisis en Tiempo Real',
      description: 'Visualiza el rendimiento de tu negocio con dashboards interactivos y reportes actualizados al instante.',
      gradient: 'from-teal-500 to-emerald-500'
    },
    {
      icon: 'ri-archive-line',
      title: 'Control de Inventario',
      description: 'Gestiona tu stock de manera inteligente con alertas automáticas y seguimiento detallado de productos.',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Auditoría',
      description: 'Mantén un registro completo de todas las operaciones con trazabilidad total y reportes de auditoría detallados.',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Reportes Financieros',
      description: 'Accede a informes detallados de ingresos, gastos y rentabilidad para tomar mejores decisiones.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Multi-sucursal',
      description: 'Administra múltiples ubicaciones desde una sola plataforma con control centralizado.',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Presupuestos',
      description: 'Crea y gestiona presupuestos profesionales, controla su estado y conviértelos en ventas fácilmente.',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
            <i className="ri-star-line text-teal-600"></i>
            <span className="text-sm font-medium text-teal-700">Características Principales</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Todo lo que necesitas para
            <br />
            gestionar tu negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Herramientas poderosas diseñadas para optimizar cada aspecto de tu operación comercial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
