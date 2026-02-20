Culture Quizz 🧠

Culture Quizz est une application web de quiz de culture générale développée avec React et Node.js. Ce projet a été conçu avec une approche Mobile First pour offrir une expérience utilisateur optimale sur smartphone.
Fonctionnalités

    Page d'Accueil : Interface moderne avec logo et titre.

    Sélection de Catégories : Choix dynamique parmi plusieurs thèmes (Histoire, Cinéma, Sport, etc.) récupérés via une API.

    Quiz Interactif :

        Timer de 30 secondes par question.

        Affichage de 4 propositions générées aléatoirement à partir de 10 réponses possibles en base de données.

        Feedback visuel immédiat (Vert pour correct, Rouge pour faux).

        Passage automatique à la question suivante en cas d'absence de réponse.

    Résultats : Affichage du score final sur 10 à la fin du quiz.

Architecture Technique

Le projet est divisé en deux parties distinctes pour une meilleure maintenabilité :

    Frontend : Développé avec React, Vite et Tailwind CSS. Utilise des composants modulaires (Quiz, CategorySelection, Results).

    Backend (API) : Serveur Node.js avec Express fournissant les données au format JSON.

    Données : Stockage structuré des questions et catégories côté serveur.

Charte Graphique

    Couleurs : Fond Bleu Nuit (#04070F) pour réduire la fatigue visuelle et accent Rose (#e068d8) pour les éléments d'attention comme la barre de progression.

    Typographie : Geist Fallback pour un aspect moderne et premium.

Installation et Lancement
Prérequis

    Node.js installé sur votre machine.

Démarrage rapide (Windows)

À la racine du projet, double-cliquez sur le fichier :
Bash

start.bat

Ce script lancera automatiquement l'API sur le port 3001 et le Frontend sur le port 5173.
Démarrage manuel

    Lancer l'API :
    Bash

    cd api
    npm install
    node server.js

    Lancer le Frontend :
    Bash

    cd quizz
    npm install
    npm run dev
