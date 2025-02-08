import express from 'express';
import cors from 'cors';
import searchRouter from './routes/search.router.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/search", searchRouter);
app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`);
});
