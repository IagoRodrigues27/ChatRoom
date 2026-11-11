@echo off
cd /d "%~dp0"
if not exist .env copy .env.example .env >nul
start notepad .env
echo No Bloco de Notas, substitua os dois valores de EXPO_PUBLIC pelo seu projeto.
pause
