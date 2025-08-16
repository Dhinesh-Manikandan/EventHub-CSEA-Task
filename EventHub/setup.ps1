Write-Host "Setting up EventHub MERN Stack Project..." -ForegroundColor Green
Write-Host ""

Write-Host "Installing root dependencies..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
Set-Location backend
npm install

Write-Host ""
Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
Set-Location ../frontend
npm install

Write-Host ""
Write-Host "Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "To run the project:" -ForegroundColor Cyan
Write-Host "1. Update backend/config.env with your MongoDB credentials" -ForegroundColor White
Write-Host "2. Run: npm run dev (from root directory)" -ForegroundColor White
Write-Host ""
Write-Host "Or run separately:" -ForegroundColor Cyan
Write-Host "- Backend: npm run server" -ForegroundColor White
Write-Host "- Frontend: npm run client" -ForegroundColor White
Write-Host ""
Set-Location ..
Read-Host "Press Enter to continue"
