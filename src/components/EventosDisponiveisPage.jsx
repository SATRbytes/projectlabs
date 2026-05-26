
import React from 'react';
import { Link } from 'react-router-dom';
import ParticipantLayout from './ParticipanteLayout';

const EventosDisponiveisPage = () => {
  const eventos = [
    { title: 'CSBC 2026', location: 'Maceió, Alagoas', date: '24 de Julho, 2026 - 27 de Julho, 2026', hours: '50 Horas', image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&w=400&q=80' },
    { title: 'Design Orientado por Dados', location: 'Online', date: '01 de Agosto, 2026 - 24 de Outubro, 2026', hours: '80 Horas', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <ParticipantLayout activePage="eventos">
      <div className="max-w-5xl space-y-6 md:space-y-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#00707D]">
          Eventos Disponíveis
        </h2>

        <div className="space-y-6">
          {eventos.map((evento, index) => (
            <div key={index} className="bg-white p-4 md:p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <img src={evento.image} alt={evento.title} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover shadow-sm" />
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#00707D] leading-tight">{evento.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {evento.location} | {evento.date} | {evento.hours}
                  </p>
                </div>
              </div>
              <Link to="/participante/meus-eventos" className="w-full md:w-auto text-center border border-gray-300 text-gray-600 px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                Inscreva-se
              </Link>
            </div>
          ))}
        </div>
      </div>
    </ParticipantLayout>
  );
};

export default EventosDisponiveisPage;