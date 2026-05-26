import React from 'react';
import { Link } from 'react-router-dom';
import OrganizerLayout from './OrganizadorLayout';

const ParticipantsListPage = () => {
  const participants = [
    { name: 'João Silva', email: 'joao.silva@email.com', institution: 'UFAL', status: 'Confirmado' },
    { name: 'Maria Santos', email: 'maria.santos@email.com', institution: 'UFAL', status: 'Confirmado' },
    { name: 'Pedro Costa', email: 'pedro.costa@email.com', institution: 'UNIT', status: 'Pendente' },
    { name: 'Ana Oliveira', email: 'ana.oliveira@email.com', institution: 'IFAL', status: 'Confirmado' },
    { name: 'Lucas Souza', email: 'lucas.souza@email.com', institution: 'UFAL', status: 'Confirmado' },
  ];

  return (
    <OrganizerLayout activePage="events" activeDropdownPage="active">
      <div className="space-y-6 max-w-7xl mx-auto">


        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="space-y-1">
            <Link to="/organizador/evento/1" className="text-xs text-gray-500 hover:text-pae-blue-header transition-colors flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Voltar para RogaDX 2026
            </Link>
            <h2 className="text-2xl md:text-3xl font-extrabold text-pae-text-blue">Participantes</h2>
            <p className="text-xs md:text-sm text-gray-500">Gerencie a lista de inscritos e presenças do evento.</p>
          </div>
          <div className="flex gap-2">
             <button className="bg-pae-blue-header text-white px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition shadow-md text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" /></svg>
                Exportar CSV
             </button>
          </div>
        </div>


        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-6">
           <div className="flex items-center justify-between">
              <div className="relative w-full max-w-md">
                 <input
                    type="text"
                    placeholder="Buscar participante..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                 />
                 <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
           </div>

           <div className="overflow-x-auto -mx-6">
                <table className="w-full text-left table-auto min-w-[700px]">
                  <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Nome</th>
                      <th className="px-6 py-4">E-mail</th>
                      <th className="px-6 py-4">Instituição</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-center">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {participants.map((participant, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-pae-blue-header">{participant.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{participant.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{participant.institution}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${participant.status === 'Confirmado' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}`}>
                            {participant.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                           <button className="text-red-500 hover:text-red-700 transition-colors">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                           </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
        </div>
      </div>
    </OrganizerLayout>
  );
};

export default ParticipantsListPage;