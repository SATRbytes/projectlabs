
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import capLogo from '../assets/cap.png';


const IconCap = () => <img src={capLogo} alt="Logo" className="w-8 h-8 mr-3 brightness-0 invert" />;
const IconPlus = () => <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;
const IconCalendar = () => <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const IconChevronDown = () => <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;

const OrganizerLayout = ({ children, activePage, activeDropdownPage }) => {
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(activeDropdownPage ? true : false);

  const sidebarLinks = [
    { id: 'create', label: 'Criar Eventos', icon: IconPlus, link: '/organizador/criar-evento' },
    { id: 'events', label: 'Eventos', icon: IconCalendar, dropdown: [
        { id: 'active', label: 'Eventos Ocorrendo', link: '/organizador/eventos' },
        { id: 'completed', label: 'Eventos Concluídos', link: '/organizador/eventos-concluidos' }
      ]
    },
  ];

  const getSidebarItemClass = (id) => {
    return activePage === id
      ? "flex items-center px-6 py-3 bg-white/10 text-white font-medium"
      : "flex items-center px-6 py-3 hover:bg-white/10 text-white/90";
  };

  const getDropdownItemClass = (id) => {
    return activeDropdownPage === id
      ? "block px-12 py-2 text-sm bg-white/20 text-white font-medium"
      : "block px-12 py-2 text-sm text-white/90 hover:bg-white/10";
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-gray-800">

      <header className="bg-[#3662A4] text-white p-4 flex items-center justify-between shadow-md px-4 md:px-6 z-20">
        <Link to="/" className="flex items-center text-white shrink-0">
          <IconCap />
          <h1 className="text-xl font-medium hidden sm:block">Plataforma Acadêmica de Eventos (PAE)</h1>
          <h1 className="text-lg font-medium sm:hidden">PAE</h1>
        </Link>
        <div className="flex items-center space-x-2 text-white/90">
          <Link to="/organizador/configuracoes" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold border-2 border-white/50 overflow-hidden hover:opacity-80 transition-opacity">
            <img src="https://plus.unsplash.com/premium_vector-1740818747728-fa3d0a01fcc6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Organizer" />
          </Link>
          <Link to="/organizador/configuracoes" className="flex items-center text-xs md:text-sm font-medium hover:text-white transition-colors">
            <span className="hidden xs:inline">Organizador</span> <IconChevronDown />
          </Link>
        </div>
      </header>

      <div className="flex flex-grow overflow-hidden flex-col md:flex-row">

        <aside className="w-full md:w-64 bg-[#3662A4] text-white flex flex-col md:pt-10 shadow-inner z-10 overflow-x-auto md:overflow-y-auto">
          <nav className="flex md:flex-col space-x-1 md:space-x-0 md:space-y-1 p-2 md:p-0">
            {sidebarLinks.map(item => (
              item.dropdown ? (
                <div key={item.id} className="relative group flex-shrink-0 md:flex-shrink-1">
                  <button
                    onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
                    className="flex w-full items-center justify-between px-4 md:px-6 py-3 hover:bg-white/10 text-white/90"
                  >
                    <div className="flex items-center whitespace-nowrap">
                        <item.icon /> <span className="text-xs md:text-sm">{item.label}</span>
                    </div>
                    <IconChevronDown />
                  </button>
                  {eventsDropdownOpen && (
                    <div className="bg-[#3053C3] md:static absolute left-0 top-full w-full z-30 shadow-lg md:shadow-none">
                      {item.dropdown.map(subItem => (
                        <Link key={subItem.id} to={subItem.link} className={getDropdownItemClass(subItem.id)}>
                          <span className="text-xs md:text-sm">{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.id} to={item.link} className={`${getSidebarItemClass(item.id)} whitespace-nowrap md:whitespace-normal flex-shrink-0`}>
                  <item.icon /> <span className="text-xs md:text-sm">{item.label}</span>
                </Link>
              )
            ))}
          </nav>
        </aside>


        <main className="flex-grow bg-slate-50 p-4 md:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default OrganizerLayout;