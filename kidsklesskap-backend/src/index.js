import "dotenv/config";
import express from "express";
import cors from "cors";
import auth from "./routes/auth.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// API routes
app.use("/api", auth);

app.listen(process.env.PORT, () => {
  console.log("✅ Backend running on http://localhost:" + process.env.PORT);
});
