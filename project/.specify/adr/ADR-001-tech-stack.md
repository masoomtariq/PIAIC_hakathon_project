# ADR-001: Tech Stack Selection for StudyFlow MVP

**Date**: 2026-01-04  
**Status**: Accepted  
**Decided By**: StudyFlow Team  
**Stakeholders**: Hackathon Judges, User Base

---

## Context

StudyFlow requires a modern, scalable tech stack that allows rapid MVP development while maintaining code quality and scalability. The team must balance:
- **Development Speed** - Hackathon timeline (10 days)
- **Code Quality** - TypeScript strict mode, testability
- **Scalability** - Support future Phase 2 features
- **User Experience** - Responsive, fast loading
- **Cost** - Free or low-cost hosting options
- **Team Familiarity** - Technologies the team knows well

---

## Decision

We chose a **MEVN-like stack** (MongoDB, Express, Vue-equivalent React, Node) with the following specific choices:

### Backend
- **Runtime**: Node.js + Express.js
- **Language**: TypeScript (strict mode)
- **Database**: MongoDB (Atlas)
- **Auth**: JWT + bcryptjs

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios

### Infrastructure
- **Hosting**: Render.com (backend), Vercel (frontend)
- **Database Hosting**: MongoDB Atlas
- **CI/CD**: GitHub Actions

---

## Rationale

### Backend Choices

#### ✅ Node.js + Express (NOT Python Django)
**Why**:
- Rapid prototyping with minimal boilerplate
- Single language across stack (JavaScript/TypeScript)
- Mature ecosystem with npm packages
- Excellent for real-time features (WebSockets with Socket.io)
- Team familiarity and abundant resources

**Alternatives Considered**:
- Python + Django REST: More heavyweight, slower iteration for hackathon
- Go + Gin: Great for performance but steeper learning curve
- Java + Spring: Enterprise-grade but overkill for MVP

#### ✅ MongoDB (NOT PostgreSQL)
**Why**:
- Flexible schema for rapid iteration (we might change Task structure)
- Free Atlas tier sufficient for hackathon
- JSON-like documents match JavaScript objects naturally
- Less schema planning overhead—can focus on features
- Excellent for prototyping unknown requirements

**Alternatives Considered**:
- PostgreSQL: Stronger relational model but requires more upfront schema design
- Firebase Firestore: Simpler auth but vendor lock-in and cost concerns

#### ✅ TypeScript Strict Mode
**Why**:
- Catches bugs at compile-time, not runtime
- Better IDE support and autocomplete
- Enforces type safety for maintainability
- Protects against common JavaScript pitfalls
- Matches project constitutional principle: "Type-Safe & Tested Code"

**Trade-off**: Small learning curve for team unfamiliar with TypeScript, but ROI is high.

#### ✅ JWT Authentication
**Why**:
- Stateless (no session database needed)
- Scalable across multiple servers
- Works well with frontend JavaScript
- Industry standard for APIs

**Alternatives Considered**:
- Session-based (Django-like): Requires server-side storage, less scalable
- OAuth2 (Google, GitHub): Adds complexity; JWT sufficient for MVP

### Frontend Choices

#### ✅ React 18 + TypeScript
**Why**:
- Most popular UI library (huge ecosystem)
- Component-based architecture matches task/calendar decomposition
- Strict TypeScript prevents runtime errors
- Team familiarity and abundant tutorials
- Excellent tooling (React DevTools, ESLint plugins)

**Alternatives Considered**:
- Vue.js: Simpler learning curve but smaller ecosystem
- Svelte: Innovative but less mature; fewer third-party libs for calendar/charts
- Angular: Heavyweight, slow iteration for hackathon

