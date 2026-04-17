import NegocioPage from '../NegocioPage';

export default function Gastronomia() {
  return (
    <NegocioPage
      tag="Sistema POS para Gastronomía y Restaurantes"
      headline="El sistema que necesita tu restaurante"
      subheadline="Gestioná mesas, comandas, caja y stock de ingredientes en un solo lugar. Sin complicaciones."
      heroImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80&fit=crop"
      stats={[
        { value: '150+', label: 'Restaurantes activos' },
        { value: 'Desde $10', label: 'por mes en USD' },
        { value: '24/7', label: 'Soporte WhatsApp' },
      ]}
      featuresTitle="Funcionalidades completas para gastronomía"
      featuresSubtitle="Todo lo que necesitás para gestionar tu negocio gastronómico desde un solo lugar"
      features={[
        { icon: 'ri-shopping-cart-2-line', title: 'Punto de Venta Rápido', description: 'Registrá pedidos en segundos desde cualquier dispositivo. Múltiples métodos de pago en una sola operación.' },
        { icon: 'ri-money-dollar-circle-line', title: 'Caja Digital Exacta', description: 'Cerrá la caja en 2 minutos. El sistema suma automáticamente: efectivo, tarjeta, QR, transferencia.' },
        { icon: 'ri-archive-drawer-line', title: 'Control de Stock de Ingredientes', description: 'Cada venta descuenta los ingredientes del stock automáticamente según la receta configurada.', badge: 'Plan Pro' },
        { icon: 'ri-file-list-3-line', title: 'Gestión de Recetas', description: 'Registrá los ingredientes de cada plato. El sistema calcula el costo exacto y te sugiere el precio de venta.', badge: 'Plan Pro' },
        { icon: 'ri-line-chart-line', title: 'Reportes de Ventas', description: 'Sabé qué platos se venden más, en qué horarios y cuánto ganás. Reportes claros en un vistazo.' },
        { icon: 'ri-group-line', title: 'Clientes y Cuenta Corriente', description: 'Llevá el control de clientes con cuenta corriente. Registrá consumos, pagos y saldos.', badge: 'Plan Pro' },
        { icon: 'ri-refresh-line', title: 'Sistema de Recargo', description: 'Aplicá recargos automáticos por tarjeta de crédito o débito. El sistema calcula el monto final.', badge: 'Plan Pro' },
        { icon: 'ri-truck-line', title: 'Gestión de Proveedores', description: 'Llevá el control de tus proveedores de ingredientes. Registrá pedidos y compras fácilmente.' },
        { icon: 'ri-bar-chart-box-line', title: 'Dashboard en Tiempo Real', description: 'Métricas clave de tu negocio actualizadas al instante: ventas del día, productos más pedidos, caja actual.' },
      ]}
      faqs={[
        { question: '¿Puedo gestionar el stock de ingredientes?', answer: 'Sí, en el plan Profesional podés registrar las recetas de cada plato. Cada venta descuenta automáticamente los ingredientes del stock.' },
        { question: '¿Cómo funciona el punto de venta para gastronomía?', answer: 'Podés registrar pedidos de forma rápida desde cualquier dispositivo. Soporta múltiples métodos de pago en una sola operación.' },
        { question: '¿Puedo calcular el costo de mis platos?', answer: 'Sí, con la gestión de recetas del plan Profesional ingresás los ingredientes y el sistema calcula automáticamente el costo de elaboración.' },
        { question: '¿Funciona para delivery y salón?', answer: 'Sí, Conty sirve para gestionar tanto ventas en salón como pedidos para llevar o delivery. Podés diferenciar los canales en los reportes.' },
        { question: '¿Cómo funciona el sistema de recargo?', answer: 'En el plan Profesional configurás el porcentaje de recargo por cada medio de pago y el sistema lo aplica automáticamente al momento de cobrar.' },
        { question: '¿Puedo tener varios usuarios para empleados?', answer: 'En el plan Profesional podés tener hasta 10 usuarios con roles diferenciados: cajero, encargado, supervisor.' },
      ]}
      ctaTagline="¿Listo para digitalizar tu restaurante?"
    />
  );
}
