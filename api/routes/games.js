import { Router } from 'express';
import fs from 'fs/promises';
import path from 'path';

const router = Router();
const gamesFilePath = path.resolve('api', 'data/games.json'); // Dosya yolunu tanımlayın

router.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(gamesFilePath, 'utf8');
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    } catch (err) {
        res.status(500).json({ error: 'Veri okunamadı.' });
    }
});

export default router;
