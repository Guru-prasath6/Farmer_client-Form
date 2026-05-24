# Quick Start Guide - Farmer Client Management System

## 🚀 Getting Started in 5 Minutes

### Step 1: Prerequisites Check
Make sure you have installed:
- ✅ Node.js (v14+)
- ✅ npm or yarn
- ✅ MongoDB (local or MongoDB Atlas)

### Step 2: Environment Setup
The `.env` file is already configured with default values:
```
MONGODB_URI=mongodb://localhost:27017/farmer-clients
PORT=5000
```

**If using MongoDB Atlas:**
Replace the `MONGODB_URI` with your connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/farmer-clients
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Start the Application

**Option A: Run both frontend and backend together**
```bash
npm start
```

**Option B: Run separately**
- Terminal 1 (Frontend):
  ```bash
  npm run dev
  ```
- Terminal 2 (Backend):
  ```bash
  npm run server
  ```

### Step 5: Open in Browser
- Frontend: `http://localhost:5173`
- API: `http://localhost:5000/api`

## 📱 Application Pages

### Dashboard (`http://localhost:5173/`)
- 📊 View statistics overview
- 📈 See recent activity
- 🎯 Quick action buttons

### Client List (`http://localhost:5173/clients`)
- 👥 View all clients
- 🔍 Search clients
- ✏️ Edit or delete clients
- ➕ Add new clients

### Client Details (`http://localhost:5173/clients/1`)
- 📋 View complete client information
- 📞 Contact details
- 📊 Client statistics
- 📦 Recent orders

### Add/Edit Client (`http://localhost:5173/add-client`)
- ✍️ Create new client
- 📝 Update existing client
- ✅ Form validation

## 🧪 Testing the App

### Sample Navigation Flow:
1. Open dashboard
2. Click "Clients" in navbar
3. Click any client name to see details
4. Click "✏️ Edit" to modify client
5. Click "+ Add Client" to add new farmer client

### Sample Data:
The app comes with demo clients. Try searching:
- Name: "Rajesh", "Amit", "Suresh"
- Phone: "9876543210"
- Location: "Punjab", "Gujarat"

## 🔗 Navigation Features

- **Top Navbar**: Jump to Dashboard, Clients, or Add Client
- **Client List**: Click client names to view details
- **Detail Page**: Edit or go back to list
- **All Pages**: Smooth transitions using React Router

## 🛠️ Troubleshooting

### Port 5173 in use?
```bash
npm run dev -- --port 3000
```

### Port 5000 in use?
Edit `.env`:
```
PORT=5001
```

### MongoDB not running?
Start MongoDB:
```bash
mongod
```

### Dependencies issues?
Clear and reinstall:
```bash
rm -r node_modules package-lock.json
npm install
```

## 📚 Project Files Overview

```
✅ Frontend Components:
  - Navbar: Navigation bar with links
  - Dashboard: Statistics overview
  - ClientList: Table of all clients
  - ClientDetail: Single client page
  - AddEditClient: Form for creating/editing

✅ Backend Routes:
  - GET /api/clients - Get all
  - POST /api/clients - Create
  - GET /api/clients/:id - Get one
  - PUT /api/clients/:id - Update
  - DELETE /api/clients/:id - Delete

✅ Database:
  - MongoDB with Mongoose schema
  - Client model with validation
```

## 🎨 Customization

### Change Colors
Edit CSS files in `src/pages/` and `src/components/`:
- Primary green: `#2c5f2d`
- Accent orange: `#ff9800`

### Add More Pages
1. Create new file in `src/pages/`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Navbar.jsx`

### Extend Backend
Add routes to `server/routes/clientRoutes.js` or create new route files.

## 📦 Build for Production

```bash
npm run build
npm run preview
```

Output will be in `dist/` folder.

## 🚀 Deploy

### Frontend (Vercel/Netlify):
1. Run `npm run build`
2. Deploy `dist/` folder

### Backend (Heroku/Railway):
1. Push code to Git
2. Set environment variables
3. Deploy Node.js app

---

**Enjoy managing your farmer clients! 🌾**

Need help? Check README.md for detailed documentation.
