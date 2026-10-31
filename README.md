# Eina & Me – Single Page Relationship Site (React + Vite)

A sweet, romantic, playful single-page website built with **React** and **Vite**, introducing Eina and our relationship story.

## Features
- **Mobile-first React Architecture**: Structured with modular React components (`Hero`, `MeetCute`, `Timeline`, `FavoriteMoments`, `SpotifyFeature`, `ClosingNote`).
- **Interactive Timeline Modal**: Clicking any timeline milestone opens a detailed modal view.
- **Custom Fonts**: Heading typography via Google Fonts (`Quicksand`), body text (`Inter`), and cursive sign-off (`Dancing Script`).
- **Subtle Fade-In Animations**: Uses `IntersectionObserver` across sections for a sleek, performant scroll experience.
- **Spotify Placeholder**: Abstract wave SVG design ready to be replaced with a real screenshot when available.
- **Privacy First**: Uses nicknames (`Eina`, `Keia`) and contains no sensitive personal details or location data.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open the printed local URL (typically `http://localhost:5173`) in your browser.

### 3. Build for Production
```bash
npm run build
```
Output static build files land in `dist/`.

## Deployment
- **Vercel / Netlify**: Connect your Git repo or deploy via CLI (`vercel` / `netlify deploy`).
- **GitHub Pages**: Set build command to `npm run build` and publish directory to `dist`.
