import Navbar from '../home/components/Navbar';
import CTABanner from '../home/components/CTABanner';
import Footer from '../home/components/Footer';

const mainFeatures = [
  {
    number: '01',
    icon: 'ri-shopping-cart-2-line',
    title: 'Registro de ventas',
    tagline: 'Vendé más rápido, sin errores',
    description: 'Sistema POS completo que funciona desde cualquier dispositivo. Registrá ventas en segundos con scanner de códigos de barras.',
    items: [
      'Punto de venta rápido con búsqueda de productos',
      'Compatible con scanner USB y Bluetooth',
      'Múltiples métodos de pago en una sola venta',
      'Descuentos por producto o por total',
      'Anulación y modificación de ventas',
      'Impresión de tickets en impresora térmica',
    ],
    side: 'right',
  },
  {
    number: '02',
    icon: 'ri-money-dollar-circle-line',
    title: 'Registro de gastos',
    tagline: 'Controlá todos los egresos del negocio',
    description: 'Registrá cada gasto del negocio categorizado. Conocé exactamente cuánto gastás y en qué para mejorar tu rentabilidad.',
    items: [
      'Categorías de gastos personalizables',
      'Carga de gastos con comprobante',
      'Reportes de gastos por período',
      'Comparación ingresos vs. egresos',
      'Exportación a Excel o CSV',
    ],
    side: 'left',
  },
  {
    number: '03',
    icon: 'ri-archive-drawer-line',
    title: 'Control de inventario',
    tagline: 'Nunca más te quedés sin stock',
    description: 'Inventario inteligente con trazabilidad completa. El stock se actualiza automáticamente con cada venta.',
    items: [
      'Actualización automática en tiempo real',
      'Alertas de stock mínimo configurables',
      'Movimientos de entrada y salida',
      'Importación masiva desde Excel',
      'Etiquetas de góndola con código de barras (Plan Full)',
      'Categorías y subcategorías ilimitadas',
    ],
    side: 'right',
  },
  {
    number: '04',
    icon: 'ri-truck-line',
    title: 'Manejo de proveedores',
    tagline: 'Control completo de tus compras',
    description: 'Llevá el registro de todos tus proveedores, los productos que suministran y el historial de compras.',
    items: [
      'Ficha de proveedor con datos de contacto',
      'Historial de compras por proveedor',
      'Comparación de precios entre proveedores',
      'Registro de órdenes de compra',
      'Alertas de pagos pendientes a proveedores',
    ],
    side: 'left',
  },
  {
    number: '05',
    icon: 'ri-bar-chart-box-line',
    title: 'Análisis de estadísticas',
    tagline: 'Tomá decisiones con datos reales',
    description: 'Dashboard completo con las métricas más importantes de tu negocio, actualizadas al instante.',
    items: [
      'Ventas del día, semana, mes y período personalizado',
      'Productos más vendidos y menos vendidos',
      'Rentabilidad por producto y categoría',
      'Comparación con períodos anteriores',
      'Reportes exportables en Excel y PDF',
      'Dashboard ejecutivo para dueños (Plan Empresarial)',
    ],
    side: 'right',
  },
  {
    number: '06',
    icon: 'ri-global-line',
    title: 'Tienda Online Integrada',
    tagline: 'Vendé 24/7 sin comisiones',
    description: 'Tu catálogo publicado en la web automáticamente. Tus clientes eligen y el pedido te llega por WhatsApp. 0% comisión.',
    items: [
      'Catálogo web listo en minutos',
      'Pedidos directos por WhatsApp',
      'Stock sincronizado con tu local en tiempo real',
      'Fotos de productos con múltiples imágenes',
      'Link de catálogo para compartir en redes',
      'Dominio propio (Plan Empresarial)',
    ],
    side: 'left',
  },
  {
    number: '07',
    icon: 'ri-shield-user-line',
    title: 'Gestión de Usuarios por Roles',
    tagline: 'Control total de tu equipo',
    description: 'Asigná roles específicos a cada empleado para que cada uno acceda solo a lo que necesita.',
    items: [
      'Roles predefinidos: Dueño, Encargado, Cajero, Vendedor',
      'Permisos modulares por función',
      'Control de quién puede hacer descuentos',
      'Control de quién puede cerrar caja',
      'Log de actividad por usuario',
    ],
    side: 'right',
    badge: 'Plan Pro',
  },
  {
    number: '08',
    icon: 'ri-file-list-3-line',
    title: 'Presupuestos Profesionales',
    tagline: 'Convertí cotizaciones en ventas',
    description: 'Emitís presupuestos con logo de tu negocio. Compartí por WhatsApp y convertí en venta con un clic.',
    items: [
      'Creación de presupuestos con diseño profesional',
      'Logo y datos del negocio en el documento',
      'Compartir por WhatsApp o email',
      'Conversión directa a venta en 1 clic',
      'Seguimiento de presupuestos pendientes',
      'Validez configurable por días',
    ],
    side: 'left',
    badge: 'Plan Pro',
  },
  {
    number: '09',
    icon: 'ri-price-tag-3-line',
    title: 'Actualización Masiva de Precios',
    tagline: 'Actualizá cientos de precios en segundos',
    description: 'Aplicá aumentos por categoría, proveedor o lista completa. Ideal para cuando cambian los precios de tus proveedores.',
    items: [
      'Aumento por porcentaje o monto fijo',
      'Filtrar por categoría, proveedor o marca',
      'Vista previa antes de aplicar los cambios',
      'Historial de actualizaciones de precios',
      'Importación de lista de precios desde Excel',
    ],
    side: 'right',
    badge: 'Plan Pro',
  },
  {
    number: '10',
    icon: 'ri-git-merge-line',
    title: 'Cruce de Inventarios',
    tagline: 'Detectá diferencias entre lo físico y el sistema',
    description: 'Contá tu stock físico, ingresalo al sistema y Conty detecta automáticamente las diferencias por merma o robo.',
    items: [
      'Sesión de inventario físico guiada',
      'Comparación automática contra el sistema',
      'Reporte de diferencias por producto',
      'Ajuste masivo de stock al finalizar',
      'Registro histórico de sesiones de inventario',
    ],
    side: 'left',
    badge: 'Plan Pro',
  },
  {
    number: '11',
    icon: 'ri-restaurant-line',
    title: 'Gestión de Recetas',
    tagline: 'Calculá el costo exacto de cada plato',
    description: 'Ideal para gastronomía, panaderías y producción. Registrá los ingredientes de cada producto y el sistema calcula el costo automáticamente.',
    items: [
      'Registro de ingredientes por receta',
      'Cálculo automático del costo de elaboración',
      'Sugerencia de precio de venta con margen',
      'Descuento automático de ingredientes del stock',
      'Control de merma en producción',
      'Costo de receta actualizado con el precio del proveedor',
    ],
    side: 'right',
    badge: 'Plan Empresarial',
  },
  {
    number: '12',
    icon: 'ri-file-text-line',
    title: 'Facturación AFIP/ARCA',
    tagline: 'Facturá en 1 click sin salir del POS',
    description: 'Emití facturas A, B y C electrónicas directamente desde el punto de venta. Conectado con AFIP/ARCA sin complicaciones.',
    items: [
      'Facturas A, B y C electrónicas',
      'Conexión directa con AFIP/ARCA',
      'Sin salir del punto de venta',
      'CAE automático en cada factura',
      'Historial de facturas emitidas',
      'Exportación para contador en formato AFIP',
    ],
    side: 'left',
    badge: 'Próximamente',
  },
];

