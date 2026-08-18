# RamzinoFront

Next.js 14 frontend for the Ramzino crypto platform. Uses standalone output mode for deployment.

## Tech Stack

- **Next.js 14** (Pages Router, standalone output)
- **React 18**
- **Redux Toolkit** for state management
- **TailwindCSS** for styling
- **Axios + SWR** for data fetching
- **Swiper** for carousels/sliders

## Prerequisites

- Node.js 18+
- npm

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set environment variables

Copy `.env.example` to `.env.local` and update values:

```bash
cp .env.example .env.local
```

```bash
# .env.local
NEXT_PUBLIC_API_BASE_URL=https://panel.ramzino.me/api/front-api-v1/
API_URL=https://panel.ramzino.me/api/front-api-v1/
PORT=3001
HOSTNAME=0.0.0.0
```

| Variable | Description | Used |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API URL (baked at build time) | Client + Server |
| `API_URL` | Backend API URL (read at runtime) | Server fallback |
| `PORT` | Server port (default: 3001) | Server |
| `HOSTNAME` | Server bind address (default: 0.0.0.0) | Server |

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
```

### 5. Start production server

```bash
npm run start
```

Or with custom port:

```bash
PORT=3001 npm run start
```

## Project Structure

```
├── components/     # Reusable UI components
├── pages/          # Next.js pages (routes)
├── hooks/          # Custom React hooks
├── reduxStates/    # Redux store, reducers, actions
├── icons/          # SVG icons (imported as React components)
├── styles/         # Global CSS
├── public/         # Static assets (images, fonts, icons)
├── next.config.js  # Next.js config (standalone output, SVG loader)
├── ecosystem.config.js  # PM2 config (port, env vars)
├── start.js        # Loads .env before starting server
└── tailwind.config.js   # TailwindCSS config
```

## Deployment

This project uses Next.js `output: 'standalone'` mode. See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete step-by-step instructions on:

- Building locally and uploading to a cPanel server
- Installing PM2 and managing the app
- Setting up Apache reverse proxy
- Installing sharp for image optimization
- Troubleshooting (503, sharp errors, static files 404, etc.)

### Quick deploy summary

**On your PC:**
```bash
npm run build
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
cp ecosystem.config.js .next/standalone/ecosystem.config.js
cp start.js .next/standalone/start.js
cd .next/standalone
zip -r ../ramzino-deploy.zip .
```

**On the server:**
```bash
cd ~/public_html/ramzino
npm install sharp
pm2 start ecosystem.config.js
pm2 save
```

## PM2 Commands

| Action | Command |
|---|---|
| Start | `pm2 start ecosystem.config.js` |
| Stop | `pm2 stop ramzino` |
| Restart | `pm2 restart ramzino` |
| Status | `pm2 status` |
| Logs | `pm2 logs ramzino` |
| Delete | `pm2 delete ramzino` |
