import { useInView } from '../../../hooks/useInView';

export default function AFIPPreview() {
  const leftRef = useInView<HTMLDivElement>();
  const rightRef = useInView<HTMLDivElement>();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div ref={leftRef} className="fade-up">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              <i className="ri-flashlight-line"></i>
              Módulo de Facturación
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
              Facturá en AFIP en{' '}
              <span className="text-green-600">1 click</span>
            </h2>

            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Sincronizá tu facturación electrónica con el punto de venta.{' '}
              <strong className="text-gray-700">Sin entrar a la web de AFIP, sin errores.</strong>
            </p>

            {/* Comparison boxes */}
            <div className="grid sm:grid-cols-2 gap-4 mb-7">
              {/* Manual */}
              <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <i className="ri-close-line text-red-500 text-xs"></i>
                  </span>
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wide">Método manual</span>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li>• 10 pasos por cada factura</li>
                  <li>• Carga de datos manual</li>
                  <li>• Riesgo de errores de CUIT</li>
                  <li>• Perdés tiempo en cada venta</li>
                </ul>
              </div>

              {/* Con Conty */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-green-600 text-xs"></i>
                  </span>
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Con Conty</span>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li>• Emisión instantánea en 1 click</li>
                  <li>• Validación automática con AFIP</li>
                  <li>• Envío por email automático</li>
                  <li>• Facturas A, B y C incluidas</li>
                </ul>
              </div>
            </div>

            {/* Bottom dark badge */}
            <div className="flex items-center gap-4 bg-gray-900 rounded-xl px-5 py-4">
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-file-text-line text-white text-lg"></i>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Facturación A, B y C ilimitada</div>
                <div className="text-gray-400 text-xs mt-0.5">Disponible desde Plan Pro · Homologado por AFIP/ARCA</div>
              </div>
            </div>
          </div>

          {/* Right — stats */}
          <div ref={rightRef} className="fade-up grid grid-cols-2 gap-4">
            {[
              { icon: 'ri-flashlight-line', value: '1 click', label: 'Para emitir cada factura', color: 'bg-green-50 text-green-700' },
              { icon: 'ri-shield-check-line', value: '100%', label: 'Homologado por AFIP/ARCA', color: 'bg-blue-50 text-blue-700' },
              { icon: 'ri-file-text-line', value: 'A, B y C', label: 'Tipos de factura soportados', color: 'bg-orange-50 text-orange-600' },
              { icon: 'ri-mail-send-line', value: 'Auto', label: 'Envío por email al cliente', color: 'bg-purple-50 text-purple-700' },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <i className={`${stat.icon} text-lg`}></i>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
