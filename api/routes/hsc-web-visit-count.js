import { Router } from 'express';

let count = 0;

const router = Router();

router.get('/', (req, res) => {
    res.json({ visitCount: count });
});

// Tarayıcı kapandığında veya sayfa yenilendiğinde çağrılacak endpoint
router.post('/increment-count', (req, res) => {
    count++;
    res.status(200).send({ visitCount: count });
});
export default router;
