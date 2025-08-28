# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Usage

```
client: npm run dev
server: cd server && node app.js

```

## Features Roadmap

login

separate client domains into admin portal (for jam/ open mic organizers) and participants (only can see certain info)

user overview: show instruments, what musicians you've played with, what sessions you've been to, basic biography & contact details

sessions: make a historical list of sessions a user has been to and a list of upcoming sessions

SMS: send a text to a musician when they are about to go up

each musician should have a session view where they can see who is on stage currently and their contact details

adapt app for 3 different types of events: jam sessions, music open mics, comedy open mics (possibly expand for trivia?)

use react query to sync up client and server state (ie everytime you add a musician the admin portal side )

custom domains for each session (chofis.jam, sova.jam, unfamiliar.jam, kabir.jam, hungrybrain.jam, schubas.jam, mustache.jam, clipper.jam)

next projects: recreate wordle & connections, generate ad revenue, uber for tutuoring, photomath copy
