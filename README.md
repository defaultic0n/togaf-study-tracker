# TOGAF Foundation Study Tracker

A Progressive Web App (PWA) to track your TOGAF Foundation exam study sessions.

## Features
- 20 study sessions, 30 min/day, Mon–Thu over 5 weeks
- Offline support via service worker
- Install to home screen on iOS & Android
- Progress ring, streak counter, filter by topic
- Data persists in localStorage

## File Structure
```
togaf-pwa/
├── index.html       ← Main app
├── manifest.json    ← PWA manifest
├── sw.js            ← Service worker (offline support)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

## Deploy to GitHub Pages

See the step-by-step guide in the main README or follow these steps:

1. Create a new GitHub repo (e.g. `togaf-study-tracker`)
2. Upload all files keeping the folder structure
3. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
4. Your app will be live at: `https://<your-username>.github.io/togaf-study-tracker/`
