import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const businessTypes = [
  { label: 'Almacenes y Kioscos', href: '/almacenes', icon: 'ri-store-2-line' },
  { label: 'Ropa y Boutiques', href: '/ropa', icon: 'ri-t-shirt-line' },
  { label: 'Gastronomía y Restaurantes', href: '/gastronomia', icon: 'ri-restaurant-line' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') return;
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const showWhiteBg = true;

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-center text-sm py-2 px-4 font-medium">
        Probá Conty gratis por 14 días — Sin tarjeta de crédito
      </div>

      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${showWhiteBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/LOGO-COLOR-COMPLETO.png"
                alt="Conty Logo"
                className="h-16 object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Tipos de Negocios dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center space-x-1 font-medium text-sm transition-colors ${showWhiteBg ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-200'}`}
                >
                  <span>Tipos de Negocios</span>
                  <i className={`ri-arrow-down-s-line transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {businessTypes.map((type) => (
                      <Link
                        key={type.href}
                        to={type.href}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                      >
                        <i className={`${type.icon} text-green-600 text-base`}></i>
                        <span>{type.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/funcionalidades"
                className={`font-medium text-sm transition-colors ${showWhiteBg ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-200'}`}
              >
                Funcionalidades
              </Link>

              <Link
                to="/planes"
                className={`font-medium text-sm transition-colors ${showWhiteBg ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-200'}`}
              >
                Planes y Precios
              </Link>

              {isHomePage ? (
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`font-medium text-sm transition-colors ${showWhiteBg ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-200'}`}
                >
                  Contactanos
                </button>
              ) : (
                <Link to="/#contact" className={`font-medium text-sm transition-colors ${showWhiteBg ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-200'}`}>
                  Contactanos
                </Link>
              )}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://panel.conty.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 transition-colors"
              >
                Iniciar sesión
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${showWhiteBg ? 'text-gray-700' : 'text-white'}`}
            >
              <i className={`text-xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
            <div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Tipos de Negocios</div>
              {businessTypes.map((type) => (
                <Link
                  key={type.href}
                  to={type.href}
                  className="flex items-center space-x-2 py-2 text-sm text-gray-700 hover:text-green-700"
                >
                  <i className={`${type.icon} text-green-600`}></i>
                  <span>{type.label}</span>
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <Link to="/funcionalidades" className="block text-sm text-gray-700 hover:text-green-700 font-medium">Funcionalidades</Link>
              <Link to="/planes" className="block text-sm text-gray-700 hover:text-green-700 font-medium">Planes y Precios</Link>
              <button onClick={() => scrollToSection('contact')} className="block text-sm text-gray-700 hover:text-green-700 font-medium">Contactanos</button>
            </div>
            <a
              href="https://panel.conty.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 transition-colors"
            >
              Iniciar sesión
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
