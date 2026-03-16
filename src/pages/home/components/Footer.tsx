export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://public.readdy.ai/ai/img_res/3f594f58-cbae-46dc-a656-e99d33339149.png" 
                alt="Conty Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold">Conty</span>
            </div>
            <p className="text-teal-100 text-sm leading-relaxed">
              Sistema inteligente de gestión financiera y ERP que optimiza procesos y mejora la toma de decisiones.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Producto</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('features')} className="text-teal-100 hover:text-white transition-colors text-sm cursor-pointer">
                  Características
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-teal-100 hover:text-white transition-colors text-sm cursor-pointer">
                  Precios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('integrations')} className="text-teal-100 hover:text-white transition-colors text-sm cursor-pointer">
                  Integraciones
                </button>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">
                  Actualizaciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">
                  Carreras
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-teal-100 hover:text-white transition-colors text-sm cursor-pointer">
                  Contacto
                </button>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">
                  Prensa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">
                  API
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-500/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-teal-100">
              © 2026 Conty. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-teal-100 hover:text-white transition-colors" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-2xl"></i>
              </a>
              <a href="#" className="text-teal-100 hover:text-white transition-colors" aria-label="Twitter">
                <i className="ri-twitter-x-fill text-2xl"></i>
              </a>
              <a href="#" className="text-teal-100 hover:text-white transition-colors" aria-label="Facebook">
                <i className="ri-facebook-fill text-2xl"></i>
              </a>
              <a href="#" className="text-teal-100 hover:text-white transition-colors" aria-label="Instagram">
                <i className="ri-instagram-fill text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
