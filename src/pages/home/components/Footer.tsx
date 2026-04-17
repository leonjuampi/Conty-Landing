import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <img
                src="/LOGO-COLOR-COMPLETO.png"
                alt="Conty Logo"
                className="h-10 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed mb-5">
              El POS argentino que funciona.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <i className="ri-facebook-circle-line text-xl"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="WhatsApp">
                <i className="ri-whatsapp-line text-xl"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <i className="ri-linkedin-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Producto</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">
                  Planes y precios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">
                  Funcionalidades
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Casos de éxito</a></li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                  Solicitar demo
                </button>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Recursos</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/soporte" className="hover:text-white transition-colors">Ayuda y soporte</Link></li>
              <li><Link to="/soporte/videos" className="hover:text-white transition-colors">Tutoriales</Link></li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
              <li><Link to="/terminos" className="hover:text-white transition-colors">Términos y condiciones</Link></li>
              <li><Link to="/privacidad" className="hover:text-white transition-colors">Política de privacidad</Link></li>
              <li><a href="mailto:hola@conty.app" className="hover:text-white transition-colors">Contacto Email</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <span>© 2026 Conty. Todos los derechos reservados.</span>
          <span className="flex items-center gap-1">
            <i className="ri-shield-check-line text-green-500 mr-1"></i>
            Página segura
          </span>
        </div>
      </div>
    </footer>
  );
}
