import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { auth } from './routes/auth.js';

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api", auth); // /api/register

app.listen(process.env.PORT, () => {
  console.log("API running on http://localhost:" + process.env.PORT);
});
