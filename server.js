const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// In-memory store: roomCode -> gameState
const rooms = {};

// SSE clients: roomCode -> [res, res, ...]
const clients = {};

// ── REST API ──────────────────────────────────────────────

// Get room state
app.get('/room/:code', (req, res) => {
  const room = rooms[req.params.code.toUpperCase()];
  if (!room) return res.status(404).json({ error: 'Room not found' });
  res.json(room);
});

// Create or update room state
app.post('/room/:code', (req, res) => {
  const code = req.params.code.toUpperCase();
  rooms[code] = req.body;
  res.json({ ok: true });
  // Push update to all SSE clients in this room
  broadcast(code, rooms[code]);
});

// ── SSE for real-time push ────────────────────────────────

app.get('/room/:code/events', (req, res) => {
  const code = req.params.code.toUpperCase();
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  if (!clients[code]) clients[code] = [];
  clients[code].push(res);

  // Send current state immediately on connect
  if (rooms[code]) {
    res.write(`data: ${JSON.stringify(rooms[code])}\n\n`);
  }

  req.on('close', () => {
    clients[code] = (clients[code] || []).filter(c => c !== res);
  });
});

function broadcast(code, state) {
  (clients[code] || []).forEach(c => {
    c.write(`data: ${JSON.stringify(state)}\n\n`);
  });
}

// Serve the game HTML at root
app.get('/', (req, res) => res.sendFile(__dirname + '/hexen.html'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`HEXEN server running at http://localhost:${PORT}`));
