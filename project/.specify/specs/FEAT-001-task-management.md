# Feature Specification: Task Management (CRUD)

## Feature ID
FEAT-001

## Overview
Users can create, view, update, and delete tasks with rich properties (title, description, due date, priority, category). Tasks form the core of the StudyFlow application.

## User Stories

### US-001: Create a New Task
**As a** student  
**I want to** quickly add a new task with a title, due date, and priority  
**So that** I can track assignments and deadlines

**Acceptance Criteria**:
- [ ] User can click "Add Task" button on dashboard
- [ ] Task creation modal appears with form fields (title*, description, due date*, priority*, category*)
- [ ] All marked * are required fields
- [ ] Form validates: title min 1 char, due date not in past, priority is one of (High/Medium/Low)
- [ ] On submit, POST /api/tasks is called
- [ ] Success: Modal closes, task appears in task list and calendar, toast shows "Task created"
- [ ] Error: Toast shows error message, form remains open for retry

### US-002: View Task Details
**As a** student  
**I want to** view details of a specific task  
**So that** I can see the full description and all properties

**Acceptance Criteria**:
- [ ] User clicks on task card or calendar event
- [ ] Task detail modal/drawer opens showing: title, description, due date, priority, category, completion status, created/updated timestamps
- [ ] Modal has close button (X) and keyboard escape support
- [ ] Click outside modal also closes it

### US-003: Update an Existing Task
**As a** student  
**I want to** edit a task's properties  
**So that** I can correct mistakes or update due dates as plans change

**Acceptance Criteria**:
- [ ] User clicks "Edit" button on task card or in detail view
- [ ] Edit modal appears with form pre-populated with current task data
- [ ] User can modify any field (title, description, due date, priority, category)
- [ ] On submit, PUT /api/tasks/:id is called with updated data
- [ ] Success: Modal closes, task list updates, toast shows "Task updated"
- [ ] Error: Toast shows error, form remains open

### US-004: Delete a Task
**As a** student  
**I want to** delete tasks I no longer need  
**So that** my task list stays clean and relevant

**Acceptance Criteria**:
- [ ] User clicks "Delete" button on task card
- [ ] Confirmation dialog appears: "Are you sure you want to delete this task?"
- [ ] User can confirm or cancel
- [ ] On confirm, DELETE /api/tasks/:id is called
- [ ] Success: Task removed from list and calendar, toast shows "Task deleted"
- [ ] Error: Toast shows error message

### US-005: Mark Task as Complete/Incomplete
**As a** student  
**I want to** check off tasks as I complete them  
**So that** I can track my progress and see which assignments are done

**Acceptance Criteria**:
- [ ] Each task card has a checkbox or toggle button
- [ ] Clicking checkbox toggles task.completed status
- [ ] PATCH /api/tasks/:id/toggle is called
- [ ] Checkbox state updates immediately (optimistic update)
- [ ] Completed tasks can be visually distinct (strikethrough, grayed out)
- [ ] Completed tasks still count toward progress bar until hidden/archived

## Technical Requirements

### API Endpoints

#### POST /api/tasks
Create a new task.

**Request**:
```json
{
  "title": "Complete Math Assignment",
  "description": "Chapter 5, problems 1-20",
  "dueDate": "2026-01-10T23:59:00Z",
  "priority": "High",
  "categoryId": "507f1f77bcf86cd799439011"
}
```

