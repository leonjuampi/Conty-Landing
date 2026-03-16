import { useState } from 'react';

const modules = [
  {
    id: 'ventas',
    label: 'Punto de Venta',
    icon: 'ri-shopping-cart-2-line',
    color: 'teal',
    title: 'Registrá ventas de forma rápida y sin errores',
    description: 'El módulo de ventas está diseñado para la velocidad. Buscá productos, agregá variantes, aplicá descuentos y cobrá con múltiples métodos de pago en segundos. Todo queda registrado automáticamente.',
    features: [
      { icon: 'ri-barcode-line', text: 'Búsqueda por nombre o código de producto' },
      { icon: 'ri-layout-grid-line', text: 'Variantes de producto (tamaño, sabor, tipo)' },
      { icon: 'ri-percent-line', text: 'Descuentos por ítem o por total de venta' },
      { icon: 'ri-bank-card-line', text: 'Múltiples métodos de pago en una sola venta' },
      { icon: 'ri-file-list-line', text: 'Notas por pedido y cancelación con auditoría' },
      { icon: 'ri-printer-line', text: 'Ticket de venta imprimible' },
    ],
    mockup: {
      title: 'Nueva venta',
      items: [
        { name: 'Milanesa x2', price: '$2.400' },
        { name: 'Ensalada rusa', price: '$850' },
        { name: 'Pollo asado (entero)', price: '$5.200' },
      ],
      total: '$8.450',
      badge: '3 ítems',
    }
  },
  {
    id: 'stock',
    label: 'Inventario',
    icon: 'ri-archive-drawer-line',
    color: 'emerald',
    title: 'Control total de tu inventario en tiempo real',
    description: 'Cada venta descuenta automáticamente del stock. Podés registrar entradas, transferir mercadería entre sucursales y hacer inventarios físicos para mantener todo cuadrado.',
    features: [
      { icon: 'ri-arrow-down-circle-line', text: 'Descuento automático de stock por venta' },
      { icon: 'ri-add-circle-line', text: 'Ingresos de mercadería con detalle de motivo' },
      { icon: 'ri-exchange-line', text: 'Transferencias entre sucursales con confirmación' },
      { icon: 'ri-clipboard-line', text: 'Sesiones de inventario físico con aprobación' },
      { icon: 'ri-alert-line', text: 'Vista de productos con stock por sucursal' },
      { icon: 'ri-history-line', text: 'Historial completo de movimientos' },
    ],
    mockup: {
      title: 'Movimientos de stock',
      items: [
        { name: 'Entrada — Pollo (30 kg)', price: '+30' },
        { name: 'Venta — Milanesa', price: '-2' },
        { name: 'Transferencia → Suc. 2', price: '-10' },
      ],
      total: 'Stock: 18 kg',
      badge: 'Hoy',
    }
  },
  {
    id: 'caja',
    label: 'Caja',
    icon: 'ri-safe-2-line',
    color: 'orange',
    title: 'Abrí y cerrá caja con rendición exacta',
    description: 'Cada sesión de caja comienza con un monto inicial y cierra con el conteo real del efectivo y cada método de pago. Los reportes muestran la diferencia y el detalle de cada movimiento.',
    features: [
      { icon: 'ri-play-circle-line', text: 'Apertura de caja con monto inicial' },
      { icon: 'ri-money-dollar-circle-line', text: 'Registro de ventas en tiempo real por método de pago' },
      { icon: 'ri-calculator-line', text: 'Cierre con conteo de efectivo ingresado' },
      { icon: 'ri-file-chart-line', text: 'Reporte de diferencia y totales por método' },
      { icon: 'ri-time-line', text: 'Historial de todas las sesiones anteriores' },
      { icon: 'ri-team-line', text: 'Identificación del usuario que abre/cierra' },
    ],
    mockup: {
      title: 'Cierre de caja',
      items: [
        { name: 'Efectivo', price: '$12.500' },
        { name: 'Tarjeta débito', price: '$8.200' },
        { name: 'Transferencia', price: '$3.750' },
      ],
      total: 'Total: $24.450',
      badge: 'En curso',
    }
  },
  {
    id: 'reportes',
    label: 'Reportes',
    icon: 'ri-bar-chart-box-line',
    color: 'violet',
    title: 'Información clara para tomar mejores decisiones',
    description: 'Los reportes de Conty te dan visibilidad sobre lo que más importa: cuánto vendés, qué productos rinden más y cómo evoluciona tu negocio a lo largo del tiempo.',
    features: [
      { icon: 'ri-calendar-line', text: 'Reportes por día, semana o período personalizado' },
      { icon: 'ri-trophy-line', text: 'Ranking de productos más vendidos' },
      { icon: 'ri-pie-chart-line', text: 'Distribución por método de pago' },
      { icon: 'ri-building-line', text: 'Comparativa entre sucursales' },
      { icon: 'ri-user-line', text: 'Ventas por vendedor' },
      { icon: 'ri-file-download-line', text: 'Exportación de datos' },
    ],
    mockup: {
      title: 'Resumen del período',
      items: [
        { name: 'Total vendido', price: '$284.500' },
        { name: 'Ticket promedio', price: '$1.230' },
        { name: 'Ventas realizadas', price: '231' },
      ],
      total: '↑ 12% vs mes anterior',
      badge: 'Marzo 2026',
    }
  },
  {
    id: 'clientes',
    label: 'Clientes',
    icon: 'ri-group-line',
    color: 'pink',
    title: 'Conocé a tus clientes y su historial completo',
    description: 'Llevá una ficha de cada cliente con sus datos, historial de compras y estado de cuenta. Importá tu base de clientes desde una planilla y tené todo en un solo lugar.',
    features: [
      { icon: 'ri-user-add-line', text: 'Alta de clientes con datos de contacto' },
      { icon: 'ri-history-line', text: 'Historial completo de compras por cliente' },
      { icon: 'ri-wallet-line', text: 'Cuenta corriente y saldo actualizado' },
      { icon: 'ri-file-excel-line', text: 'Importación masiva desde CSV' },
      { icon: 'ri-search-line', text: 'Búsqueda y filtrado rápido' },
      { icon: 'ri-edit-line', text: 'Edición y gestión de datos en cualquier momento' },
    ],
    mockup: {
      title: 'Ficha de cliente',
      items: [
        { name: 'Compras totales', price: '47' },
        { name: 'Última compra', price: 'Hoy' },
        { name: 'Saldo en cuenta', price: '$3.200' },
      ],
      total: 'Cliente frecuente',
      badge: 'Activo',
    }
  },
];

