import { useState } from 'react';
import { useInView } from '../../../hooks/useInView';

const faqs = [
  {
    question: '¿Cuánto cuesta? ¿Hay plan gratuito?',
    answer: 'Conty tiene planes desde $10/mes en USD o $10.000/mes en ARS. Además podés probar el plan Profesional gratis por 14 días sin necesidad de tarjeta de crédito.',
  },
  {
    question: '¿Cómo funciona la tienda online?',
    answer: 'Con el plan Básico en adelante podés publicar tu catálogo en una tienda online integrada. Tus clientes pueden ver los productos y pedirlos por WhatsApp. El stock se sincroniza automáticamente.',
  },
  {
    question: '¿Se sincroniza el stock entre tienda física y online?',
    answer: 'Sí, cada venta descuenta el stock en tiempo real tanto en el punto de venta físico como en la tienda online.',
  },
  {
    question: '¿Necesito internet todo el tiempo?',
    answer: 'El sistema funciona en la nube, por lo que necesitás conexión a internet para operar. Te recomendamos tener una conexión estable para evitar interrupciones.',
  },
  {
    question: '¿Funciona con cualquier scanner de código de barras?',
    answer: 'Sí, Conty es compatible con cualquier scanner USB o Bluetooth estándar. También soporta balanzas electrónicas Kretz en el plan Profesional.',
  },
  {
    question: '¿Puedo cargar productos masivamente?',
    answer: 'Sí, podés importar tu catálogo de productos desde un archivo Excel o CSV en todos los planes.',
  },
  {
    question: '¿Puedo tener varios usuarios y sucursales?',
    answer: 'En el plan Profesional podés tener hasta 10 usuarios y 5 sucursales. En el plan Empresarial no hay límite.',
  },
  {
    question: '¿Cómo funciona el soporte?',
    answer: 'En el plan Básico el soporte es por email. En Profesional tenés acceso a soporte por WhatsApp con respuesta prioritaria. En Empresarial el soporte es 24/7 con onboarding dedicado.',
  },
  {
    question: '¿Puedo cancelar cuando quiero?',
    answer: 'Sí, Conty no tiene contratos de permanencia. Podés cancelar tu suscripción en cualquier momento desde tu panel de administración.',
  },
  {
    question: '¿Para qué tipo de negocio es ideal?',
    answer: 'Conty está diseñado para almacenes, kioscos, rotiserías, locales de ropa, gastronómica y todo tipo de comercio minorista argentino.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleRef = useInView<HTMLDivElement>();
  const listRef = useInView<HTMLDivElement>();

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-12 fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Preguntas frecuentes</h2>
          <p className="text-gray-500">Todo lo que querías saber sobre Conty</p>
        </div>

        <div ref={listRef} className="space-y-2 fade-up">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-base pr-4">{faq.question}</span>
                <i className={`ri-arrow-down-s-line text-xl text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