const extras = [
  { icon: 'ri-smartphone-line', title: 'App móvil y web', description: 'Accedé desde el celular, tablet o computadora. Sin instalar nada.' },
  { icon: 'ri-shield-check-line', title: 'Super seguro', description: 'Conexión encriptada HTTPS/TLS. Backups automáticos diarios.' },
  { icon: 'ri-lock-line', title: '100% seguro', description: 'Tus datos son tuyos. No los vendemos ni los compartimos.' },
  { icon: 'ri-customer-service-2-line', title: 'Soporte 24/7', description: 'Equipo de soporte en Argentina por WhatsApp y email.' },
];

const badgeColors: Record<string, string> = {
  'Plan Pro': 'bg-green-100 text-green-700',
  'Plan Empresarial': 'bg-purple-100 text-purple-700',
  'Próximamente': 'bg-orange-100 text-orange-700',
};

export default function Funcionalidades() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-b from-green-50 to-white py-16 text-center border-b border-gray-100">
        <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-1.5 mb-4">
          <i className="ri-apps-2-line text-green-700 text-sm"></i>
          <span className="text-green-700 text-sm font-medium">Funcionalidades</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          El centro de comando
          <br />
          <span className="text-green-700">para tu negocio</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Todo lo que necesitás para gestionar tu comercio desde un solo lugar.
          Sin complicaciones, sin instalaciones.
        </p>
      </div>

      {/* Main features - alternating layout */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {mainFeatures.map((feat, i) => (
          <div
            key={i}
            className={`flex flex-col ${feat.side === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            {/* Text side */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                  {feat.number}
                </span>
                {feat.badge && (
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[feat.badge]}`}>
                    {feat.badge}
                  </span>
                )}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">{feat.title}</h2>
              <p className="text-green-700 font-semibold text-sm uppercase tracking-wide mb-3">{feat.tagline}</p>
              <p className="text-gray-500 leading-relaxed mb-6">{feat.description}</p>

              <ul className="space-y-2.5">
                {feat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <i className="ri-check-line text-green-600 mt-0.5 flex-shrink-0"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual side - placeholder card */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 min-h-[260px] flex flex-col items-center justify-center text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  feat.badge === 'Plan Pro' ? 'bg-green-100' :
                  feat.badge === 'Plan Empresarial' ? 'bg-purple-100' : 'bg-green-50'
                }`}>
                  <i className={`${feat.icon} text-3xl ${
                    feat.badge === 'Plan Pro' ? 'text-green-700' :
                    feat.badge === 'Plan Empresarial' ? 'text-purple-700' : 'text-green-600'
                  }`}></i>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-400">{feat.tagline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "Y mucho más" */}
      <div className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Y mucho más...</h2>
          <p className="text-gray-500">Todo lo que necesitás para hacer crecer tu negocio desde un solo lugar</p>
        </div>
        <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {extras.map((extra, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <i className={`${extra.icon} text-xl text-green-700`}></i>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{extra.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{extra.description}</p>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
      <Footer />
    </div>
  );
}
