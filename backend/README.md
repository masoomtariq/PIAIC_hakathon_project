# StudyFlow - Backend API

Student productivity todo-app backend built with Node.js, Express, and MongoDB.

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier available)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB URI and JWT secret
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   
   Server will start on http://localhost:5000

4. **View API Documentation**
   Open http://localhost:5000/api-docs in your browser for Swagger docs

## API Endpoints

### Authentication
- `POST /api/users/signup` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/me` - Get current user profile

### Tasks
- `POST /api/tasks` - Create task
- `GET /api/tasks` - List user's tasks (with filters)
- `GET /api/tasks/:id` - Get task details
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PATCH /api/tasks/:id/toggle` - Toggle task completion

### Health Check
- `GET /api/health` - Server health status

## Project Structure

```
src/
├── config/          # Configuration (database, etc.)
├── controllers/     # Route handlers
├── middleware/      # Authentication, error handling
├── models/          # MongoDB schemas (User, Task, Category)
├── routes/          # API routes
├── types/           # TypeScript types
├── utils/           # Auth, logger, validation
└── index.ts         # Main server file
```

## Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production build
- `npm test` - Run tests (Jest)
- `npm run lint` - Check code quality (ESLint)
- `npm run format` - Format code (Prettier)

### Key Technologies
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Joi** - Input validation
- **Swagger** - API documentation

## Environment Variables

```bash
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/studyflow
JWT_SECRET=your_secret_key_here
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## Database Schema

### Users
- `_id` - ObjectId
- `email` - String (unique)
- `passwordHash` - String (bcrypt hashed)
- `createdAt`, `updatedAt` - Date

### Tasks
- `_id` - ObjectId
- `userId` - Reference to User
- `title` - String (required)
- `description` - String (optional)
- `dueDate` - Date (required)
- `priority` - Enum (High/Medium/Low)
- `categoryId` - Reference to Category (optional)
- `completed` - Boolean (default: false)
- `createdAt`, `updatedAt` - Date

### Categories
- `_id` - ObjectId
- `userId` - Reference to User
- `name` - String (required)
- `color` - Hex color (default: #3B82F6)
- `createdAt`, `updatedAt` - Date

## Testing

To test endpoints, use curl or Postman:

```bash
# Sign up
curl -X POST http://localhost:5000/api/users/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'

# Create task (replace TOKEN with actual JWT)
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "title":"Math Assignment",
    "dueDate":"2026-01-15T23:59:00Z",
    "priority":"High"
  }'
```

## Deployment

### To Deploy on Render.com
1. Connect GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy!

### To Deploy on Railway
1. Connect GitHub repository
2. Set environment variables
3. Deploy!

## Contributing

1. Create feature branch: `git checkout -b feature/new-feature`
2. Commit changes: `git commit -am 'Add new feature'`
3. Push to branch: `git push origin feature/new-feature`
4. Open a pull request

## License

Apache 2.0 - See LICENSE file for details
