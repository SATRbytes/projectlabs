# Guia de Entrega: Front-end para Back-end

Este documento descreve como o desenvolvedor Back-end deve integrar as APIs com este protótipo React.

## 1. Estrutura de Rotas e Componentes
O projeto utiliza `react-router-dom` para navegação. As rotas estão definidas em `src/App.jsx`.

## 2. Pontos de Integração (API)

### Autenticação (`LoginPage.jsx`, `RegisterPage.jsx`)
- **Login:** Substituir o `handleSubmit` por uma chamada `POST /auth/login`. Armazenar o token JWT no `localStorage` ou `Cookies`.
- **Cadastro:** Substituir por `POST /auth/register`.

### Perfil e Configurações (`ParticipantSettingsPage.jsx`)
- **Carregamento:** Usar `useEffect` para buscar dados em `GET /user/profile`.
- **Atualização:** Enviar dados via `PUT /user/profile`.
- **Logout:** Limpar o storage e redirecionar para `/`.

### Eventos (`EventosDisponiveisPage.jsx`, `MeusEventosPage.jsx`)
- **Listagem:** Substituir os arrays estáticos por chamadas `GET /events` e `GET /user/my-events`.
- **Inscrição:** O botão "Inscreva-se" deve disparar um `POST /events/:id/register`.

### Certificados (`CertificadosPage.jsx`, `ValidarCertificadoPage.jsx`)
- **Listagem:** `GET /user/certificates`.
- **Download:** O botão deve apontar para o endpoint de stream de arquivo ou URL do S3.
- **Validação:** O campo de busca deve disparar `GET /certificates/validate/:code`.

### Organizador (`OrganizerCreatedEventsPage.jsx`, `ManageEventPage.jsx`, etc.)
- **Criação:** Formulário em `CreateEventFormPage` deve disparar `POST /events`.
- **Gestão:** `GET /events/:id` para detalhes. A página agora possui abas para Atividades, Participantes e Certificados.
- **Participantes:** `GET /events/:id/participants` para a listagem em `ParticipantsListPage.jsx`.
- **Geração de Certificados:** Disparar processo via `POST /events/:id/generate-certificates` na aba de certificados.
- **Configurações do Organizador:** `GET /organizador/profile` e `PUT /organizador/profile` em `OrganizerSettingsPage.jsx`.

## 3. Acesso ao Perfil
O acesso às configurações (tanto para participante quanto para organizador) é feito exclusivamente clicando na foto de perfil ou no nome do usuário no cabeçalho.

- **State Management:** Recomendado usar `Context API` ou `Zustand` para gerenciar o estado global do usuário (User Context).
- **HTTP Client:** Recomenda-se o uso de `Axios` com interceptors para anexar o token JWT automaticamente.
- **Loading & Errors:** Implementar estados de "carregando" nos botões e tratamento de erros (ex: usando `react-toastify`).

## 4. Estilização
O projeto utiliza **Tailwind CSS**. Para manter a consistência, evite adicionar CSS puro, priorizando as classes utilitárias já existentes no `tailwind.config.js`.
