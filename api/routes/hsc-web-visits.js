import { Router } from 'express';

let count = 0;

const router = Router();

router.get('/visit', (req, res) => {
    count++;
    res.json({ visitCount: count });
})