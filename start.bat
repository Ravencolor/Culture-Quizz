@echo off
title Lancement Culture Quiz

echo ==========================================
echo   LANCEMENT DES SERVEURS CULTURE QUIZ
echo ==========================================

:: Lancement du Backend (API)
echo Demarrage de l'API sur le port 3001...
start cmd /k "cd api && node server.js"

:: Attente de 2 secondes pour laisser l'API démarrer
timeout /t 2 /nobreak > nul

:: Lancement du Frontend (React/Vite)
echo Démarrage de l'application React...
start cmd /k "cd quizz && npm run dev"

echo.
echo Les deux serveurs sont en cours de démarrage.
echo Gardez les fenêtres de commande ouvertes !
echo ==========================================
pause