#### ✅ Vite (NOT Create React App or Webpack)
**Why**:
- **Fast builds**: Dev server starts in <100ms (vs CRA's 5+ seconds)
- **ES modules native**: Faster HMR (hot module reload)
- **Modern tooling**: Designed for modern browsers
- **Smaller config**: Less boilerplate than Webpack

**Trade-off**: Less mature than CRA but production-ready and widely adopted.

#### ✅ Redux Toolkit (NOT Context API)
**Why**:
- Complex state (auth, tasks, filters, UI state) needs centralized management
- Redux DevTools for debugging
- Established patterns and middleware ecosystem
- Scales better than Context API with large component tree
- Team familiarity

**Alternatives Considered**:
- Context API + useReducer: Simpler but prop-drilling issues as app grows
- Zustand: Lightweight but less tooling/documentation
- Recoil: Experimental, smaller community

#### ✅ Tailwind CSS (NOT Bootstrap/Material-UI)
**Why**:
- Utility-first approach = faster UI development
- Highly customizable without CSS overrides
- Smaller bundle size with tree-shaking
- Modern, responsive by default
- No "Bootstrap look" complaint

**Alternatives Considered**:
- Bootstrap: Larger bundle, predefined components feel generic
- Material-UI: Opinionated design system; can conflict with clean aesthetic goal
- CSS-in-JS (styled-components): Runtime overhead; not necessary for this project

#### ✅ React Big Calendar (NOT custom calendar)
**Why**:
- Battle-tested, feature-rich calendar component
- Supports drag-and-drop (react-beautiful-dnd compatible)
- Multiple view modes (month/week/day)
- Significantly faster than building custom

**Alternatives Considered**:
- FullCalendar: More powerful but commercial licensing considerations
- Custom calendar: Weeks of development for marginal benefit

### Infrastructure Choices

#### ✅ Render.com (Backend) + Vercel (Frontend)
**Why**:
- **Free tier**: Sufficient for hackathon + post-hackathon traffic
- **Easy deployment**: Push-to-deploy from GitHub
- **Built-in HTTPS**: Security out-of-box
- **Global CDN** (Vercel): Fast frontend delivery
- **Environment variables**: Simplified secrets management
- **No credit card required** (free tier): Perfect for students

**Alternatives Considered**:
- AWS / GCP / Azure: Powerful but steep learning curve; free tiers are limited
- Heroku: Simple but discontinued free tier (cost-prohibitive)
- DigitalOcean: Great but requires more DevOps knowledge

#### ✅ MongoDB Atlas (Database)
**Why**:
- **Free tier**: 512 MB storage (enough for demo + testing)
- **Managed**: No server maintenance
- **Global**: Good latency from anywhere
- **Backups**: Automated backups in free tier

---

## Consequences

### Positive
- ✅ **Fast iteration**: React, Vite, and MongoDB allow rapid feature development
- ✅ **Unified language**: JavaScript/TypeScript across frontend and backend
- ✅ **Type safety**: Strict TypeScript prevents entire categories of bugs
- ✅ **Scalable**: Stack supports Phase 2 features (real-time with Socket.io, advanced analytics)
- ✅ **Cost**: Free or very cheap hosting for hackathon and beyond
- ✅ **Team productivity**: All team members know the stack
- ✅ **Documentation**: Excellent resources for all technologies

### Risks & Mitigations
- **Risk**: MongoDB's flexible schema could lead to data inconsistencies
  - **Mitigation**: Enforce validation at API layer with Joi; document schema expectations
- **Risk**: Redux Toolkit has learning curve
  - **Mitigation**: Team already familiar; documentation clear
- **Risk**: Vite is newer than CRA
  - **Mitigation**: Vite now widely used; migration path to traditional tools exists if needed
- **Risk**: Tailwind CSS file size grows with custom classes
  - **Mitigation**: Purge unused CSS in production build; monitor bundle size

---

## Alternatives Rejected

| Option | Why Rejected |
|--------|-------------|
| Python + Django | Slower iteration; more boilerplate |
| Go + Gin | Steeper learning curve; overkill for MVP |
| GraphQL | Adds complexity; REST sufficient for MVP |
| Socket.io (Real-time) | Deferred to Phase 2; polling sufficient for MVP |
| Next.js (SSR) | Unnecessary complexity; static hosting adequate |
| Firebase (Backend) | Vendor lock-in; less control |

---

## Related Decisions

- **ADR-002**: Database Schema Design (to be created)
- **ADR-003**: Authentication & Authorization (to be created)
- **ADR-004**: State Management Architecture (to be created)

---

## How To Use This ADR

When making technology decisions in the future:
1. **Refer to this ADR** if questioning tech stack choices
2. **Create new ADRs** for subsequent architectural decisions
3. **Update this ADR** only if fundamental decisions change (unlikely)
4. **Document trade-offs** in code comments where relevant

---

## Sign-Off

- **Approved by**: StudyFlow Team
- **Date**: 2026-01-04
- **Status**: Active
- **Review Date**: 2026-02-04 (post-hackathon)

---

**Document Version**: 1.0  
**Created**: 2026-01-04  
**Last Updated**: 2026-01-04
