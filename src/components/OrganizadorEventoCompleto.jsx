
import React from 'react';
import OrganizerLayout from './OrganizadorLayout';
import DashboardEventCard from './Eventos';

const OrganizerCompletedEventsPage = () => {

  const completedEvents = [
    { title: 'MiniDebConf 2025', location: 'Maceió, Alagoas', date: '09 de Maio, 2026 - 11 de Maio, 2026', hours: '27 Horas', editable: false },
    { title: 'Intensivão JavaScript', location: 'Online', date: '15 de Fevereiro, 2026 - 19 de Fevereiro, 2026', hours: '8 Horas', editable: false },
    { title: 'Workshop - Inteligência Artificial', location: 'Online', date: '02 de Junho, 2026 - 03 de Junho, 2026', hours: '4 Horas', editable: false },
  ];

  return (
    <OrganizerLayout activePage="events" activeDropdownPage="completed">
      <div className="space-y-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#00707D]">
          Eventos Concluídos
        </h2>

        <div className="space-y-6">
          {completedEvents.map((event, index) => (
            <DashboardEventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </OrganizerLayout>
  );
};

export default OrganizerCompletedEventsPage;