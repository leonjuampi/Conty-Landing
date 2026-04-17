export default function CTABanner() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-r from-emerald-500 to-green-600 py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-1.5 mb-6">
          <i className="ri-sparkling-line text-green-200 text-sm"></i>
          <span className="text-green-100 text-sm font-medium">Sin tarjeta de crédito</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ¿Listo para optimizar tu negocio?
        </h2>
        <p className="text-green-100 text-lg mb-8">
          Empezá gratis hoy y transformá la gestión de tu comercio
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-3.5 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors text-sm"
          >
            Probar Gratis — 14 días
          </button>
          <a
            href="https://wa.me/+5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-white/50 text-white font-semibold rounded-full hover:border-white transition-colors text-sm flex items-center gap-2"
          >
            <i className="ri-whatsapp-line"></i>
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
