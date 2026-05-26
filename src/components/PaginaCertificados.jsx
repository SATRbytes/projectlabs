
import React from 'react';
import ParticipantLayout from './ParticipanteLayout';

const CertificadosPage = () => {
  const certificados = [
    { title: 'Intensivão JavaScript', location: 'Online', date: '15 de Fevereiro, 2026 - 19 de Fevereiro, 2026', hours: '8 Horas', image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=400&q=80' },
    { title: 'Workshop - IA', location: 'Online', date: '02 de Junho, 2026 - 03 de Junho, 2026', hours: '4 Horas', image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=400&q=80' },
  ];

  const handleDownload = (title) => {
    alert(`Iniciando download do certificado: ${title}`);
  };

  return (
    <ParticipantLayout activePage="certificados">
      <div className="max-w-5xl space-y-6 md:space-y-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#00707D]">
          Certificados
        </h2>

        <div className="space-y-6">
          {certificados.map((cert, index) => (
            <div key={index} className="bg-white p-4 md:p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shadow-inner">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#00707D] leading-tight">{cert.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {cert.location} | {cert.date} | {cert.hours}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDownload(cert.title)}
                className="w-full md:w-auto bg-[#3FB65F] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Baixar
              </button>
            </div>
          ))}
        </div>
      </div>
    </ParticipantLayout>
  );
};

export default CertificadosPage;