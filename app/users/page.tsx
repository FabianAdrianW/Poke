"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setUsers(Array.isArray(data) ? data : data.data || []);
      })
      .catch((err) => setError(err.message || "Błąd ładowania danych"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="page-section">
        <div className="card">
          <h2>Ładowanie listy Pokémon...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-section">
        <div className="card">
          <h2>Błąd</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-section">
      <div className="section-title">
        <h1>Lista Pokémon</h1>
      </div>

      <div className="list-grid">
        {users.map((p: any) => (
          <article key={p.id} className="card pokemon-card">
            <div>
              <h3>{p.name}</h3>
              <p>Typ: {p.type}</p>
              <p>HP: {p.hp}</p>
              <p>Attack: {p.attack}</p>
            </div>
            <img src={p.image} alt={p.name} />
          </article>
        ))}
      </div>
    </div>
  );
}
