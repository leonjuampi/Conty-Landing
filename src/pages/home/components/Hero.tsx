export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80&fit=crop"
          alt="Comercio"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/75 via-green-900/65 to-green-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full text-center">
        {/* hero-content triggers CSS entrance animation */}
        <div className="hero-content flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <i className="ri-store-2-line text-green-300 text-sm"></i>
            <span className="text-white text-sm font-medium">Sistema POS para Comercios Argentinos</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Vendé más, perdé menos,
            <br />
            <span className="text-green-300">gestioná mejor</span>
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mb-10">
            Punto de venta, caja, stock, clientes y reportes en un solo sistema.
            Pensado para almacenes, rotiserías y todo tipo de comercio.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3.5 bg-white text-green-800 font-semibold rounded-full hover:bg-green-50 hover:scale-105 transition-all text-sm"
            >
              Probar Gratis
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all text-sm"
            >
              Ver Planes
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar — slides up after hero content */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm border-t border-white/10 slide-up">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white pulse-soft">700+</div>
              <div className="text-xs text-white/60 mt-0.5">Comercios activos</div>
            </div>
            <div className="border-x border-white/20">
              <div className="text-2xl font-bold text-white">Desde $10</div>
              <div className="text-xs text-white/60 mt-0.5">por mes en USD</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-white/60 mt-0.5">Soporte WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
