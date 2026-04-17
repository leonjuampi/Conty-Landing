import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

const sections = [
  {
    number: '1',
    title: 'Aceptación de los Términos',
    content: `Al registrarte y utilizar la plataforma Conty (en adelante "la Plataforma", "el Servicio" o "Conty"), aceptás quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna disposición, te pedimos que no utilices el Servicio.

Razón Social: Conty Argentina
Domicilio Legal: Argentina
Fecha de vigencia: 1 de enero de 2026`,
    highlight: null,
  },
  {
    number: '2',
    title: 'Descripción del Servicio',
    content: `Conty es una plataforma de software como servicio (SaaS) que ofrece herramientas de gestión para comercios, incluyendo:

• Punto de venta (POS)
• Control de inventario y stock
• Gestión de caja y cierre
• Reportes y estadísticas
• Gestión de clientes y cuenta corriente
• Tienda online integrada (según plan)
• Facturación electrónica AFIP (según plan)`,
    highlight: null,
  },
  {
    number: '3',
    title: 'Registro y Cuenta de Usuario',
    content: `Para utilizar Conty debés registrarte proporcionando información verídica, actualizada y completa:

• Nombre completo o razón social
• Dirección de email válida
• Contraseña segura
• Información del negocio (nombre, rubro, dirección)
• CUIT/CUIL (para facturación electrónica)

Sos responsable de mantener la confidencialidad de tus credenciales y de todas las actividades realizadas desde tu cuenta.`,
    highlight: null,
  },
  {
    number: '4',
    title: 'Planes, Precios y Pagos',
    content: `Conty ofrece distintos planes de suscripción con diferentes funcionalidades y precios.`,
    subSections: [
      {
        title: '4.1 Planes Disponibles',
        content: 'Básico, Profesional y Empresarial. Los precios y funcionalidades están detallados en la página de precios de la plataforma.',
      },
      {
        title: '4.2 Facturación y Renovación',
        content: 'Las suscripciones se renuevan automáticamente al vencimiento del período contratado (mensual, trimestral o anual), salvo que canceles con al menos 24 horas de antelación.',
      },
      {
        title: '4.3 Política de Reembolsos',
        content: 'No realizamos reembolsos por períodos parciales. En caso de cancelación, el servicio seguirá activo hasta el fin del período pagado.',
      },
    ],
    highlight: 'warning',
  },
  {
    number: '5',
    title: 'Cancelación y Reembolsos',
    content: `Podés cancelar tu suscripción en cualquier momento desde el panel de administración de tu cuenta o contactando a soporte.

• La cancelación tiene efecto al final del período de facturación vigente.
• No realizamos reembolsos por períodos parcialmente utilizados.
• Los datos de tu cuenta estarán disponibles para exportación durante los 30 días posteriores a la cancelación.`,
    highlight: null,
  },
  {
    number: '6',
    title: 'Propiedad de los Datos',
    content: `Tus datos de negocio (productos, ventas, clientes, etc.) son de tu exclusiva propiedad.

• Conty actúa como procesador de datos, no como propietario.
• Podés exportar tus datos en cualquier momento en formato CSV, XLS o JSON.
• No vendemos ni compartimos tus datos comerciales con terceros.`,
    highlight: 'success',
  },
  {
    number: '7',
    title: 'Propiedad Intelectual',
    content: `La plataforma Conty, incluyendo su código fuente, diseño gráfico, logotipos, y contenido, es propiedad de Conty Argentina y está protegida por las leyes de propiedad intelectual aplicables.

No podés: copiar, modificar, distribuir, vender o sublicenciar el software; realizar ingeniería inversa; usar la marca "Conty" sin autorización expresa.`,
    highlight: null,
  },
  {
    number: '8',
    title: 'Limitación de Responsabilidad',
    content: `El Servicio se provee "tal cual" y "según disponibilidad". Conty no garantiza que el servicio sea ininterrumpido o libre de errores.

Conty no será responsable por:
• Pérdidas de datos por causa ajena a nuestra infraestructura
• Daños indirectos, incidentales o consecuentes
• Interrupciones del servicio por mantenimiento programado (notificado con 48 hs de anticipación)`,
    highlight: null,
  },
  {
    number: '9',
    title: 'Conductas Prohibidas',
    content: `Al utilizar Conty, te comprometés a no:

• Usar el servicio para actividades ilegales
• Intentar acceder sin autorización a sistemas o datos de otros usuarios
• Distribuir malware o código malicioso
• Realizar scraping o extracción masiva de datos de la plataforma
• Revender el acceso al servicio sin autorización`,
    highlight: 'danger',
  },
  {
    number: '10',
    title: 'Ley Aplicable y Jurisdicción',
    content: `Estos Términos se rigen por las leyes de la República Argentina. Cualquier disputa será sometida a la jurisdicción de los Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires, Argentina.`,
    highlight: null,
  },
  {
    number: '11',
    title: 'Modificaciones a los Términos',
    content: `Nos reservamos el derecho de modificar estos Términos en cualquier momento. Si realizamos cambios sustanciales, te lo notificaremos por email o mediante un aviso destacado en la plataforma con al menos 10 días de anticipación.`,
    highlight: null,
  },
  {
    number: '12',
    title: 'Contacto',
    content: `Para cualquier consulta sobre estos Términos y Condiciones:

Email: legal@conty.app
Horario de atención: Lunes a viernes de 9:00 a 18:00 hs (GMT-3)`,
    highlight: null,
  },
];

