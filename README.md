# 🌾 Farmer Client Management System

A complete MERN Stack application for managing farmer clients with multi-page navigation.

## Features

- 📊 **Dashboard** - Overview of client statistics and recent activity
- 👥 **Client Management** - View, add, edit, and delete clients
- 🔍 **Search & Filter** - Quickly find clients by name, phone, or location
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean and intuitive user interface
- ⚡ **Fast Navigation** - Smooth page transitions with React Router

## Project Structure

```
farmer-client-management/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Dashboard.css
│   │   ├── ClientList.jsx
│   │   ├── ClientList.css
│   │   ├── ClientDetail.jsx
│   │   ├── ClientDetail.css
│   │   ├── AddEditClient.jsx
│   │   └── AddEditClient.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── server/
│   ├── models/
│   │   └── Client.js
│   ├── routes/
│   │   └── clientRoutes.js
│   └── server.js
├── index.html
├── vite.config.js
├── .env
└── package.json
```

## Tech Stack

### Frontend
- **React 19** - UI library
- **React Router v7** - Client-side routing
- **Vite** - Build tool and dev server
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Setup Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   Edit `.env` file and update MongoDB connection string if needed:
   ```
   MONGODB_URI=mongodb://localhost:27017/farmer-clients
   PORT=5000
   ```

3. **Start MongoDB:**
   - **Local:** `mongod`
   - **Cloud:** Use MongoDB Atlas connection string in `.env`

## Running the Application

### Development Mode (Both Frontend & Backend)
```bash
npm start
```

This will run:
- Frontend on `http://localhost:5173`
- Backend API on `http://localhost:5000`

### Frontend Only
```bash
npm run dev
```

### Backend Only
```bash
npm run server
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Pages & Navigation

### 1. **Dashboard** (`/`)
- Overview statistics (Total Clients, Active Clients, Orders, Revenue)
- Quick action buttons
- Recent activity feed

### 2. **Client List** (`/clients`)
- View all clients in a table format
- Search functionality
- Add new client button
- Edit and delete actions

### 3. **Client Detail** (`/clients/:id`)
- Detailed client information
- Contact details
- Statistics (orders, spending)
- Recent orders
- Quick actions (email, SMS, call)

### 4. **Add/Edit Client** (`/add-client`, `/edit-client/:id`)
- Form to add new client
- Form to edit existing client
- Form validation
- Required fields: Name, Phone, Email, Location

## API Endpoints

### Clients
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get single client
- `POST /api/clients` - Create new client
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

## Sample Client Data

The application comes with sample data for demo purposes. The sample clients include:
- Rajesh Kumar (Punjab)
- Amit Patel (Gujarat)
- Suresh Singh (Haryana)
- Vikram Sharma (Rajasthan)
- Priya Verma (Madhya Pradesh)
- Deepak Singh (Uttar Pradesh)

## Features to Extend

- Authentication & Authorization
- Order management
- Payment tracking
- Invoice generation
- SMS/Email notifications
- Export to Excel
- Advanced analytics
- Multi-user support

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network connectivity

### Port Already in Use
- Change PORT in `.env` for backend
- Modify Vite config for frontend port

### Module Not Found
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then reinstall

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For issues or questions, please check the code comments or create an issue in the repository.

---

**Happy Farming! 🚜**
