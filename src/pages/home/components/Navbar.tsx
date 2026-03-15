import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // For pages other than home (like /soporte), always show white background
  const navBgClass = isHomePage
    ? isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    : 'bg-white shadow-lg';

  const logoTextColorClass = isHomePage
    ? isScrolled ? 'text-gray-900' : 'text-white'
    : 'text-gray-900';

  const linkColorClass = isHomePage
    ? isScrolled ? 'text-gray-700 hover:text-teal-500' : 'text-white hover:text-teal-200'
    : 'text-gray-700 hover:text-teal-500';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="https://public.readdy.ai/ai/img_res/3f594f58-cbae-46dc-a656-e99d33339149.png" 
              alt="Conty Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className={`text-2xl font-bold ${logoTextColorClass}`}>
              Conty
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection('features')}
                  className={`font-medium transition-colors cursor-pointer ${linkColorClass}`}
                >
                  Características
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className={`font-medium transition-colors cursor-pointer ${linkColorClass}`}
                >
                  Precios
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className={`font-medium transition-colors cursor-pointer ${linkColorClass}`}
                >
                  Opiniones
                </button>
              </>
            )}
            <Link
              to="/soporte"
              className={`font-medium transition-colors ${linkColorClass}`}
            >
              Soporte
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://panel.conty.app"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 font-semibold rounded-lg transition-all whitespace-nowrap ${
                isHomePage && !isScrolled
                  ? 'bg-transparent text-white border border-white hover:bg-white/10'
                  : 'bg-white text-teal-600 border border-teal-200 hover:bg-gray-50'
              }`}
            >
              Ingresar al sistema
            </a>

            {isHomePage && (
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-6 py-2.5 font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isScrolled
                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                    : 'bg-white text-teal-600 hover:bg-gray-100'
                }`}
              >
                Solicitar Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
