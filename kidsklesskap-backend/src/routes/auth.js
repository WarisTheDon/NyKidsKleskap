import express from "express";
import bcrypt from "bcryptjs";
import { db } from "../db/client.js";
import { users } from "../db/schema.js";

const router = express.Router();

// REGISTER
router.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  await db.insert(users).values({
    name,
    email,
    passwordHash: hash,
  });

  return res.json({ ok: true });
});

// LOGIN
router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const u = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.email, email)
  });

  if (!u) return res.status(400).json({ error: "Invalid email/password" });

  const match = await bcrypt.compare(password, u.passwordHash);

  if (!match) return res.status(400).json({ error: "Invalid email/password" });

  return res.json({ ok: true, user: u });
});

export default router;
