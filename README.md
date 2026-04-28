# 🚀 ClearMyDev

**ClearMyDev** is an AI-powered developer productivity platform that helps developers understand technical problems faster.  
Instead of wasting time searching docs, forums, and random threads, developers can paste real debugging data and get clear, actionable explanations in plain English.

> **When your code talks nonsense, we translate.**

---

# 🌐 Live Demo

- **Frontend:** https://clear-my-dev.netlify.app  
- **Backend API:** https://clearmydev-api.onrender.com

---

# 📌 Why ClearMyDev?

Modern development is full of friction:

- Confusing error messages
- Massive logs
- Risky code/config changes
- Production incidents with partial context
- Tiny JSON mistakes that break APIs

ClearMyDev solves these daily developer frustrations using AI.

---

# ✨ Core Features

## 🔹 1. ExplainMyError
Paste any error or stack trace and get:

- Plain-English meaning
- Most likely cause
- First thing to check
- Common mistake
- Minimal reproduction example

---

## 🔹 2. ExplainMyLog
Paste raw logs and get:

- Summary of what happened
- Suspicious patterns
- Errors / warnings detected
- Where to focus first

---

## 🔹 3. ExplainMyDiff
Compare before vs after changes:

- Important differences highlighted
- Possible risks introduced
- What should be verified next

Useful for deployments, PR reviews, config changes.

---

## 🔹 4. ExplainMyIncident
Describe production issues with logs/errors and get:

- Likely cause
- Business impact
- Next investigation step

---

## 🔹 5. FixMyJSON
Paste broken JSON and get:

- Validation result
- Syntax issue identified
- Auto-formatted JSON
- Cleaner payload structure

---

# 🏗️ Tech Stack

## Frontend
- Angular
- TypeScript
- Tailwind CSS
- NgRx Signal Store
- Angular Router
- HTTP Interceptors

## Backend
- Node.js
- Express.js
- OpenAI API
- JWT Authentication
- Google OAuth (Passport.js)

## Database
- MongoDB Atlas

## Deployment
- Netlify (Frontend)
- Render (Backend)

---

# 🔐 Authentication

ClearMyDev uses **Google OAuth + JWT** authentication.

Features:

- Secure Google login
- Protected API routes
- Session persistence
- Auto logout on expired token

---

# 📊 SaaS Features Implemented

This is not just a tool app — it includes real SaaS patterns:

- User accounts
- Daily free-tier request limits
- Usage tracking
- Usage counter UI
- Rate limiting
- Input protection
- Standardized API responses
- Secure environment config
- Production deployment ready

---

# ⚙️ Local Setup

## 1️⃣ Clone Repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

## 2️⃣ Backend Setup

```bash
cd apps/backend
npm install
```

- Create a .env file inside apps/backend:

```bash
OPENAI_API_KEY=your_key
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
PORT=3000
```

- Run backend:
```bash
npm run dev
```

- Backend runs on:
```bash
http://localhost:3000
```

## 3️⃣ Frontend Setup
```bash
cd apps/frontend/clearmydev-ui
npm install
npm start
```

- Frontend runs on:
```bash
http://localhost:7700
```

---

# 📂 Folder Structure

```bash
root/
│
├── apps/
│   ├── backend/                    # Node.js + Express API
│   │   ├── src/
│   │   │   ├── config/            # DB, auth, environment configs
│   │   │   ├── controllers/       # Route controllers
│   │   │   ├── middleware/        # Auth, rate-limit, error handlers
│   │   │   ├── models/            # MongoDB schemas
│   │   │   ├── routes/            # API routes
│   │   │   ├── services/          # AI/business logic
│   │   │   └── index.js           # App entry point
│   │   ├── .env.example
│   │   └── package.json
│   │
│   └── frontend/
│       └── clearmydev-ui/         # Angular application
│           ├── src/
│           │   ├── app/
│           │   │   ├── core/      # Core services, guards, interceptors
│           │   │   ├── shared/    # Reusable UI components
│           │   │   ├── features/  # Feature modules/pages
│           │   │   ├── store/     # Signal Store / state management
│           │   │   └── app.routes.ts
│           │   ├── environments/  # Dev / prod configs
│           │   └── styles.css
│           ├── angular.json
│           └── package.json
│
├── README.md
├── package.json
└── .gitignore
```

---

# 🌍 Environment Configuration

## Development

Uses Angular proxy config (proxy.conf.json):
```bash
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true
  }
}
```

## Production

Uses src/environments/environment.prod.ts
```bash
export const environment = {
  production: true,
  apiBaseUrl: "https://your-render-url.onrender.com/api",
  authUrl: "https://your-render-url.onrender.com/api/auth/google"
};
```
---

# 🚀 Deployment

## Frontend — Netlify
- Connect GitHub repo
- Base directory: apps/frontend/clearmydev-ui
- Build command: ng build
- Publish directory: dist/clearmydev-ui/browser

## Backend — Render
- Create Web Service
- Root directory: apps/backend
- Build command: npm install
- Start command: node src/index.js

Set environment variables in Render dashboard.

---

# 🔐 Security Features

- Google OAuth authentication
- JWT protected routes
- Rate limiting
- Input size protection
- Helmet security headers
- Environment variable protection
- Usage-based access control

---

# 📊 Usage Control

Free-tier SaaS protections included:

- Daily request limits per user
- Usage tracking in MongoDB
- Remaining usage shown in UI
- Auto reset on next day

---

# 🧠 AI Prompt Engineering

Each tool uses custom structured prompts designed for:

- Plain-English explanations
- High signal responses
- Minimal hallucination
- Actionable next steps
- Predictable JSON output

---

# 📈 Future Improvements

Planned roadmap:

- Paid subscriptions
- Team workspaces
- Saved history
- Analytics dashboard
- Dark mode enhancements
- More debugging tools
- Multi-model AI support

---

# 📜 Legal Pages

Included for production readiness:

- Privacy Policy
- Terms of Use

---

# 👨‍💻 Author

Built by **Sreekanth T** as a flagship full-stack SaaS portfolio project.

---

# ⭐ Why This Project Matters

ClearMyDev demonstrates real-world engineering skills beyond CRUD apps:

- Full-stack architecture
- Angular state management
- Node.js API design
- OAuth authentication
- MongoDB integration
- AI product development
- SaaS business logic
- Production deployment

---

# 💬 Feedback

If you found this project useful or interesting, feel free to star the repo ⭐