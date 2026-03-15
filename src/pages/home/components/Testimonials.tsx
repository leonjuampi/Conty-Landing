export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      role: 'Directora General',
      company: 'Tiendas MG',
      image: 'https://readdy.ai/api/search-image?query=Professional%20latina%20businesswoman%20in%20modern%20office%20wearing%20elegant%20business%20attire%20smiling%20confidently%20at%20camera%2C%20natural%20lighting%2C%20corporate%20portrait%20photography%20style%2C%20warm%20professional%20atmosphere&width=400&height=400&seq=testimonial-001&orientation=squarish',
      text: 'Conty transformó completamente nuestra gestión financiera. Ahora tenemos visibilidad total de nuestras 8 sucursales en tiempo real. La inversión se pagó sola en 3 meses.',
      rating: 5
    },
    {
      name: 'Carlos Ramírez',
      role: 'Gerente de Operaciones',
      company: 'Distribuidora CR',
      image: 'https://readdy.ai/api/search-image?query=Professional%20latino%20businessman%20in%20modern%20office%20wearing%20business%20casual%20attire%20smiling%20warmly%20at%20camera%2C%20natural%20daylight%2C%20corporate%20headshot%20photography%20style%2C%20confident%20professional%20atmosphere&width=400&height=400&seq=testimonial-002&orientation=squarish',
      text: 'El control de inventario es excepcional. Las alertas automáticas nos han ahorrado miles de dólares en productos agotados y sobrestock.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      role: 'Contadora',
      company: 'Comercial AM',
      image: 'https://readdy.ai/api/search-image?query=Professional%20latina%20accountant%20in%20modern%20office%20wearing%20professional%20business%20attire%20smiling%20at%20camera%2C%20bright%20office%20lighting%2C%20corporate%20portrait%20photography%20style%2C%20trustworthy%20professional%20atmosphere&width=400&height=400&seq=testimonial-003&orientation=squarish',
      text: 'La facturación automática y los reportes financieros me ahorran horas cada semana. Todo está perfectamente organizado y accesible.',
      rating: 5
    },
    {
      name: 'Roberto Silva',
      role: 'CEO',
      company: 'Grupo Silva',
      image: 'https://readdy.ai/api/search-image?query=Professional%20latino%20CEO%20executive%20in%20modern%20corporate%20office%20wearing%20elegant%20suit%20smiling%20confidently%20at%20camera%2C%20executive%20portrait%20photography%20style%2C%20sophisticated%20business%20atmosphere%20with%20city%20view%20background&width=800&height=500&seq=testimonial-004&orientation=landscape',
      text: 'Implementamos Conty en nuestras 15 sucursales y el cambio fue inmediato. Los reportes en tiempo real nos permiten tomar decisiones estratégicas con datos precisos. El equipo de soporte es excepcional y la plataforma es increíblemente intuitiva.',
      rating: 5,
      featured: true
    },
    {
      name: 'Laura Pérez',
      role: 'Propietaria',
      company: 'Boutique LP',
      image: 'https://readdy.ai/api/search-image?query=Professional%20latina%20small%20business%20owner%20in%20modern%20boutique%20store%20smiling%20warmly%20at%20camera%2C%20natural%20retail%20lighting%2C%20authentic%20business%20portrait%20photography%20style%2C%20welcoming%20entrepreneurial%20atmosphere&width=400&height=400&seq=testimonial-005&orientation=squarish',
      text: 'Como pequeña empresaria, necesitaba algo simple pero potente. Conty es perfecto.',
      rating: 5
    },
    {
      name: 'Diego Torres',
      role: 'Gerente Financiero',
      company: 'Inversiones DT',
      image: 'https://readdy.ai/api/search-image?query=Professional%20latino%20financial%20manager%20in%20modern%20office%20wearing%20business%20attire%20smiling%20professionally%20at%20camera%2C%20corporate%20lighting%2C%20business%20portrait%20photography%20style%2C%20analytical%20professional%20atmosphere&width=400&height=400&seq=testimonial-006&orientation=squarish',
      text: 'Los análisis predictivos nos ayudan a planificar mejor. Excelente herramienta.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <i className="ri-double-quotes-l text-5xl text-teal-500"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600">
            Miles de negocios confían en Conty para su gestión diaria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-teal-600">{testimonial.company}</p>
                </div>
              </div>

              <div className="mb-4">
                <i className="ri-double-quotes-l text-4xl text-teal-500 opacity-20"></i>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {testimonial.text}
              </p>

              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-xl text-amber-400"></i>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-80">
            <img
              src={testimonials[3].image}
              alt={testimonials[3].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonials[3].rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-xl text-amber-400"></i>
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-4">
                "{testimonials[3].text}"
              </p>
              <div>
                <h4 className="font-bold text-xl">{testimonials[3].name}</h4>
                <p className="text-sm text-gray-300">{testimonials[3].role} - {testimonials[3].company}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {testimonials.slice(4, 6).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-lg text-amber-400"></i>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