const highlightClasses: Record<string, string> = {
  warning: 'bg-amber-50 border-l-4 border-amber-400',
  success: 'bg-green-50 border-l-4 border-green-400',
  danger: 'bg-red-50 border-l-4 border-red-400',
};

export default function Terminos() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-4 py-1.5 mb-4">
            <i className="ri-file-text-line text-green-700 text-sm"></i>
            <span className="text-green-700 text-sm font-medium">Términos y Condiciones</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Términos y Condiciones</h1>
          <p className="text-gray-500 text-sm">
            Estos términos regulan el uso de la plataforma Conty. Al registrarte y utilizar el servicio,
            aceptás estas condiciones.
          </p>
          <p className="text-gray-400 text-xs mt-2">Última actualización: 1 de enero de 2026</p>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-200">
          <h2 className="font-bold text-gray-900 mb-4">Resumen Ejecutivo</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <div className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">Lo que hacemos</div>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2"><i className="ri-check-line text-green-500 mt-0.5"></i>Proteger tus datos con encriptación</li>
                <li className="flex items-start gap-2"><i className="ri-check-line text-green-500 mt-0.5"></i>Respetar tus derechos ARCO</li>
                <li className="flex items-start gap-2"><i className="ri-check-line text-green-500 mt-0.5"></i>Darte acceso a tus datos en todo momento</li>
                <li className="flex items-start gap-2"><i className="ri-check-line text-green-500 mt-0.5"></i>Cumplir la legislación argentina</li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Lo que NO hacemos</div>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2"><i className="ri-close-line text-red-400 mt-0.5"></i>Vender tus datos a terceros</li>
                <li className="flex items-start gap-2"><i className="ri-close-line text-red-400 mt-0.5"></i>Compartir info sin tu consentimiento</li>
                <li className="flex items-start gap-2"><i className="ri-close-line text-red-400 mt-0.5"></i>Guardar datos que no necesitamos</li>
                <li className="flex items-start gap-2"><i className="ri-close-line text-red-400 mt-0.5"></i>Tener datos más de lo necesario</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.number} className={section.highlight ? `${highlightClasses[section.highlight]} rounded-xl p-5` : ''}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {section.number}. {section.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
              {section.subSections && (
                <div className="mt-4 space-y-3">
                  {section.subSections.map((sub) => (
                    <div key={sub.title} className="bg-white rounded-lg p-4 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{sub.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{sub.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-green-800 rounded-2xl p-6 text-center text-white">
          <p className="font-medium mb-3">¿Tenés dudas sobre estos términos?</p>
          <a
            href="mailto:legal@conty.app"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-green-800 font-semibold rounded-full text-sm hover:bg-green-50 transition-colors"
          >
            <i className="ri-mail-line"></i>
            Contactar por Email
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
