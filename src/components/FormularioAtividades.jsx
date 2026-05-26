
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OrganizerLayout from './OrganizadorLayout';

const AddActivityFormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/organizador/evento/1');
  };

  return (
    <OrganizerLayout activePage="events" activeDropdownPage="active">
      <div className="space-y-6">

        <div className="space-y-1">
          <Link to="/organizador/eventos" className="text-xs text-gray-500 hover:text-pae-blue-header transition-colors">
            {'<'} Voltar para Eventos {'<'} <span className="font-semibold text-pae-blue-header">RogaDX 2026</span>
          </Link>
          <h2 className="text-3xl font-extrabold text-pae-text-blue">Adicionar Atividade 2026</h2>
        </div>


        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-2xl mx-auto space-y-6 relative">

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="activityName" className="block text-sm font-medium text-gray-700 mb-1">
                Nome da Atividade
              </label>
              <input
                id="activityName"
                name="activityName"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
              />
            </div>


            <div className="mb-4 relative">
              <label htmlFor="activityType" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo
              </label>
              <select id="activityType" name="activityType" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white appearance-none" required>
                <option value="" disabled selected>Selecione</option>
                <option value="palestra">Palestra</option>
                <option value="workshop">Workshop</option>
                <option value="mesa_redonda">Mesa Redonda</option>
              </select>

              <div className="absolute right-[-15px] top-[140px] bg-blue-100 border-2 border-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-gray-700 shadow z-10">
                v
              </div>
            </div>


            <div className="grid grid-cols-2 gap-4 pt-10">
              <div>
                  <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Horário de Início
                  </label>
                  <div className="relative">
                      <input id="startTime" name="startTime" type="time" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white" />
                      <span className="absolute right-3 top-2.5 text-gray-500 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </span>
                  </div>
              </div>
              <div>
                  <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Horário de Fim
                  </label>
                  <div className="relative">
                      <input id="endTime" name="endTime" type="time" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white" />
                      <span className="absolute right-3 top-2.5 text-gray-500 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </span>
                  </div>
              </div>
            </div>

            <div>
              <label htmlFor="responsible" className="block text-sm font-medium text-gray-700 mb-1">
                Responsável
              </label>
              <input
                id="responsible"
                name="responsible"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
              />
            </div>

            <button type="submit" className="w-full bg-pae-green-button text-white py-3 px-4 rounded-md font-semibold hover:bg-pae-green-hover transition text-lg">
              Adicionar Atividade
            </button>
          </form>

        </div>
      </div>
    </OrganizerLayout>
  );
};

export default AddActivityFormPage;