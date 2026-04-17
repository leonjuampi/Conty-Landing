import { useInView } from '../../../hooks/useInView';

const modules = [
  {
    icon: 'ri-shopping-cart-2-line',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-700',
    badge: 'Todos los planes',
    badgeBg: 'bg-green-100 text-green-700',
    title: 'Punto de Venta',
    tagline: 'VENTAS RÁPIDAS CON LECTOR DE CÓDIGOS',
    description: 'Sistema POS completo con scanner de códigos, ticketera y múltiples métodos de pago. Registrá ventas en segundos desde cualquier dispositivo.',
  },
  {
    icon: 'ri-archive-drawer-line',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-700',
    badge: 'Todos los planes',
    badgeBg: 'bg-green-100 text-green-700',
    title: 'Control de Stock',
    tagline: 'STOCK EN TIEMPO REAL',
    description: 'Controlá tu inventario automáticamente. Alertas de stock bajo, importación masiva desde Excel y trazabilidad de cada movimiento.',
  },
  {
    icon: 'ri-global-line',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    badge: 'Desde Básico',
    badgeBg: 'bg-orange-100 text-orange-700',
    title: 'Tienda Online',
    tagline: 'VENDÉ 24/7 POR WHATSAPP',
    description: 'Catálogo web completo con pedidos por WhatsApp. 0% comisión por cada venta que hagas. Stock sincronizado con tu local en tiempo real.',
  },
  {
    icon: 'ri-bar-chart-box-line',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-700',
    badge: 'Todos los planes',
    badgeBg: 'bg-green-100 text-green-700',
    title: 'Reportes & Dashboard',
    tagline: 'ANALIZÁ TU NEGOCIO EN TIEMPO REAL',
    description: 'Dashboard con métricas clave y reportes avanzados de ventas, stock y rentabilidad de tu negocio. Tomá decisiones con datos reales.',
  },
  {
    icon: 'ri-file-text-line',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-700',
    badge: 'Plan Pro',
    badgeBg: 'bg-blue-100 text-blue-700',
    title: 'Facturación AFIP/ARCA',
    tagline: 'FACTURÁ EN 1 CLICK',
    description: 'Emití facturas A, B y C directamente desde el sistema. Conectado con AFIP/ARCA. Sin salir del punto de venta, sin complicaciones.',
  },
];

export default function Features() {
  const titleRef = useInView<HTMLDivElement>();
  const gridRef = useInView<HTMLDivElement>();

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-12 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Todo lo que necesita tu comercio
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Un sistema completo para gestionar tu negocio desde un solo lugar.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 stagger fade-up">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col hover:shadow-lg hover:border-green-200 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 ${mod.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <i className={`${mod.icon} text-lg ${mod.iconColor}`}></i>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${mod.badgeBg}`}>
                  {mod.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-1">{mod.title}</h3>
              <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">{mod.tagline}</p>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{mod.description}</p>

              <div className="mt-4 flex justify-end">
                <span className="text-gray-300 group-hover:text-green-600 group-hover:translate-x-1 transition-all text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