const colorMap: Record<string, { tab: string; active: string; icon: string; badge: string; check: string }> = {
  teal:   { tab: 'hover:text-teal-600 data-[active=true]:border-teal-500 data-[active=true]:text-teal-600', active: 'from-teal-500 to-emerald-500', icon: 'bg-teal-100 text-teal-600', badge: 'bg-teal-100 text-teal-700', check: 'text-teal-500' },
  emerald:{ tab: 'hover:text-emerald-600 data-[active=true]:border-emerald-500 data-[active=true]:text-emerald-600', active: 'from-emerald-500 to-green-500', icon: 'bg-emerald-100 text-emerald-600', badge: 'bg-emerald-100 text-emerald-700', check: 'text-emerald-500' },
  orange: { tab: 'hover:text-orange-600 data-[active=true]:border-orange-500 data-[active=true]:text-orange-600', active: 'from-orange-500 to-amber-500', icon: 'bg-orange-100 text-orange-600', badge: 'bg-orange-100 text-orange-700', check: 'text-orange-500' },
  violet: { tab: 'hover:text-violet-600 data-[active=true]:border-violet-500 data-[active=true]:text-violet-600', active: 'from-violet-500 to-purple-500', icon: 'bg-violet-100 text-violet-600', badge: 'bg-violet-100 text-violet-700', check: 'text-violet-500' },
  pink:   { tab: 'hover:text-pink-600 data-[active=true]:border-pink-500 data-[active=true]:text-pink-600', active: 'from-pink-500 to-rose-500', icon: 'bg-pink-100 text-pink-600', badge: 'bg-pink-100 text-pink-700', check: 'text-pink-500' },
};

export default function Integrations() {
  const [activeId, setActiveId] = useState('ventas');
  const active = modules.find(m => m.id === activeId)!;
  const colors = colorMap[active.color];

  return (
    <section id="integrations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
            <i className="ri-layout-masonry-line text-teal-600"></i>
            <span className="text-sm font-medium text-teal-700">Funciones del Sistema</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cada módulo diseñado
            <br />
            para tu operación diaria
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explorá en detalle cada parte del sistema y cómo te ayuda a trabajar mejor.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {modules.map(m => (
            <button
              key={m.id}
              data-active={activeId === m.id}
              onClick={() => setActiveId(m.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all ${
                activeId === m.id
                  ? `border-current bg-white shadow-md ${colorMap[m.color].tab}`
                  : 'border-transparent text-gray-500 bg-white hover:bg-gray-100'
              } ${colorMap[m.color].tab}`}
            >
              <i className={`${m.icon} text-base`}></i>
              <span>{m.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            {/* Left: text */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.active} flex items-center justify-center mb-6 shadow-lg`}>
                <i className={`${active.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                {active.title}
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {active.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {active.features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                      <i className={`${f.icon} text-sm`}></i>
                    </div>
                    <span className="text-sm text-gray-600 leading-tight pt-1">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: mockup */}
            <div className={`bg-gradient-to-br ${colors.active} p-10 lg:p-14 flex items-center justify-center`}>
              <div className="w-full max-w-sm">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-white font-semibold text-lg">{active.mockup.title}</span>
                    <span className={`text-xs px-3 py-1 rounded-full bg-white/20 text-white font-medium`}>
                      {active.mockup.badge}
                    </span>
                  </div>
                  <div className="space-y-3 mb-5">
                    {active.mockup.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3">
                        <span className="text-white/80 text-sm">{item.name}</span>
                        <span className="text-white font-semibold text-sm">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/20 pt-4 flex justify-between items-center">
                    <span className="text-white/70 text-sm">Resultado</span>
                    <span className="text-white font-bold text-lg">{active.mockup.total}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center space-x-2 bg-white/10 rounded-xl px-4 py-3">
                  <i className="ri-shield-check-line text-white/70"></i>
                  <span className="text-white/80 text-xs">Todo queda registrado con fecha, hora y usuario</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
