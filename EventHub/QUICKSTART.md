# EventHub Quick Start Guide

Get EventHub running in 5 minutes! 🚀

## Prerequisites
- Node.js installed (v14+)
- MongoDB Atlas account or local MongoDB

## Quick Setup

### 1. Install Dependencies
```bash
# Windows
setup.bat

# PowerShell
setup.ps1

# Manual
npm run install-all
```

### 2. Configure MongoDB
Edit `backend/config.env`:
```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.abcd.mongodb.net/myDatabase?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

### 3. Seed Database
```bash
cd backend
node seed.js
```

### 4. Run the Application
```bash
# From root directory
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend on http://localhost:3000

## What You'll See

✅ **Home Page**: Grid of event cards with search and filtering
✅ **Navigation**: Logo, search bar, and domain dropdown
✅ **Event Cards**: Hover effects and responsive design
✅ **Event Details**: Full event information pages
✅ **Filtering**: By domain (Tech, Non-Tech, Cultural, Sports)
✅ **Search**: Real-time event name and description search

## Troubleshooting

**Backend won't start?**
- Check MongoDB connection string in `config.env`
- Ensure MongoDB is accessible

**Frontend won't start?**
- Check if backend is running on port 5000
- Clear browser cache

**No events showing?**
- Run `node seed.js` in backend directory
- Check browser console for errors

## Next Steps

- Customize event data in `backend/seed.js`
- Add new event categories
- Implement user authentication
- Add event registration functionality

---

**Need help?** Check the main README.md for detailed documentation!
