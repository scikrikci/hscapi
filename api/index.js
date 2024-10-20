import express from "express";
import getGreeting from "./greetings";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express on Vercel!' });
});

app.get('/greet', (req, res) => {
    res.send(getGreeting());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
