# 🚀 Sylphara AI Frontend

<div align="center">

### Modern AI-Powered Conversational Interface

Built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Shadcn UI.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)

</div>

---

## 🌐 Live Demo

### Frontend
https://sylphara.vercel.app

### Backend API
https://sylphara-backend.vercel.app

---

# ✨ Features

## 🤖 AI Chat

- OpenRouter AI Integration
- Real-time AI Responses
- Markdown Rendering
- Syntax Highlighted Code Blocks
- Copy AI Responses
- Dynamic Chat Interface

---

## 💬 Conversation Management

- Create New Conversations
- Conversation History
- Search Conversations
- Dynamic Routing
- Persistent Chat Storage

---

## 👤 User Profile

- Dynamic Profile Card
- Profile Update Modal
- GitHub Integration
- LinkedIn Integration
- Auto Generated Avatar
- Role Based Profile Display

---

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Refresh Token Flow
- Protected Routes
- Cookie Based Authentication

---

## 🎨 Modern UI/UX

- Responsive Design
- Mobile Friendly
- Dark Theme
- Glassmorphism Effects
- Modern Dashboard Layout
- Loading Animations

---

# 🛠️ Tech Stack

## Frontend

```txt
Next.js 16
React 19
TypeScript
Tailwind CSS v4
Shadcn UI
Radix UI
```

## State Management

```txt
TanStack Query
React Hooks
Server Actions
```

## Form Validation

```txt
React Hook Form
Zod
Hookform Resolvers
```

## Markdown & Code Rendering

```txt
React Markdown
Remark GFM
React Syntax Highlighter
```

---

# 📂 Folder Structure

```bash
app
│
├── (auth)
│   ├── login
│   └── register
│
├── (public-router)
│   ├── _action
│   ├── _components
│   ├── profile
│   └── page.tsx
│
├── globals.css
├── layout.tsx
├── loading.tsx
└── ReactQueryProvider.tsx
│
components
│
├── ui
│
public
│
service
│
middleware.ts
```

---

# ⚡ Frontend Architecture

```text
User
 │
 ▼
Next.js Application
 │
 ▼
Server Actions
 │
 ▼
Express Backend API
 │
 ▼
PostgreSQL Database
 │
 ▼
OpenRouter AI
```

---

# 🔐 Authentication Flow

```text
User Login
    │
    ▼
Access Token
    │
    ▼
Protected Routes
    │
    ▼
Token Expired
    │
    ▼
Refresh Token API
    │
    ▼
New Access Token
```

---

# 📡 API Modules

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh-token
```

### AI

```http
POST /api/ai/chat
```

### Conversation

```http
POST /api/conversation/create-conversation
GET  /api/conversation/all-conversations
GET  /api/conversation/:id
GET  /api/conversation/search
```

### Message

```http
POST /api/message/create-message
GET  /api/message/:conversationId
```

### Profile

```http
GET   /api/profile/me
PATCH /api/profile/me
```

---

# 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/ehasunulislam/sylphara-frontend.git
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BACKEND_URL=
```

### Run Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

---

# 📦 Main Dependencies

```json
{
  "next": "16.2.10",
  "react": "19.2.4",
  "typescript": "^5",
  "@tanstack/react-query": "^5.101.4",
  "react-hook-form": "^7.82.0",
  "zod": "^4.4.3",
  "react-markdown": "^10.1.0",
  "react-syntax-highlighter": "^16.1.1",
  "lucide-react": "^1.25.0",
  "react-icons": "^5.7.0",
  "sonner": "^2.0.7"
}
```

---

# 🎯 Future Roadmap

- AI Image Generation
- Voice Chat
- AI Memory System
- Multi AI Models
- Conversation Export
- Jarvis Assistant Mode
- Custom AI Personas

---

# 👨‍💻 Developer

## Ehasun Ul Islam Orko

Junior Full Stack Developer

### Connect

GitHub:
https://github.com/ehasunulislam

LinkedIn:
https://www.linkedin.com/in/ehasun/

---

<div align="center">

### Built with ❤️ using Next.js, TypeScript, Tailwind CSS & ShadCn

⭐ Star the repository if you found it useful.

</div>