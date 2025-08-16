# EventHub - MERN Stack Event Management Application

EventHub is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to discover, search, and explore events across different domains including Tech, Non-Tech, Cultural, and Sports.

## Features

### Frontend (React + TailwindCSS)
- **Navigation Bar**: Logo, search functionality, and domain filter dropdown
- **Home Page**: Grid display of event cards with filtering and search
- **Event Details Page**: Full event information with responsive design
- **Responsive Design**: Fully responsive layout for all device sizes
- **Hover Effects**: Interactive card animations and transitions

### Backend (Node.js + Express + MongoDB)
- **RESTful API**: Complete CRUD operations for events
- **MongoDB Integration**: Robust database with Event schema
- **Filtering**: Domain-based event filtering
- **Error Handling**: Comprehensive error handling and validation

### Core Functionality
- Event browsing and searching
- Domain-based filtering (Tech, Non-Tech, Cultural, Sports)
- Real-time search functionality
- Responsive event cards with hover effects
- Detailed event view pages
- Clean and modern UI design

## Project Structure

```
EventHub/
├── backend/                 # Backend server
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── config.env          # Environment variables
│   ├── server.js           # Main server file
│   ├── seed.js             # Database seeding script
│   └── package.json        # Backend dependencies
├── frontend/               # React frontend
│   ├── public/             # Static files
│   ├── src/                # Source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── App.js          # Main app component
│   │   └── index.js        # Entry point
│   ├── tailwind.config.js  # TailwindCSS configuration
│   └── package.json        # Frontend dependencies
└── package.json            # Root package.json
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd EventHub
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Configure MongoDB**
   - Update `backend/config.env` with your MongoDB connection string
   - Replace `<username>`, `<password>`, and other placeholders with your actual MongoDB credentials

4. **Seed the database**
   ```bash
   cd backend
   node seed.js
   ```

## Running the Application

### Development Mode (Both Frontend and Backend)
```bash
npm run dev
```

### Backend Only
```bash
npm run server
```

### Frontend Only
```bash
npm run client
```

### Production Build
```bash
npm run build
```

## API Endpoints

- `GET /api/events` - Fetch all events
- `GET /api/events/:id` - Fetch specific event by ID
- `GET /api/events?domain=Tech` - Filter events by domain
- `POST /api/events` - Create new event (admin)

## Environment Variables

Create a `backend/config.env` file with:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abcd.mongodb.net/myDatabase?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **CORS**: Cross-origin resource sharing

### Frontend
- **React.js**: JavaScript library for building user interfaces
- **React Router**: Client-side routing
- **TailwindCSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach

## Features in Detail

### Event Management
- Create, read, and filter events
- Domain categorization (Tech, Non-Tech, Cultural, Sports)
- Rich event descriptions and dates
- Search functionality across event names and descriptions

### User Experience
- Intuitive navigation with breadcrumbs
- Responsive grid layout for events
- Smooth hover animations and transitions
- Loading states and error handling
- Clean, modern design aesthetic

### Responsive Design
- Mobile-first approach
- Adaptive grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository or contact the development team.

---

**EventHub** - Your gateway to discovering amazing events! 🎉
