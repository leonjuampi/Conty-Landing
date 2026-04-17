import NegocioPage from '../NegocioPage';

export default function Almacenes() {
  return (
    <NegocioPage
      tag="Sistema POS para Almacenes y Kioscos"
      headline="Sistema completo para tu almacén"
      subheadline="Escaneá códigos de barras, controlá tu stock y cerrá la caja sin errores. Todo en un solo sistema fácil de usar."
      heroImage="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1920&q=80&fit=crop"
      stats={[
        { value: '700+', label: 'Comercios activos' },
        { value: 'Desde $10', label: 'por mes en USD' },
        { value: '24/7', label: 'Soporte WhatsApp' },
      ]}
      featuresTitle="Todo lo que necesita tu almacén"
      featuresSubtitle="Herramientas diseñadas específicamente para kioscos, almacenes y comercios minoristas"
      features={[
        { icon: 'ri-barcode-line', title: 'Escaneo de Código de Barras', description: 'Conectá cualquier scanner USB o Bluetooth. El código se carga automáticamente con su precio.' },
        { icon: 'ri-money-dollar-circle-line', title: 'Caja Digital Exacta', description: 'Cerrá la caja en 2 minutos. El sistema suma automáticamente: efectivo, tarjeta, QR.' },
        { icon: 'ri-archive-drawer-line', title: 'Control de Stock en Tiempo Real', description: 'Cada venta descuenta stock al instante. Te avisa cuando un producto está por agotarse.' },
        { icon: 'ri-line-chart-line', title: 'Reportes de Ventas', description: 'Sabé qué se vende más, cuánto ganás por día. Todo en gráficos simples en un vistazo.' },
        { icon: 'ri-user-heart-line', title: 'Ventas Rápidas', description: 'Registrá ventas en segundos. Buscá el producto, agregá cantidad y listo. Optimizado para atender rápido.' },
        { icon: 'ri-group-line', title: 'Gestión de Fiados', description: 'Llevá el control de clientes que compran fiado. Registrá deudas, pagos parciales y saldos.', badge: 'Plan Pro' },
        { icon: 'ri-refresh-line', title: 'Sistema de Recargo', description: 'Aplicá recargos automáticos según el medio de pago: tarjeta, débito o QR.', badge: 'Plan Pro' },
        { icon: 'ri-git-merge-line', title: 'Cruce de Inventarios', description: 'Contá tu stock físico y comparalo con el digital. Detecta diferencias por merma o robo.', badge: 'Plan Pro' },
        { icon: 'ri-price-tag-3-line', title: 'Etiquetas de Góndola', description: 'Imprimí etiquetas profesionales con código de barras y precios para tus productos.', badge: 'Plan Full' },
      ]}
      faqs={[
        { question: '¿Funciona con cualquier scanner de código de barras?', answer: 'Sí, Conty es compatible con cualquier scanner USB o Bluetooth estándar. También soporta balanzas electrónicas Kretz en el plan Profesional.' },
        { question: '¿Puedo cargar productos masivamente?', answer: 'Sí, podés importar tu catálogo desde un archivo Excel o CSV en todos los planes.' },
        { question: '¿Cómo funciona el control de stock?', answer: 'Cada venta descuenta el stock en tiempo real. Podés configurar alertas de stock mínimo para cada producto.' },
        { question: '¿Necesito internet todo el tiempo?', answer: 'El sistema funciona en la nube, por lo que necesitás conexión a internet para operar.' },
        { question: '¿Qué pasa si me equivoco en una venta?', answer: 'Podés anular o modificar ventas con los permisos adecuados. El sistema registra todas las operaciones en un log de auditoría.' },
        { question: '¿Incluye impresión de tickets?', answer: 'Sí, podés configurar una impresora térmica para emitir tickets en todos los planes.' },
      ]}
      ctaTagline="¿Listo para digitalizar tu almacén?"
    />
  );
}
