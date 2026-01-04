# StudyFlow Constitution: Student Todo App

## Project Identity
- **Name**: StudyFlow (Student Todo App)
- **Type**: Hackathon Project (PIAIC)
- **Repository**: masoomtariq/PIAIC_hakathon_project
- **License**: Apache 2.0
- **Timeline**: 10-day sprint (Hackathon)
- **Team Size**: 1-3 developers

## Vision
A lightweight, intuitive student productivity app that helps students organize tasks, track progress, and maintain focus—with clean UX and productivity features that differentiate it from generic todo-apps.

## Core Principles

### I. Specification-First Development
Every feature begins with a formal specification document including user stories, acceptance criteria, technical requirements, and API contracts before any code is written.

### II. Rapid MVP Iteration
Focus ruthlessly on 5 core MVP features; defer advanced integrations (LMS, gamification, advanced analytics) to Phase 2. Ship fast and iterate based on user feedback.

### III. User-Centric Design
Prioritize intuitive UX, fast load times (<2s), and accessibility for all ages. Clean interface; minimize cognitive load; keyboard + mouse + touch support.

### IV. Type-Safe & Tested Code
TypeScript in strict mode for both frontend and backend. Aim for >70% test coverage on utilities and API endpoints. All changes verified before merge to main.

### V. Spec-Driven Documentation
Every decision documented: Prompt History Records (PHR) for user interactions, Architectural Decision Records (ADR) for system choices. Code review references specs.

## MVP Scope (5 Core Features)

1. **Task Management (CRUD)**: Create, read, update, delete tasks with title, description, due date, priority, category
2. **Calendar View**: Visual calendar with day/week/month views, drag-and-drop rescheduling, color-coded by category
3. **Progress Tracking**: Daily progress bar, today's task list, weekly completion chart
4. **Categories & Filtering**: Organize by subject/course; filter by priority, category, due date, completion
5. **User Auth & Persistence**: Email/password auth, JWT sessions, cloud task sync per user

**Estimated Effort**: 10-11 developer-days (achievable in 1-2 weeks with 2-3 developers)

## Deferred Features (Phase 2+)
- LMS integration (Google Classroom, Canvas auto-sync)
- Grade/GPA tracking and exam countdowns
- Pomodoro timer and focus sessions
- Gamification (streaks, badges, rewards)
- Real-time collaboration
- Advanced reminders and recurrence
- Detailed analytics and reports
- Offline-first PWA with background sync

## Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI / Radix UI
- **Calendar**: React Big Calendar
- **Charts**: Recharts
- **State**: Redux Toolkit
- **Build**: Vite
- **Package Manager**: npm

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js + TypeScript
- **Database**: MongoDB (Atlas free tier)
- **Auth**: JWT + bcrypt
- **Validation**: Joi
- **Testing**: Jest
- **API Docs**: Swagger/OpenAPI

### DevOps
- **VCS**: Git/GitHub
- **CI/CD**: GitHub Actions (lint, test on PR)
- **Hosting**: Render.com or Railway (free tier)
- **DB Hosting**: MongoDB Atlas (free tier)

## Development Workflow

### Phase 1: Foundation (Days 1-2)
- Project setup (frontend + backend repo structure)
- Database schema (Users, Tasks, Categories)
- Auth endpoints (signup, login, token verify)
- Basic task CRUD API

### Phase 2: Core Features (Days 3-6)
- Task filtering and category endpoints
- Frontend: Task dashboard, task form, calendar view
- Frontend: Progress bar and stats display
- Database: Progress tracking queries

### Phase 3: Polish & Deploy (Days 7-10)
- Responsive design (mobile/tablet/desktop)
- Error handling and user feedback
- Performance optimization
- Deploy to production
- Documentation and demo

## Quality Gates (Before Launch)
- ✅ All MVP features functional and tested
- ✅ Backend API fully documented (Swagger)
- ✅ Frontend responsive on all devices
- ✅ No console errors; accessibility basics met
- ✅ TypeScript strict mode; ESLint compliance
- ✅ README with setup and demo instructions
- ✅ Load time <2s; task creation <10s

## Key Constraints & Decisions

1. **No LMS in MVP**: Deferred to Phase 2; focus on core UX for hackathon
2. **MongoDB Chosen**: Flexible schema iteration faster than PostgreSQL for hackathon pace
3. **Single Frontend Repo**: Simpler deployment; monorepo considered for Phase 2
4. **Offline Support Phase 2**: PWA service workers added post-launch
5. **YAGNI Principle**: Build only what's required for MVP; no premature optimization

## Monetization
- **Phase 1**: Free-to-use, no monetization
- **Phase 2**: Consider freemium model if pursuing as product (Premium: advanced analytics, integrations, priority support)

## Success Metrics
- App deployed and demoed within hackathon timeline
- All MVP features working without critical bugs
- Clean, maintainable, well-documented codebase
- Users can onboard and create tasks in <2 minutes
- Positive feedback from demo evaluators

## Governance
This constitution supersedes all other practices. Amendments require documentation in an ADR, stakeholder approval, and a migration plan before implementation.

---

**Document Version**: 1.0  
**Created**: 2026-01-04  
**Status**: Active
