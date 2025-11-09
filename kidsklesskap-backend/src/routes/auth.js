import express from 'express';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { db } from '../db/client.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';

export const auth = express.Router();

const RegisterSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

auth.post('/register', async (req, res) => {
  try {
    const { name, email, password } = RegisterSchema.parse(req.body);

    const existing = await db.select().from(users).where(eq(users.email, email));
    if (existing.length > 0) return res.status(409).json({ error: 'Email already registered' });

    const passwordHash = await bcrypt.hash(password, 10);

    const inserted = await db.insert(users).values({ name, email, passwordHash }).returning({
      id: users.id,
      name: users.name,
      email: users.email
    });

    return res.status(201).json({ user: inserted[0] });
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
});
