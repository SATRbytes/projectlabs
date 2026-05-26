import React from 'react';
import OrganizerLayout from './OrganizadorLayout';
import { useNavigate } from 'react-router-dom';

const OrganizerSettingsPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Configurações do organizador salvas!');
  };

  return (
    <OrganizerLayout activePage="settings">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-semibold text-[#00707D]">
          Perfil do Organizador
        </h2>

        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center space-y-6 md:w-1/3">
            <div className="relative group">
              <img
                src="https://plus.unsplash.com/premium_vector-1740818747728-fa3d0a01fcc6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                className="w-40 h-40 rounded-full border-4 border-blue-100 shadow-md object-cover"
              />
              <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">Admin PAE</h3>
              <p className="text-sm text-gray-500">organizador@pae.edu.br</p>
            </div>

            <button
              onClick={handleLogout}
              className="w-full bg-[#F94D4D] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sair da Conta
            </button>
          </div>

          <div className="md:w-2/3">
            <form className="space-y-6" onSubmit={handleSave}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome da Organização</label>
                  <input type="text" defaultValue="Coordenação de Eventos" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">CNPJ/Registro</label>
                  <input type="text" defaultValue="00.000.000/0001-00" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail para Contato</label>
                <input type="email" defaultValue="contato@pae.edu.br" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div className="pt-4">
                <button type="submit" className="bg-pae-blue-header text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-md text-sm">
                  Atualizar Perfil
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </OrganizerLayout>
  );
};

export default OrganizerSettingsPage;