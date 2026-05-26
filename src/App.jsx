import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import LoginPage from './components/Login';
import RegisterPage from './components/Cadastro';

import OrganizerCreatedEventsPage from './components/OrganizadorEventosCriados';
import OrganizerCompletedEventsPage from './components/OrganizadorEventoCompleto';
import CreateEventFormPage from './components/CriarEvento';
import AddActivityFormPage from './components/FormularioAtividades';
import ManageEventPage from './components/GerenciarEvento';
import ParticipantsListPage from './components/ListadeParticipants';
import OrganizerSettingsPage from './components/OrganizadorConfiguracoes';

import MeusEventosPage from './components/MeusEventosPage';
import EventosDisponiveisPage from './components/EventosDisponiveisPage';
import CertificadosPage from './components/PaginaCertificados';
import ValidarCertificadoPage from './components/ValidarCertificadoS';
import ParticipantSettingsPage from './components/ParticipanteConfig';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />


        <Route path="/organizador/eventos" element={<OrganizerCreatedEventsPage />} />
        <Route path="/organizador/eventos-concluidos" element={<OrganizerCompletedEventsPage />} />
        <Route path="/organizador/criar-evento" element={<CreateEventFormPage />} />
        <Route path="/organizador/evento/:id" element={<ManageEventPage />} />
        <Route path="/organizador/evento/:id/adicionar-atividade" element={<AddActivityFormPage />} />
        <Route path="/organizador/evento/:id/participantes" element={<ParticipantsListPage />} />
        <Route path="/organizador/configuracoes" element={<OrganizerSettingsPage />} />


        <Route path="/participante/eventos" element={<EventosDisponiveisPage />} />
        <Route path="/participante/meus-eventos" element={<MeusEventosPage />} />
        <Route path="/participante/certificados" element={<CertificadosPage />} />
        <Route path="/participante/validar-certificado" element={<ValidarCertificadoPage />} />
        <Route path="/participante/configuracoes" element={<ParticipantSettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;