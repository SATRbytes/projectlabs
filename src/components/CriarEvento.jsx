
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrganizerLayout from './OrganizadorLayout';

const CreateEventFormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/organizador/eventos');
  };

  return (
    <OrganizerLayout activePage="create">
      <div className="max-w-7xl mx-auto flex justify-center pt-6">

        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-2xl border border-gray-100">
          <h2 className="text-3xl font-semibold text-[#00707D] mb-10">
            Criar Evento
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center">
                Nome do Evento <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="eventDesc" className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center">
                Descrição <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="eventDesc"
                name="eventDesc"
                required
                rows="4"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center">
                    Data <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center">
                    Local <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="eventLocation"
                    name="eventLocation"
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="eventHours" className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center">
                    Carga Horária <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="number"
                    id="eventHours"
                    name="eventHours"
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className="w-full bg-[#3FB65F] text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-150 shadow-md text-xl"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </OrganizerLayout>
  );
};

export default CreateEventFormPage;