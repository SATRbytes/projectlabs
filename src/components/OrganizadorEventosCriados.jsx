
import React from 'react';
import OrganizerLayout from './OrganizadorLayout';
import DashboardEventCard from './Eventos';

const OrganizerCreatedEventsPage = () => {

  const createdEvents = [
    { title: 'CSBC 2026', location: 'Maceió, Alagoas', date: '24 de Julho, 2026 - 27 de Julho, 2026', hours: '50 Horas', editable: true },
    { title: 'RogaDX 2026', location: 'Maceió, Alagoas', date: '09 de Setembro, 2026 - 11 de Setembro, 2026', hours: '42 Horas', editable: true },
  ];

  return (
    <OrganizerLayout activePage="events" activeDropdownPage="active">
      <div className="space-y-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#00707D]">
          Eventos Criados
        </h2>

        <div className="space-y-6">
          {createdEvents.map((event, index) => (
            <DashboardEventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </OrganizerLayout>
  );
};

export default OrganizerCreatedEventsPage;