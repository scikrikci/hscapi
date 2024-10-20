import express from "express";
import gamesRouter from './routes/games.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json(['Hello World!']);
});


app.use('/games', gamesRouter);

app.listen(PORT, () => {
    if (PORT === 3000) {
        console.log(`Server is running on the default port http://localhost:${PORT}`);
    } else {
        console.log(`Server is running on a custom port http://localhost:${PORT}`);
    }
});