
import React, { useState } from 'react';
import ParticipantLayout from './ParticipanteLayout';

const MeusEventosPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const eventos = [
    { title: 'RogaDX 2026', location: 'Maceió, Alagoas', date: '09 de Setembro, 2026 - 11 de Setembro, 2026', hours: '42 Horas', status: 'Em Breve', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&q=80' },
    { title: 'Intensivão JavaScript', location: 'Online', date: '15 de Fevereiro, 2026 - 19 de Fevereiro, 2026', hours: '8 Horas', status: 'Encerrado', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80' },
    { title: 'Workshop - IA', location: 'Online', date: '02 de Junho, 2026 - 03 de Junho, 2026', hours: '4 Horas', status: 'Encerrado', image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <ParticipantLayout activePage="meus-eventos">
      <div className="max-w-5xl space-y-6 md:space-y-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00707D]">
            Meus Eventos
          </h2>

          <div className="relative w-full md:w-auto">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full md:w-auto border border-gray-300 bg-white text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-between gap-2"
            >
              <span>Ver Todos</span>
              <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-full md:w-40 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                <ul className="py-1 text-sm text-gray-700 text-center">
                  <li className="hover:bg-gray-100 cursor-pointer py-2 border-b border-gray-100">Ver Todos</li>
                  <li className="hover:bg-gray-100 cursor-pointer py-2 border-b border-gray-100 text-blue-600">Em Andamento</li>
                  <li className="hover:bg-gray-100 cursor-pointer py-2 border-b border-gray-100 text-gray-500">Em Breve</li>
                  <li className="hover:bg-gray-100 cursor-pointer py-2 text-gray-500">Concluídos</li>
                </ul>
              </div>
            )}
          </div>
        </div>

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
              <button
                className={`w-full md:w-40 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-colors ${
                  evento.status === 'Encerrado'
                  ? 'bg-[#F94D4D] text-white hover:bg-red-700'
                  : 'border border-gray-300 text-gray-500 bg-transparent hover:bg-gray-50'
                }`}
              >
                {evento.status}
              </button>
            </div>
          ))}
        </div>
      </div>
    </ParticipantLayout>
  );
};

export default MeusEventosPage;