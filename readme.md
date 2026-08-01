# Plateforme numérique du BNGRC

Fondations frontend de la future plateforme numérique du Bureau National de Gestion des Risques et des Catastrophes. Cette première étape livre uniquement la connexion de démonstration, un tableau de bord provisoire et le socle des futures fonctionnalités.

> **Démonstration uniquement :** toutes les informations affichées sont fictives. Aucun backend, aucune base de données et aucune authentification réelle ne sont utilisés.

## Stack

React, TypeScript, Vite, Material UI et Material Icons, React Router, React Hook Form, TanStack Query, Chart.js, Leaflet, FullCalendar, Framer Motion et date-fns.

## Installation et lancement

Prérequis : Node.js 20.19+ (ou 22.12+) et npm.

```bash
npm install
npm run dev
```

Ouvrez ensuite `http://localhost:5173`.

## Identifiants de démonstration

Utilisez n'importe quelle direction ou nom d'utilisateur non vide et un mot de passe d'au moins quatre caractères. Exemple : `BNGRC Demo` / `demo`.

## Qualité et build

```bash
npm run lint
npm run build
npm run preview
```

## Déploiement Vercel

Importez le dépôt dans Vercel en conservant le preset Vite. La commande de build est `npm run build` et le dossier de sortie `dist`. `vercel.json` redirige les routes de la SPA vers `index.html`, permettant notamment le rechargement direct de `/dashboard`.

## Structure principale

```text
src/
├── app/           # Composition et providers globaux
├── components/    # Fondations UI communes
├── config/        # Configuration applicative
├── features/      # Modules fonctionnels évolutifs
├── hooks/         # Hooks partagés
├── layouts/       # Mises en page
├── mock/          # Données fictives
├── pages/         # Pages routées
├── routes/        # Définition des routes
├── services/      # Futurs adaptateurs de services
├── theme/         # Design system BNGRC
├── types/         # Types partagés
└── utils/         # Utilitaires
```

Les modules métier (réunions, personnels, alertes, projets, stock et rapports) ne sont pas implémentés à cette étape.
