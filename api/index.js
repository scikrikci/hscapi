import express from "express";
import gamesRouter from './routes/games.js';
import hscWebVisitCountRouter from './routes/hsc-web-visit-count.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json(['Hello World!']);
});


app.use('/games', gamesRouter);
app.use('/visit-count', hscWebVisitCountRouter);


app.listen(PORT, () => {
    if (PORT === 3000) {
        console.log(`Server is running on the default port http://localhost:${PORT}`);
    } else {
        console.log(`Server is running on a custom port http://localhost:${PORT}`);
    }
});