import NegocioPage from '../NegocioPage';

export default function Carniceria() {
  return (
    <NegocioPage
      tag="Sistema POS para Carnicerías y Rotiserías"
      headline="El sistema que entiende tu carnicería"
      subheadline="Pesá, cobrá y controlá el stock de cortes con precisión. Compatible con balanza Kretz. Sin errores, sin pérdidas."
      heroImage="https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=1920&q=80&fit=crop"
      stats={[
        { value: '200+', label: 'Carnicerías activas' },
        { value: 'Balanza Kretz', label: 'compatible' },
        { value: '24/7', label: 'Soporte WhatsApp' },
      ]}
      featuresTitle="Diseñado para carnicerías y rotiserías"
      featuresSubtitle="Todas las herramientas que necesita tu negocio de alimentos"
      features={[
        { icon: 'ri-scales-line', title: 'Compatible con Balanza Kretz', description: 'Soporta la lectura del código de balanza Kretz. Pesá el corte y el sistema carga precio automáticamente.' },
        { icon: 'ri-barcode-line', title: 'Escaneo de Código de Barras', description: 'Conectá cualquier scanner USB o Bluetooth. Escaneá y el producto se carga con su precio.' },
        { icon: 'ri-archive-drawer-line', title: 'Control de Stock en Tiempo Real', description: 'Cada venta descuenta stock al instante. Te avisa cuando un producto está por agotarse.' },
        { icon: 'ri-money-dollar-circle-line', title: 'Caja Digital Exacta', description: 'Cerrá la caja en 2 minutos. Efectivo, tarjeta, QR: el sistema calcula el monto final al instante.' },
        { icon: 'ri-shopping-cart-2-line', title: 'Ventas Rápidas', description: 'Registrá ventas en segundos. Buscá el producto, agregá la cantidad y listo.' },
        { icon: 'ri-group-line', title: 'Gestión de Fiados', description: 'Llevá el control de clientes que compran fiado. Registrá deudas, pagos y saldos en tiempo real.', badge: 'Plan Pro' },
        { icon: 'ri-refresh-line', title: 'Sistema de Recargo', description: 'Aplicá recargos automáticos según el medio de pago: tarjeta de crédito, débito o QR.', badge: 'Plan Pro' },
        { icon: 'ri-git-merge-line', title: 'Cruce de Inventarios', description: 'Contá tu stock físico y comparalo con el digital. El sistema detecta diferencias por merma.', badge: 'Plan Pro' },
        { icon: 'ri-file-list-3-line', title: 'Presupuestos Profesionales', description: 'Emití cotizaciones para pedidos grandes y convertí en venta con un clic.' },
      ]}
      faqs={[
        { question: '¿Funciona con cualquier scanner de código de barras?', answer: 'Sí, Conty es compatible con cualquier scanner USB o Bluetooth estándar. En el plan Profesional también soporta balanzas Kretz.' },
        { question: '¿Cómo funciona el control de stock?', answer: 'Cada venta descuenta el stock en tiempo real. Podés configurar alertas de stock mínimo para cada corte o producto.' },
        { question: '¿Puedo gestionar los fiados de mis clientes?', answer: 'Sí, en el plan Profesional podés llevar la cuenta corriente de cada cliente: lo que compraron, cuánto pagaron y cuánto deben.' },
        { question: '¿El sistema calcula recargos por tarjeta?', answer: 'Sí, en el plan Profesional configurás el porcentaje de recargo por cada medio de pago y el sistema lo aplica automáticamente.' },
        { question: '¿Puedo saber qué cortes se venden más?', answer: 'Sí, los reportes de ventas te muestran exactamente qué productos se venden más y en qué horarios.' },
        { question: '¿Cómo funciona el soporte?', answer: 'En el plan Profesional tenés soporte por WhatsApp con respuesta prioritaria. En Empresarial el soporte es 24/7.' },
      ]}
      ctaTagline="¿Listo para digitalizar tu carnicería?"
    />
  );
}
