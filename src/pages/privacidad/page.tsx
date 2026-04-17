import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

const sections = [
  {
    number: '1',
    title: 'Responsable del Tratamiento de Datos',
    content: `Razón Social: Conty Argentina
Domicilio Legal: Argentina
Email de contacto: privacidad@conty.app
Teléfono: +54 11 0000-0000
Esta Política de Privacidad se rige por la Ley 25.326 de Protección de Datos Personales de Argentina y sus normas reglamentarias.`,
  },
  {
    number: '2',
    title: 'Información que Recopilamos',
    content: `2.1 Datos Personales
• Información de cuenta: Nombre, email, número de teléfono, contraseña encriptada
• Información del negocio: Nombre comercial, rubro, dirección, CUIT/CUIL
• Datos de facturación: Información de pago procesada a través de StripePago, etc.)

2.2 Datos de Uso y Técnicos
• Actividad en el sistema: Número de ventas, productos más vendidos, reportes generados, funcionalidades utilizadas
• Datos técnicos: Dirección IP, tipo de navegador, sistema operativo, dispositivos utilizados, cookies y tecnologías similares

2.3 Cookies y Tecnologías de Rastreo
Utilizamos las siguientes tecnologías:
• Google Analytics: Para análisis de tráfico web y comportamiento de usuarios
• Google Tag Manager: Para gestión de etiquetas de marketing
• Facebook Pixel: Para remarketing y medición de conversiones publicitarias
• Cookies esenciales: Para mantener tu sesión activa y recordar tus preferencias`,
  },
  {
    number: '3',
    title: 'Uso de la Información',
    content: `Utilizamos tus datos personales para:

• Provisión del servicio: Gestionar tu cuenta, procesar ventas, generar reportes, sincronizar datos entre dispositivos
• Soporte técnico: Responder consultas, resolver problemas técnicos, brindar asistencia por email, WhatsApp o chat
• Mejora del producto: Analizar el uso de las funcionalidades para optimizar las plataformas
• Comunicaciones: Enviarte notificaciones importantes sobre el servicio, actualizaciones, cambios en precios o políticas
• Marketing (con tu consentimiento): Enviarte novedades, promociones, newsletters. Podés darte de baja en cualquier momento
• Seguridad: Prevenir fraudes, detectar actividades sospechosas, proteger la integridad de la plataforma
• Cumplimiento legal: Atender requerimientos judiciales o requerimientos de autoridades competentes`,
  },
  {
    number: '4',
    title: 'Compartir Información con Terceros',
    content: `Conty NO vende tus datos personales. Solo compartimos información en los siguientes casos:

4.1 Proveedores de Servicios (Procesadores de Datos)
• Vercel: Hosting y almacenamiento en la nube (Estados Unidos)
• Firebase/Google Cloud: Base de datos en tiempo real y autenticación
• Cloudinary: Almacenamiento de imágenes
• StripePago: Procesamiento de pagos (tu información de tarjetas no se almacena en nuestros servidores)
• Google Analytics y Facebook: Análisis y publicidad

4.2 Transferencias Internacionales
Algunos proveedores están ubicados fuera de Argentina (Estados Unidos, Unión Europea). Esto se realiza bajo contratos que garantizan un nivel de protección conforme a los artículos 12 y 25.326 y normas internacionales (cláusulas contractuales estándar, Privacy Shield, etc.)

4.3 Requerimientos Legales
Podemos divulgar información cuando sea requerido por ley, orden judicial, o para proteger nuestros derechos legales, prevenir fraudes o garantizar la seguridad de nuestros usuarios.`,
  },
  {
    number: '5',
    title: 'Seguridad de los Datos',
    content: `Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tus datos personales:

• Encriptación: Conexión HTTPS/TLS en toda la plataforma. Contraseñas hasheadas con bcrypt
• Autenticación: Verificación en dos pasos disponible mediante email y contraseña (opción de MFA disponible)
• Acceso restringido: Solo personal autorizado tiene acceso a datos sensibles, bajo acuerdos de confidencialidad
• Monitoreo: Log de seguridad automatizado, detección de intentos de acceso inusuales
• Backups: Copias de seguridad automáticas diarias. Retención de 30 días

Nota importante: Ningún sistema es 100% seguro. Si toman todas las precauciones posibles pero detectamos una brecha de seguridad, notificaremos a los usuarios afectados conforme a la legislación vigente.`,
  },
  {
    number: '6',
    title: 'Tus Derechos (Derechos ARCO)',
    content: `Conforme a la Ley 25.326, tenés los siguientes derechos sobre tus datos personales:

Derecho de Acceso: Podés solicitar una copia de todos los datos personales que tenemos sobre vos en formato legible.

Derecho de Rectificación: Podés solicitar la corrección de datos inexactos o desactualizados.

Derecho de Cancelación/Supresión: Podés solicitar la eliminación de tus datos personales cuando ya no sean necesarios para la finalidad por la que fueron recopilados. Excepciones: obligaciones legales (registro de ventas para AFIP).

Derecho de Oposición: Podés oponerte al tratamiento de tus datos personales con fines de marketing directo.

Para ejercer tus derechos, enviá un email a privacidad@conty.app detallando tu solicitud. Responderemos en un plazo máximo de 10 días hábiles.

Reclamo ante la Autoridad de Control: Si considerás que el tratamiento no es correcto, podés presentar un reclamo ante la Agencia de Acceso a la Información Pública (AAIP).`,
  },
  {
    number: '7',
    title: 'Retención de Datos',
    content: `Conservamos tus datos personales durante el tiempo necesario para cumplir con las finalidades descritas en esta política:

• Cuenta activa: Mientras uses el servicio
• Datos de facturación: 10 años (conforme a obligaciones legales contables en Argentina)
• Datos de actividad: 2 años desde la última interacción
• Logs técnicos: 6 meses (seguridad y diagnóstico de incidentes)

Cuando eliminás tu cuenta, tus datos se anonimizarán en un plazo de 30 días, salvo aquellos que debamos conservar por obligaciones legales.`,
  },
  {
    number: '8',
    title: 'Menores de Edad',
    content: `Conty no está dirigido a menores de 18 años. No recopilamos conscientemente datos de menores de edad. Si sos padre o tutor y creés que tu hijo nos proporcionó información personal, contactanos a privacidad@conty.app para que podamos eliminar esa información inmediatamente.`,
  },
  {
    number: '9',
    title: 'Cambios a esta Política',
    content: `Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Notificaremos los cambios mediante un aviso destacado en la plataforma con al menos 10 días de anticipación.

Si realizamos cambios sustanciales que afecten el uso de tus datos, te lo notificaremos por email y/o mediante un aviso destacado en la plataforma.

Fecha de última actualización: 30 de noviembre de 2025`,
  },
  {
    number: '10',
    title: 'Contacto',
    content: `Para cualquier consulta relacionada con esta Política de Privacidad o el tratamiento de tus datos:

Email: privacidad@conty.app
WhatsApp: +54 11 0000-0000
Horario de atención: Lunes a viernes de 9:00 a 18:00 hs (GMT-3)`,
  },
];

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-4 py-1.5 mb-4">
            <i className="ri-shield-check-line text-green-700 text-sm"></i>
            <span className="text-green-700 text-sm font-medium">Política de Privacidad</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Política de Privacidad</h1>
          <p className="text-gray-500 text-sm">
            En Conty protegemos tu privacidad conforme a la Ley 25.326 de Protección de Datos Personales de Argentina.
            Esta política explica cómo recopilamos, utilizamos y protegemos tu información.
          </p>
          <p className="text-gray-400 text-xs mt-2">Última actualización: 30 de noviembre de 2025</p>
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
            <div key={section.number}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {section.number}. {section.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-green-800 rounded-2xl p-6 text-center text-white">
          <p className="font-medium mb-3">¿Tenés dudas sobre tu privacidad?</p>
          <a
            href="mailto:privacidad@conty.app"
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
