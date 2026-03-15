import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function Support() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Todos', icon: 'ri-apps-line' },
    { id: 'getting-started', name: 'Primeros Pasos', icon: 'ri-rocket-line' },
    { id: 'billing', name: 'Facturación', icon: 'ri-file-list-3-line' },
    { id: 'inventory', name: 'Inventario', icon: 'ri-archive-line' },
    { id: 'reports', name: 'Reportes', icon: 'ri-bar-chart-box-line' },
    { id: 'technical', name: 'Técnico', icon: 'ri-settings-3-line' }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: '¿Cómo empiezo a usar Conty?',
      answer: 'Después de registrarte, te guiaremos paso a paso en la configuración inicial. Primero configura tu empresa, luego agrega tus productos y comienza a registrar ventas. Nuestro asistente virtual está disponible 24/7 para ayudarte.'
    },
    {
      category: 'getting-started',
      question: '¿Necesito conocimientos técnicos para usar Conty?',
      answer: 'No, Conty está diseñado para ser intuitivo y fácil de usar. No necesitas conocimientos técnicos previos. Además, ofrecemos tutoriales en video y documentación completa.'
    },

    {
      category: 'inventory',
      question: '¿Cómo agrego productos al inventario?',
      answer: 'Ve a Inventario > Productos > Nuevo Producto. Completa la información básica (nombre, código, precio, stock inicial) y guarda. También puedes importar productos masivamente desde Excel.'
    },
    {
      category: 'inventory',
      question: '¿Cómo funcionan las alertas de stock bajo?',
      answer: 'Configura el stock mínimo para cada producto. Cuando el inventario llegue a ese nivel, recibirás una alerta automática en el dashboard y por email para que puedas reordenar a tiempo.'
    },
    {
      category: 'inventory',
      question: '¿Puedo hacer ajustes de inventario?',
      answer: 'Sí, desde Inventario > Ajustes puedes registrar entradas, salidas, mermas o correcciones de stock. Cada ajuste queda registrado con fecha, motivo y usuario responsable para auditoría.'
    },
    {
      category: 'reports',
      question: '¿Qué tipos de reportes puedo generar?',
      answer: 'Conty ofrece reportes de ventas, compras, inventario, flujo de caja, rentabilidad por producto, análisis de clientes y más. Todos los reportes se pueden exportar a PDF o Excel.'
    },
    {
      category: 'reports',
      question: '¿Puedo programar reportes automáticos?',
      answer: 'Sí, en el plan Profesional y Empresarial puedes programar reportes para que se generen y envíen automáticamente por email diario, semanal o mensualmente.'
    },
    {
      category: 'reports',
      question: '¿Cómo funciona el análisis en tiempo real?',
      answer: 'El dashboard muestra métricas actualizadas en tiempo real: ventas del día, productos más vendidos, alertas de stock y tendencias. Los datos se actualizan automáticamente cada vez que registras una operación.'
    },
    {
      category: 'technical',
      question: '¿Mis datos están seguros?',
      answer: 'Sí, utilizamos encriptación de nivel bancario (SSL 256-bit), backups automáticos diarios y cumplimos con estándares internacionales de seguridad. Tus datos están protegidos en servidores en la nube con 99.9% de disponibilidad.'
    },
    {
      category: 'technical',
      question: '¿Puedo acceder desde múltiples dispositivos?',
      answer: 'Sí, Conty es 100% web y puedes acceder desde cualquier computadora, tablet o smartphone con conexión a internet. Tus datos se sincronizan automáticamente en todos los dispositivos.'
    },
    {
      category: 'technical',
      question: '¿Qué hago si tengo problemas técnicos?',
      answer: 'Contáctanos por chat en vivo, email o teléfono. Nuestro equipo de soporte técnico está disponible de lunes a viernes de 9:00 a 18:00 hs. Para emergencias, el plan Empresarial incluye soporte prioritario 24/7.'
    }
  ];

  const supportChannels = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      description: 'soporte@conty.com - Respuesta en menos de 24 hs',
      action: 'Enviar Email',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: 'ri-book-open-line',
      title: 'Documentación',
      description: 'Guías completas y tutoriales en video',
      action: 'Ver Docs',
      color: 'from-teal-600 to-emerald-600'
    }
  ];

  const resources = [
    {
      icon: 'ri-video-line',
      title: 'Video Tutoriales',
      description: 'Aprende con videos paso a paso',
      count: '50+ videos'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Guías PDF',
      description: 'Documentación descargable',
      count: '20+ guías'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <i className="ri-customer-service-2-line text-teal-500"></i>
              <span className="text-sm font-medium text-gray-700">Estamos aquí para ayudarte</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Centro de Ayuda y Soporte
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Encuentra respuestas rápidas o contacta con nuestro equipo de expertos
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
                <input
                  type="text"
                  placeholder="Busca tu pregunta aquí..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-base shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo podemos ayudarte?
            </h2>
            <p className="text-lg text-gray-600">
              Elige el canal que prefieras para contactarnos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <i className={`${channel.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {channel.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {channel.description}
                </p>
                {channel.action === 'Ver Docs' ? (
                  <a
                    href="/documentation/Documentacion%20Usuario.pdf"
                    download
                    className="text-teal-500 font-semibold text-sm inline-flex items-center space-x-1 group-hover:space-x-2 transition-all whitespace-nowrap"
                  >
                    <span>{channel.action}</span>
                    <i className="ri-arrow-right-line"></i>
                  </a>
                ) : channel.action === 'Enviar Email' ? (
                  <a
                    href="mailto:soporte@conty.app"
                    className="text-teal-500 font-semibold text-sm inline-flex items-center space-x-1 group-hover:space-x-2 transition-all whitespace-nowrap"
                  >
                    <span>{channel.action}</span>
                    <i className="ri-arrow-right-line"></i>
                  </a>
                ) : (
                  <button className="text-teal-500 font-semibold text-sm inline-flex items-center space-x-1 group-hover:space-x-2 transition-all whitespace-nowrap">
                    <span>{channel.action}</span>
                    <i className="ri-arrow-right-line"></i>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600">
              Encuentra respuestas a las preguntas más comunes
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all inline-flex items-center space-x-2 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <i className={`${category.icon} text-base`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <i className={`ri-arrow-${openFaq === index ? 'up' : 'down'}-s-line text-xl text-teal-500 flex-shrink-0`}></i>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <i className="ri-search-line text-5xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">No se encontraron resultados para tu búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recursos de Aprendizaje
            </h2>
            <p className="text-lg text-gray-600">
              Todo lo que necesitas para dominar Conty
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className={`${resource.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {resource.description}
                </p>
                {resource.title.includes('Guías') ? (
                  <a
                    href="/documentation/Documentacion%20Usuario.pdf"
                    download
                    className="inline-flex items-center space-x-2 text-teal-500 font-semibold text-sm"
                  >
                    <span>{resource.count}</span>
                    <i className="ri-arrow-right-line"></i>
                  </a>
                ) : resource.title.includes('Video') ? (
                  <Link
                    to="/soporte/videos"
                    className="inline-flex items-center space-x-2 text-teal-500 font-semibold text-sm"
                  >
                    <span>{resource.count}</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                ) : (
                  <div className="inline-flex items-center space-x-2 text-teal-500 font-semibold text-sm">
                    <span>{resource.count}</span>
                    <i className="ri-arrow-right-line"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="ri-customer-service-2-line text-4xl text-white"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Nuestro equipo de soporte está listo para ayudarte personalmente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:soporte@conty.app" className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-xl inline-flex items-center justify-center space-x-2 whitespace-nowrap">
              <i className="ri-mail-line text-xl"></i>
              <span>Enviar Email</span>
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
