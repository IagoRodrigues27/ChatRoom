@echo off
cd /d "%~dp0"
if not exist .env (echo Arquivo .env nao encontrado. Copie .env.example para .env e configure o Supabase. & pause & exit /b 1)
call npx expo start -c
pause