**Response** (201 Created):
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "userId": "507f1f77bcf86cd799439010",
  "title": "Complete Math Assignment",
  "description": "Chapter 5, problems 1-20",
  "dueDate": "2026-01-10T23:59:00Z",
  "priority": "High",
  "categoryId": "507f1f77bcf86cd799439011",
  "completed": false,
  "createdAt": "2026-01-04T10:00:00Z",
  "updatedAt": "2026-01-04T10:00:00Z"
}
```

#### GET /api/tasks
List all tasks for the authenticated user (with optional filters).

**Query Parameters**:
- `categoryId` (optional): Filter by category
- `priority` (optional): Filter by priority (High/Medium/Low)
- `completed` (optional): Filter by completion status (true/false)
- `startDate` (optional): Filter tasks with dueDate >= startDate (ISO 8601)
- `endDate` (optional): Filter tasks with dueDate <= endDate (ISO 8601)
- `sort` (optional): Sort by field (dueDate, priority, createdAt; default: dueDate asc)

**Response** (200 OK):
```json
{
  "tasks": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "userId": "507f1f77bcf86cd799439010",
      "title": "Complete Math Assignment",
      "description": "Chapter 5, problems 1-20",
      "dueDate": "2026-01-10T23:59:00Z",
      "priority": "High",
      "categoryId": "507f1f77bcf86cd799439011",
      "completed": false,
      "createdAt": "2026-01-04T10:00:00Z",
      "updatedAt": "2026-01-04T10:00:00Z"
    }
  ],
  "count": 1
}
```

#### GET /api/tasks/:id
Get a single task by ID.

**Response** (200 OK): Same as POST response above.

**Error** (404 Not Found):
```json
{
  "error": "Task not found"
}
```

#### PUT /api/tasks/:id
Update a task (all fields optional).

**Request**:
```json
{
  "title": "Complete Math Assignment (Revised)",
  "dueDate": "2026-01-12T23:59:00Z",
  "priority": "Medium"
}
```

**Response** (200 OK): Updated task object.

#### PATCH /api/tasks/:id/toggle
Toggle task completion status.

**Response** (200 OK):
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "completed": true,
  "updatedAt": "2026-01-04T10:05:00Z"
}
```

#### DELETE /api/tasks/:id
Delete a task.

**Response** (204 No Content) or:
```json
{
  "message": "Task deleted successfully"
}
```

### Database Schema (MongoDB)

```javascript
db.createCollection("tasks", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["userId", "title", "dueDate", "priority"],
      properties: {
        _id: { bsonType: "objectId" },
        userId: { bsonType: "objectId", description: "Reference to User._id" },
        title: { bsonType: "string", minLength: 1, maxLength: 255 },
        description: { bsonType: "string", maxLength: 2000 },
        dueDate: { bsonType: "date" },
        priority: { enum: ["High", "Medium", "Low"] },
        categoryId: { bsonType: "objectId", description: "Optional reference to Category._id" },
        completed: { bsonType: "bool", default: false },
        createdAt: { bsonType: "date", default: () => new Date() },
        updatedAt: { bsonType: "date", default: () => new Date() }
      }
    }
  }
});

// Indexes for performance
db.tasks.createIndex({ userId: 1, dueDate: 1 });
db.tasks.createIndex({ userId: 1, completed: 1 });
db.tasks.createIndex({ userId: 1, categoryId: 1 });
```

## Frontend Components

### TaskForm Component
- Input fields: title (text), description (textarea), dueDate (date picker), priority (radio/select), category (dropdown)
- Validation feedback inline
- Submit button disabled until form valid
- Cancel button

### TaskCard Component
- Display: title, dueDate (formatted), priority badge (color-coded), category pill, checkbox
- Quick actions: Edit, Delete, Toggle complete
- On hover: show action buttons
- Completed state: strikethrough text, reduced opacity

### TaskList Component
- Renders array of TaskCard components
- Empty state: "No tasks yet. Create your first task!"
- Loading state: spinner
- Error state: "Failed to load tasks. Retry?"

### TaskDetailModal Component
- Display all task properties
- Read-only or editable mode
- Edit button opens TaskForm in modal
- Delete button with confirmation

## Implementation Notes

1. **Optimistic Updates**: Mark task complete immediately in UI; if API fails, rollback
2. **Validation**: Use Joi on backend, react-hook-form on frontend
3. **Timezone Handling**: Store all dates in UTC; display in user's local timezone
4. **Search**: Implement text search on title + description (Phase 2)
5. **Undo/Redo**: Deferred to Phase 2

## Acceptance & Testing

### Manual Testing Checklist
- [ ] Create task with valid data → appears in list and calendar
- [ ] Create task with missing required field → form error message shown
- [ ] Update task → changes appear immediately
- [ ] Delete task → confirmation modal appears; task removed after confirm
- [ ] Toggle complete → checkbox state changes, progress bar updates
- [ ] Filter by priority/category → list updates correctly
- [ ] Sort by due date → tasks in correct order

### Automated Tests
- [ ] Backend API tests (Jest): POST, GET, PUT, PATCH, DELETE endpoints
- [ ] Frontend component tests: TaskForm validation, TaskCard rendering
- [ ] Integration test: Create task → Verify in list and calendar

---

**Spec Version**: 1.0  
**Status**: Approved  
**Created**: 2026-01-04
