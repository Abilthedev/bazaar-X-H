import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

interface VoteItem {
  id: string;
  score: number; // 1 to 5
  comment: string;
  createdAt: string;
}

const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'votes.json');

// Real votes only - no fake/dummy reviews!
function loadVotes(): VoteItem[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
    return [];
  } catch (err) {
    console.error('Error reading votes file:', err);
    return [];
  }
}

function saveVotes(votes: VoteItem[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(votes, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing votes file:', err);
  }
}

function getSmileLabel(score: number): string {
  switch (score) {
    case 1: return '😞 Senyum Murung';
    case 2: return '🙁 Kurang Senyum';
    case 3: return '😐 Datar / Biasa';
    case 4: return '🙂 Senyum Ramah';
    case 5: return '😄 Senyum Lebar';
    default: return '🙂 Senyum';
  }
}

function calculateStats(votes: VoteItem[]) {
  const totalVotes = votes.length;
  const breakdown: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let sum = 0;

  votes.forEach((v) => {
    const s = Math.min(5, Math.max(1, Math.round(v.score)));
    breakdown[s] = (breakdown[s] || 0) + 1;
    sum += s;
  });

  const average = totalVotes > 0 ? parseFloat((sum / totalVotes).toFixed(1)) : 0;

  return {
    average,
    totalVotes,
    breakdown,
    votes: votes.slice().reverse() // newest first
  };
}

// API Routes
app.get('/api/votes', (_req, res) => {
  const votes = loadVotes();
  res.json(calculateStats(votes));
});

// Simple voting: no name and no category needed!
app.post('/api/votes', (req, res) => {
  const { score, comment } = req.body;
  const numScore = parseInt(score, 10);

  if (isNaN(numScore) || numScore < 1 || numScore > 5) {
    return res.status(400).json({ error: 'Nilai voting harus antara 1 sampai 5.' });
  }

  const votes = loadVotes();
  const newVote: VoteItem = {
    id: 'vote-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
    score: numScore,
    comment: (comment && typeof comment === 'string') ? comment.trim().slice(0, 300) : '',
    createdAt: new Date().toISOString()
  };

  votes.push(newVote);
  saveVotes(votes);

  res.status(201).json({
    success: true,
    data: newVote,
    stats: calculateStats(votes)
  });
});

// Export CSV specifically formatted for Google Sheets
app.get('/api/votes/csv', (_req, res) => {
  const votes = loadVotes();
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="hasil-voting-kelas-x-h.csv"');

  let csv = '\uFEFF'; // BOM for Excel / Google Sheets UTF-8 compatibility
  csv += 'No,ID Suara,Tanggal (WIB),Jam (WIB),Skor (1-5),Ekspresi Senyuman,Catatan Pengunjung\n';

  votes.forEach((v, index) => {
    const d = new Date(v.createdAt);
    const dateStr = d.toLocaleDateString('id-ID', { timeZone: 'Asia/Jakarta' });
    const timeStr = d.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
    const smile = getSmileLabel(v.score);
    const cleanComment = (v.comment || '').replace(/"/g, '""');

    csv += `${index + 1},"${v.id}","${dateStr}","${timeStr}",${v.score},"${smile}","${cleanComment}"\n`;
  });

  res.send(csv);
});

// Reset votes endpoint if needed
app.post('/api/votes/reset', (_req, res) => {
  saveVotes([]);
  res.json({ success: true, stats: calculateStats([]) });
});

// Dev / Prod Vite serving
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(port), '0.0.0.0', () => {
    console.log(`Server Bazaar Kelas X-H running at http://0.0.0.0:${port}`);
  });
}

startServer();
