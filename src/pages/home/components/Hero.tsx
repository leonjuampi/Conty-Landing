export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20abstract%20technology%20background%20with%20soft%20geometric%20patterns%20and%20flowing%20data%20visualization%20elements%20in%20teal%20and%20emerald%20gradient%20colors%2C%20clean%20professional%20atmosphere%20with%20subtle%20grid%20overlay%20suggesting%20financial%20connectivity%20and%20digital%20innovation%2C%20ultra%20wide%20panoramic%20view&width=1920&height=1080&seq=hero-bg-001&orientation=landscape"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-teal-500/20 backdrop-blur-sm text-teal-300 text-sm font-medium rounded-full border border-teal-400/30">
                Sistema ERP Inteligente
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Gestión Financiera
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Inteligente
              </span>
              <br />
              para Tu Comercio
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Optimiza procesos, controla inventarios y toma decisiones basadas en análisis en tiempo real con el sistema ERP más completo del mercado.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all whitespace-nowrap"
              >
                Comenzar Gratis
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all flex items-center space-x-2 whitespace-nowrap"
              >
                <i className="ri-play-circle-line text-xl"></i>
                <span>Ver Demo</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">+5,000</div>
                <div className="text-sm text-gray-400 mt-1">Comercios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400 mt-1">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400 mt-1">Soporte</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur-3xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="w-full h-96 flex items-center justify-center">
                  <img
                    src="https://static.readdy.ai/image/0b093dc98c2507363a6a0a171aea2dab/68af7e032087a23aaca1df6ddac2e21c.png"
                    alt="Dashboard Preview"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <i className="ri-line-chart-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Ventas Hoy</div>
                      <div className="text-lg font-bold text-gray-900">$24,580</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <i className="ri-shopping-cart-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Inventario</div>
                      <div className="text-lg font-bold text-gray-900">1,247</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
