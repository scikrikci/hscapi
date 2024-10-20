import { Router } from 'express';

let count = 0;

const router = Router();

router.get('/hsc-web-visit-count', (req, res) => {
    count++;
    res.json({ visitCount: count });
})