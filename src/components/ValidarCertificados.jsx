
import React, { useState } from 'react';
import ParticipantLayout from './ParticipanteLayout';

const ValidarCertificadoPage = () => {
  const [codigo, setCodigo] = useState('');
  const [statusValidacao, setStatusValidacao] = useState(null);

  const handleValidar = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (codigo === '123') setStatusValidacao('valido');
      else if (codigo) setStatusValidacao('invalido');
    }
  };

  return (
    <ParticipantLayout activePage="validar-certificado">
      <div className="max-w-4xl space-y-6 md:space-y-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#00707D]">
          Validar Certificados
        </h2>

        <div className="space-y-4">
          <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">
            Inserir código do certificado
          </label>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              id="codigo"
              placeholder="Ex: 123-ABC-XYZ"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              onKeyDown={handleValidar}
              className="w-full max-w-md px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
            />
            <button
              onClick={handleValidar}
              className="bg-[#3662A4] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md md:w-auto w-full"
            >
              Validar
            </button>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row gap-8 pt-8 items-center sm:items-start">

          {statusValidacao === 'valido' && (
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center w-full sm:w-64 h-64 text-center transform animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#28A745] text-white rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4 font-bold shadow-md">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#00707D]">Certificado<br/>Válido</h3>
              <p className="text-xs text-gray-500 mt-2">Emitido para: João Silva</p>
            </div>
          )}


          {statusValidacao === 'invalido' && (
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center w-full sm:w-64 h-64 text-center transform animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#DC3545] text-white rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4 font-bold shadow-md">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#00707D]">Certificado<br/>Inválido</h3>
              <p className="text-xs text-gray-500 mt-2">Código não encontrado</p>
            </div>
          )}
        </div>
      </div>
    </ParticipantLayout>
  );
};

export default ValidarCertificadoPage;