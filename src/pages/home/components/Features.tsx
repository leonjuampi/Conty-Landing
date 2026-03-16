export default function Features() {
  const features = [
    {
      icon: 'ri-shopping-cart-2-line',
      title: 'Punto de Venta',
      description: 'Registrá ventas de forma rápida y precisa desde cualquier dispositivo.',
      items: ['Múltiples métodos de pago en una sola venta', 'Productos con variantes (talla, color, sabor)', 'Descuentos, notas y cancelaciones'],
      gradient: 'from-teal-500 to-emerald-500',
      bg: 'bg-teal-50'
    },
    {
      icon: 'ri-archive-drawer-line',
      title: 'Control de Stock',
      description: 'Inventario inteligente con trazabilidad completa de cada movimiento.',
      items: ['Movimientos de entrada y salida', 'Transferencias entre sucursales', 'Sesiones de inventario físico'],
      gradient: 'from-emerald-500 to-green-500',
      bg: 'bg-emerald-50'
    },
    {
      icon: 'ri-safe-2-line',
      title: 'Gestión de Caja',
      description: 'Abrí y cerrá caja con conteo por método de pago y rendición detallada.',
      items: ['Apertura y cierre de sesión de caja', 'Desglose por efectivo, tarjeta y otros', 'Historial de sesiones y diferencias'],
      gradient: 'from-orange-500 to-amber-500',
      bg: 'bg-orange-50'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Dashboard en Tiempo Real',
      description: 'Métricas clave de tu negocio actualizadas al instante.',
      items: ['Ventas del día y del período', 'Productos más vendidos', 'Rendimiento por sucursal'],
      gradient: 'from-violet-500 to-purple-500',
      bg: 'bg-violet-50'
    },
    {
      icon: 'ri-group-line',
      title: 'Clientes y Cuenta Corriente',
      description: 'Administrá tu cartera de clientes con historial completo.',
      items: ['Ficha de cliente con historial de compras', 'Estado de cuenta y saldo', 'Importación masiva desde CSV'],
      gradient: 'from-pink-500 to-rose-500',
      bg: 'bg-pink-50'
    },
    {
      icon: 'ri-map-pin-2-line',
      title: 'Multi-sucursal',
      description: 'Gestioná todas tus sucursales desde un único panel centralizado.',
      items: ['Stock independiente por sucursal', 'Usuarios asignados por punto de venta', 'Reportes consolidados o por sucursal'],
      gradient: 'from-cyan-500 to-teal-500',
      bg: 'bg-cyan-50'
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Reportes Financieros',
      description: 'Analizá ventas, rentabilidad y tendencias con informes detallados.',
      items: ['Reportes de ventas por período', 'Análisis de rentabilidad por producto', 'Exportación de datos'],
      gradient: 'from-indigo-500 to-blue-500',
      bg: 'bg-indigo-50'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Presupuestos',
      description: 'Emitís cotizaciones profesionales y las convertís en ventas con un clic.',
      items: ['Creación de presupuestos con estado', 'Conversión directa a venta', 'Seguimiento de cotizaciones pendientes'],
      gradient: 'from-lime-500 to-green-500',
      bg: 'bg-lime-50'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Auditoría y Roles',
      description: 'Trazabilidad total de operaciones y control de acceso por rol.',
      items: ['Log completo de todas las acciones', 'Roles: Administrador, Vendedor, Dueño', 'Auditoría de cambios de precio y stock'],
      gradient: 'from-red-500 to-rose-500',
      bg: 'bg-red-50'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
            <i className="ri-apps-2-line text-teal-600"></i>
            <span className="text-sm font-medium text-teal-700">Módulos del Sistema</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Todo lo que necesitás para
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
              gestionar tu comercio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un sistema completo, pensado para el día a día del negocio. Sin complicaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden relative"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bg} rounded-bl-[80px] opacity-50 transition-all duration-300 group-hover:opacity-80`}></div>

              <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md`}>
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 relative">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed relative">
                {feature.description}
              </p>

              <ul className="space-y-2 relative">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600">
                    <i className="ri-check-line text-teal-500 mr-2 mt-0.5 flex-shrink-0"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
