import { useInView } from '../../../hooks/useInView';

const rows = [
  {
    label: 'Costo mensual',
    nube: '$35.000+',
    mercado: '$15.000+',
    conty: 'Desde $10 USD',
    contyGreen: true,
  },
  {
    label: 'Comisión por venta',
    nube: '0%',
    mercado: '5–11%',
    conty: '0%',
    contyGreen: true,
  },
  {
    label: 'POS para local físico',
    nube: false,
    mercado: false,
    conty: true,
  },
  {
    label: 'Tiempo de configuración',
    nube: '2–7 días',
    mercado: '1–3 días',
    conty: '5 minutos',
    contyGreen: true,
  },
  {
    label: 'Pedidos por WhatsApp',
    nube: 'Integración',
    mercado: 'Integración',
    conty: 'Nativo',
    contyGreen: true,
  },
  {
    label: 'Stock sincronizado con local',
    nube: false,
    mercado: false,
    conty: true,
  },
];

type CellVal = string | boolean;

function Cell({ val, green }: { val: CellVal; green?: boolean }) {
  if (val === true)
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 rounded-full">
        <i className="ri-check-line text-green-600 text-base"></i>
      </span>
    );
  if (val === false)
    return <i className="ri-close-line text-gray-300 text-xl"></i>;
  return (
    <span className={`text-sm font-medium ${green ? 'text-green-600' : 'text-gray-500'}`}>
      {val}
    </span>
  );
}

export default function TiendaOnlinePreview() {
  const topRef = useInView<HTMLDivElement>();
  const tableRef = useInView<HTMLDivElement>();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div ref={topRef} className="text-center mb-10 fade-up">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            <i className="ri-global-line"></i>
            Tienda online incluida desde el plan Básico
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Tu Tienda Online{' '}
            <span className="text-orange-500">en 5 Minutos</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Vendé por WhatsApp sin pagar comisión por venta
          </p>
        </div>

        {/* Comparison table */}
        <div ref={tableRef} className="fade-up bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider w-2/5">
                  Característica
                </th>
                <th className="text-center px-4 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Tienda Nube
                </th>
                <th className="text-center px-4 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  MercadoShops
                </th>
                <th className="text-center px-4 py-4 bg-gray-900 text-xs font-bold text-white uppercase tracking-wider rounded-t-xl">
                  Conty
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="px-6 py-4 text-sm text-gray-700">{row.label}</td>
                  <td className="text-center px-4 py-4">
                    <Cell val={row.nube} />
                  </td>
                  <td className="text-center px-4 py-4">
                    <Cell val={row.mercado} />
                  </td>
                  <td className="text-center px-4 py-4 bg-green-50">
                    <Cell val={row.conty} green={row.contyGreen} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
