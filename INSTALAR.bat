@echo off
cd /d "%~dp0"
where node >nul 2>&1 || (echo Instale Node.js 22+ antes: https://nodejs.org/ & pause & exit /b 1)
call npm install
if errorlevel 1 (echo Houve um problema na instalacao. & pause & exit /b 1)
call npx expo install --fix
pause
