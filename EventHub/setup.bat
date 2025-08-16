@echo off
echo Setting up EventHub MERN Stack Project...
echo.

echo Installing root dependencies...
npm install

echo.
echo Installing backend dependencies...
cd backend
npm install

echo.
echo Installing frontend dependencies...
cd ../frontend
npm install

echo.
echo Setup complete! 
echo.
echo To run the project:
echo 1. Update backend/config.env with your MongoDB credentials
echo 2. Run: npm run dev (from root directory)
echo.
echo Or run separately:
echo - Backend: npm run server
echo - Frontend: npm run client
echo.
pause
