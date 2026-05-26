import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrganizerLayout from './OrganizadorLayout';

const ManageEventPage = () => {
  const [activeTab, setActiveTab] = useState('activities');

  const activities = [
    { name: 'Palestra de Abertura', type: 'Palestra', startTime: '08:00', endTime: '09:00', responsible: 'Pedro Almeida' },
    { name: 'Mesa Redonda sobre Mercado de TI', type: 'Mesa Redonda', startTime: '09:15', endTime: '11:00', responsible: 'Carolina Silva' },
    { name: 'Palestra sobre IA', type: 'Palestra', startTime: '11:15', endTime: '12:15', responsible: 'Lucas Oliveira' },
  ];

  return (
    <OrganizerLayout activePage="events" activeDropdownPage="active">
      <div className="space-y-6 max-w-7xl mx-auto">


        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="space-y-1">
            <Link to="/organizador/eventos" className="text-xs text-gray-500 hover:text-pae-blue-header transition-colors flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Voltar para Eventos
            </Link>
            <h2 className="text-2xl md:text-3xl font-extrabold text-pae-text-blue">RogaDX 2026</h2>
            <p className="text-xs md:text-sm text-gray-500">Maceió, Alagoas | 24 de Julho - 27 de Julho, 2026 | 50 Horas</p>
          </div>
          <button className="bg-pae-green-button text-white px-8 py-2.5 rounded-xl font-semibold hover:bg-pae-green-hover transition shadow-md w-full md:w-auto">
            Editar Evento
          </button>
        </div>


        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
          <nav className="flex space-x-2 md:space-x-4 min-w-max">
            <button
              onClick={() => setActiveTab('activities')}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'activities' ? 'bg-[#3662A4] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Atividades
            </button>
            <button
              onClick={() => setActiveTab('participants')}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'participants' ? 'bg-[#3662A4] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Participantes
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'certificates' ? 'bg-[#3662A4] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Certificados
            </button>
          </nav>
        </div>


        <div className="space-y-6">


          {activeTab === 'activities' && (
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-extrabold text-pae-text-blue">Lista de Atividades</h3>
                <Link to="/organizador/evento/1/adicionar-atividade" className="bg-pae-green-button text-white px-5 py-2 rounded-lg text-xs font-semibold hover:bg-pae-green-hover transition flex items-center space-x-1 shadow-sm w-full sm:w-auto justify-center">
                  <span>+</span>
                  <span>Adicionar Atividade</span>
                </Link>
              </div>

              <div className="overflow-x-auto -mx-6">
                <table className="w-full text-left table-auto min-w-[600px]">
                  <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Nome</th>
                      <th className="px-6 py-4">Tipo</th>
                      <th className="px-6 py-4">Horário</th>
                      <th className="px-6 py-4">Responsável</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {activities.map((activity, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-pae-blue-header">{activity.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">{activity.type}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{activity.startTime} - {activity.endTime}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{activity.responsible}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}


          {activeTab === 'participants' && (
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 animate-in fade-in duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-pae-blue-header">125</h3>
                  <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Inscritos no Momento</p>
                </div>
                <Link
                  to="/organizador/evento/1/participantes"
                  className="bg-pae-green-button text-white px-10 py-3 rounded-xl font-bold hover:bg-pae-green-hover transition shadow-md"
                >
                  Gerenciar Participantes
                </Link>
              </div>
            </div>
          )}


          {activeTab === 'certificates' && (
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 animate-in fade-in duration-300">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div className="max-w-md">
                  <h3 className="text-2xl font-extrabold text-pae-text-blue mb-2">Geração de Certificados</h3>
                  <p className="text-sm text-gray-500">Libere os certificados para todos os participantes que atingiram a presença mínima.</p>
                </div>
                <button
                  onClick={() => alert('Certificados gerados com sucesso!')}
                  className="bg-pae-green-button text-white px-10 py-4 rounded-xl font-bold hover:bg-pae-green-hover transition shadow-md"
                >
                  Liberar Certificados
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </OrganizerLayout>
  );
};

export default ManageEventPage;