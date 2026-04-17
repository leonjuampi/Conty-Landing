import NegocioPage from '../NegocioPage';

export default function Ropa() {
  return (
    <NegocioPage
      tag="Sistema completo para tu local de ropa"
      headline="Gestioná tallas, colores y tu negocio desde un solo lugar"
      subheadline="Vendé más por Instagram y WhatsApp con tu catálogo digital. Stock sincronizado entre tienda física y online."
      heroImage="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80&fit=crop"
      stats={[
        { value: '+40%', label: 'Ventas online' },
        { value: 'Desde $10', label: 'por mes en USD' },
        { value: '5 fotos', label: 'por prenda' },
      ]}
      featuresTitle="Diseñado para locales de ropa y boutiques"
      featuresSubtitle="Todas las herramientas que necesita un local de indumentaria y accesorios"
      features={[
        { icon: 'ri-t-shirt-line', title: 'Gestión por Talle y Color', description: 'Cada prenda puede tener múltiples talles (S, M, L, XL) y colores. Stock independiente por cada combinación.' },
        { icon: 'ri-image-line', title: 'Catálogo Visual', description: 'Subí hasta 5 fotos por prenda. Creá un lookbook digital para que tus clientes vean todo antes de venir al local.' },
        { icon: 'ri-global-line', title: 'Tienda Online Integrada', description: 'Tu catálogo se publica automáticamente en la web. Los clientes eligen y el pedido te llega por WhatsApp. Stock sincronizado.' },
        { icon: 'ri-line-chart-line', title: 'Reportes de Moda', description: 'Sabé qué talles, colores y prendas se venden más. Tomá decisiones basadas en datos reales de tu negocio.' },
        { icon: 'ri-percent-line', title: 'Sistema de Ofertas', description: 'Configurá descuentos automáticos: 2x1, 3x2, % de descuento, ofertas por temporada. El sistema calcula todo.' },
        { icon: 'ri-price-tag-3-line', title: 'Etiquetas y Códigos', description: 'Imprimí etiquetas con código de barras y precios para cada variante. Escaneá y el sistema descuenta la prenda vendida.', badge: 'Plan Pro' },
        { icon: 'ri-calendar-line', title: 'Control por Temporada', description: 'Organizá tu inventario por temporada (Verano, Invierno, etc.). Hacé bajas de stock al cambiar colección.' },
        { icon: 'ri-instagram-line', title: 'Pedidos por Instagram', description: 'Compartí el link de tu catálogo en Instagram. Las clientas ven las prendas y piden directo por WhatsApp.' },
        { icon: 'ri-file-list-3-line', title: 'Presupuestos para Mayoristas', description: 'Creá cotizaciones para clientes mayoristas. Compartí por WhatsApp y convertí en venta con un clic.', badge: 'Plan Pro' },
      ]}
      faqs={[
        { question: '¿Puedo gestionar talles y colores fácilmente?', answer: 'Sí, cada producto puede tener múltiples variantes de talle y color, cada una con su propio stock.' },
        { question: '¿Cómo funciona la tienda online para ropa?', answer: 'Tus productos se publican automáticamente en una tienda web. Las clientas navegan, eligen y te mandan el pedido por WhatsApp.' },
        { question: '¿El stock se sincroniza entre tienda física y online?', answer: 'Sí, cuando vendés en el local el stock de la tienda online se actualiza automáticamente y viceversa.' },
        { question: '¿Puedo subir fotos de las prendas?', answer: 'Sí, podés subir hasta 5 fotos por prenda para mostrar diferentes ángulos o colores en el catálogo digital.' },
        { question: '¿Hay sistema de ofertas?', answer: 'Sí, podés configurar descuentos automáticos: 2x1, 3x2, porcentaje de descuento, o liquidaciones por temporada.' },
        { question: '¿Cómo manejo cambios de temporada?', answer: 'Podés organizar tu inventario por temporada y hacer bajas masivas de stock al cambiar colección fácilmente.' },
      ]}
      ctaTagline="¿Lista para vender más por Instagram?"
    />
  );
}
