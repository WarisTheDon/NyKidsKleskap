import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/auth/register", {   // <-- denne er riktig nå
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    console.log(data);
    alert("Bruker registrert!");
  }

  return (
    <form onSubmit={handleRegister} style={{ padding:"2rem" }}>
      <h2>Registrer bruker</h2>

      <input placeholder="Navn" value={name} onChange={e => setName(e.target.value)} /><br /><br />
      <input placeholder="Epost" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
      <input placeholder="Passord" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />

      <button type="submit">Registrer</button>
    </form>
  );
}
