# StudyFlow - Frontend App

React + TypeScript frontend for StudyFlow student todo app with responsive UI and real-time task management.

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Backend running on http://localhost:5000

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   # .env is already configured for local development
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   
   App will open on http://localhost:3000

## Features (MVP)

- ✅ User authentication (signup/login)
- 🚧 Task dashboard with quick-add
- 🚧 Calendar view with drag-and-drop
- 🚧 Progress tracking and daily stats
- 🚧 Category/subject organization
- 🚧 Priority filtering and sorting

## Project Structure

```
src/
├── api/             # API client and calls
├── components/      # Reusable React components
├── hooks/           # Custom hooks (Redux, etc.)
├── pages/           # Page components (Dashboard, Calendar, etc.)
├── store/           # Redux store and slices
├── styles/          # Global CSS (Tailwind)
├── types/           # TypeScript types and interfaces
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Check code quality
- `npm run format` - Format code (Prettier)

### Key Technologies
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool (fast)
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **React Big Calendar** - Calendar component
- **Recharts** - Charts and graphs
- **React Hot Toast** - Notifications

## Environment Variables

```bash
VITE_API_URL=http://localhost:5000/api
```

For production, set `VITE_API_URL` to your production API URL.

## Component Architecture

### Layout
- **App.tsx** - Main routing and app wrapper
- **ProtectedRoute.tsx** - Guard for authenticated pages

### Pages
- **LoginPage.tsx** - Signup/login form (handles both)
- **Dashboard.tsx** - Main task view (coming soon)
- **CalendarPage.tsx** - Calendar view (coming soon)

### Components (Coming Soon)
- TaskCard - Individual task display
- TaskForm - Create/edit task
- TaskList - List of tasks
- Calendar - Calendar view
- ProgressBar - Daily progress
- CategoryManager - Subject/course organization

## State Management (Redux)

### Auth Slice
```typescript
{
  isAuthenticated: boolean
  user: User | null
  token: string | null
  loading: boolean
  error: string | null
}
```

Token is automatically saved to localStorage and sent with all API requests.

## API Integration

All API calls are made through `src/api/client.ts`:

```typescript
// Authentication
authAPI.signup(email, password)
authAPI.login(email, password)
authAPI.getMe()

// Tasks
tasksAPI.create(taskData)
tasksAPI.getAll(filters)
tasksAPI.getById(id)
tasksAPI.update(id, data)
tasksAPI.delete(id)
tasksAPI.toggle(id)
```

## Styling

Uses **Tailwind CSS** for responsive styling:
- Mobile-first approach
- Dark mode ready
- Custom color scheme (blue primary, green secondary)

## Form Validation

Uses **React Hook Form** + Joi-like validation on backend:
- Email format
- Required fields
- Password strength (backend enforced)

## Notifications

Uses **React Hot Toast** for user feedback:
- Success messages (task created, etc.)
- Error messages (API errors)
- Auto-dismiss toasts

## Responsive Design

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Performance Optimization

- Code splitting with React Router lazy routes
- Image optimization
- Bundle size monitoring
- Lazy component loading

## Testing (Coming Soon)

```bash
npm test
```

Uses Jest + React Testing Library.

## Deployment

### To Deploy on Vercel
1. Push code to GitHub
2. Connect repo to Vercel
3. Set `VITE_API_URL` environment variable
4. Deploy!

### To Deploy on Netlify
1. Push code to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set environment variables
6. Deploy!

## Contributing

1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and commit: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/new-feature`
4. Open a pull request

## License

Apache 2.0 - See LICENSE file for details
