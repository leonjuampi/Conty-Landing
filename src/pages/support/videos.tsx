import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import { Link } from 'react-router-dom';

export default function Videos() {
  const videos = [
    {
      id: 'OEUSr-rdS6g',
      title: 'Introducción a Conty'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Import Navbar from home page's Navbar by using the same component; we want consistent header */}
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Video Tutoriales</h1>
              <p className="text-gray-600 mt-2">Cursos y guías en video para aprender a usar Conty.</p>
            </div>
            <div>
              <Link to="/soporte" className="text-teal-600 hover:underline">Volver a Soporte</Link>
            </div>
          </div>

          <div className="grid gap-8">
            {videos.map((v) => (
              <div key={v.id} className="bg-white rounded-2xl shadow overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{v.title}</h3>
                  <div className="ratio aspect-w-16 aspect-h-9">
                    <iframe
                      title={v.title}
                      src={`https://www.youtube.com/embed/${v.id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-64 sm:h-96"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
