import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express on Vercel!' });
});

// Yerel geliştirme sırasında port belirtin
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
