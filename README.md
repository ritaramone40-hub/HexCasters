# HEXEN — Server Setup

## Run locally (same WiFi)

```bash
npm install
node server.js
```

Open `http://localhost:3000` on both devices connected to the same network.
Player 1 creates a room, shares the code, Player 2 joins.

---

## Deploy online (play from anywhere)

The cheapest/fastest options:

### Option A — Railway (free tier, recommended)
1. Push this folder to a GitHub repo
2. Go to railway.app → New Project → Deploy from GitHub
3. Select your repo — Railway auto-detects Node and deploys
4. You get a URL like `https://hexen-production.up.railway.app`
5. Share that URL with your friend — done

### Option B — Render (free tier)
1. Push to GitHub
2. Go to render.com → New Web Service → connect repo
3. Build command: `npm install`
4. Start command: `node server.js`
5. You get a public URL

### Option C — Fly.io
```bash
npm install -g flyctl
fly launch
fly deploy
```

---

## Files

- `server.js` — Express server with SSE for real-time sync
- `hexen.html` — The game (served at `/`)
- `package.json` — Dependencies (just express + cors)

## How it works

- Game state lives in memory on the server (resets on restart)
- When a player makes a move, it POSTs the new state to the server
- The server broadcasts it instantly via Server-Sent Events to the other player
- No database needed — pure in-memory, zero config
