# StudyFlow - Student Todo App

A comprehensive student productivity application built with modern web technologies. This project demonstrates spec-driven development practices for building a scalable task management system.

## 📋 Project Overview

**StudyFlow** is a student-focused todo app that helps organize tasks, track progress, and maintain focus with academic-specific features. Built for the PIAIC Hackathon.

- **Market Size**: $4.5B in 2025, growing to $8.2B by 2033
- **Target**: Students of all ages (K-12 through college + adults)
- **Differentiators**: Clean UX, calendar integration, progress visualization, offline-first (Phase 2)

## 🏗️ Project Structure

```
PIAIC_hakathon_project/
├── backend/                 # Node.js + Express API
├── frontend/                # React + TypeScript UI
├── project/
│   └── .specify/           # Spec-driven development docs
│       ├── memory/         # Constitution and plans
│       ├── specs/          # Feature specifications
│       ├── adr/            # Architectural decisions
│       └── phr/            # Prompt history records
├── todo_project/
│   └── readme.md           # Market research & analysis
├── LICENSE                 # Apache 2.0
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier)
- npm

### Setup Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev
```

Backend runs on http://localhost:5000

### Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on http://localhost:3000

### Access the App
- **Frontend**: http://localhost:3000
- **API**: http://localhost:5000/api
- **API Docs**: http://localhost:5000/api-docs

## 📚 Documentation

### Specification-Driven Development
- [Project Constitution](project/.specify/memory/constitution.md) - Core principles and MVP scope
- [Development Plan](project/.specify/memory/plan.md) - Day-by-day execution roadmap
- [Feature Specs](project/.specify/specs/) - Detailed feature requirements

### Technical Docs
- [Backend README](backend/README.md) - API documentation and setup
- [Frontend README](frontend/README.md) - UI setup and component structure
- [Market Analysis](todo_project/readme.md) - Market research and tech stack justification

## ✨ MVP Features

1. **User Authentication** - Sign up, login, logout with JWT tokens ✅
2. **Task Management** - Create, edit, delete, and complete tasks ✅
3. **Task Dashboard** - View all tasks with progress statistics ✅
4. **User Profile** - Account management and logout ✅
5. **Calendar View** - Visualize tasks on a calendar (In Progress)
6. **Progress Tracking** - Daily and weekly progress visualization (In Progress)
7. **Categories** - Organize tasks by subject/course (Coming Soon)
8. **Authentication** - User accounts with JWT-based auth ✅

## 🔄 Development Workflow

This project follows **Spec-Driven Development (SDD)**:

1. **Specification** - Every feature starts with a formal spec
2. **Planning** - Break features into actionable tasks
3. **Implementation** - Build according to spec
4. **Testing** - Verify against acceptance criteria
5. **Documentation** - Record decisions in ADRs/PHRs

### Key Documents
- **ADR** (Architectural Decision Records) - Why we chose specific tech/approaches
- **PHR** (Prompt History Records) - Every user interaction and decision
- **Specs** - Detailed feature requirements with user stories and acceptance criteria

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript (strict mode)
- **Database**: MongoDB
- **Auth**: JWT + bcrypt
- **Validation**: Joi
- **Documentation**: Swagger/OpenAPI

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Calendar**: React Big Calendar
- **Charts**: Recharts
- **Forms**: React Hook Form
- **HTTP**: Axios

## 📅 Development Timeline (MVP)

| Phase | Duration | Status | Goals |
|-------|----------|--------|-------|
| **Phase 1: Foundation** | Days 1-2 | ✅ Complete | Backend scaffolding, auth, DB schema |
| **Phase 2: Core Features** | Days 3-6 | 🔄 In Progress | Task CRUD ✅, calendar 🔄, progress 🔄, categories ⏳ |
| **Phase 3: Deploy & Polish** | Days 7-10 | ⏳ Pending | Responsive design, bug fixes, deployment, demo |

## ✅ Quality Gates

Before launch, all MVP features must meet:
- ✅ Functional and tested
- ✅ Responsive on mobile/tablet/desktop
- ✅ API fully documented (Swagger)
- ✅ TypeScript strict mode compliance
- ✅ ESLint/Prettier compliance
- ✅ No console errors
- ✅ Load time < 2 seconds
- ✅ README with setup instructions

## 🚧 Phase 2 Features (Deferred)

- LMS integration (Google Classroom, Canvas)
- Grade/GPA tracking and exam countdowns
- Pomodoro timer and focus sessions
- Gamification (streaks, badges, rewards)
- Real-time collaboration
- Advanced reminders and recurrence
- Detailed analytics and reports
- Offline-first PWA with background sync

## 📝 License

Apache 2.0 - See [LICENSE](LICENSE) for details

## 🤝 Contributing

This is a hackathon project, but contributions are welcome:

1. Create a feature branch: `git checkout -b feature/name`
2. Commit changes: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/name`
4. Open a pull request

## 📧 Contact

For questions or feedback, please open an issue or contact the team.

---

**Status**: MVP in active development  
**Last Updated**: 2026-01-04  
**Created by**: StudyFlow Team