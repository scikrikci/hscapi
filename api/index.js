import express from "express";
import gamesRouter from './routes/games.js';
import hscWebVisitsRouter from './routes/hsc-web-visits.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json(['Hello World!']);
});


app.use('/games', gamesRouter);
app.use('/hsc-web-visits', hscWebVisitsRouter);


app.listen(PORT, () => {
    if (PORT === 3000) {
        console.log(`Server is running on the default port http://localhost:${PORT}`);
    } else {
        console.log(`Server is running on a custom port http://localhost:${PORT}`);
    }
});