"use client";
import { useState, useEffect } from "react";

export default function PokedexSlajd() {
  const [users, setUsers] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (users.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % users.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [users]);

  if (users.length === 0)
    return (
      <div className="page-section">
        <div className="card">
          <h2>Ładowanie Pokémonów...</h2>
        </div>
      </div>
    );

  const current = users[currentIndex];

  return (
    <div className="page-section">
      <div className="section-title">
        <h1>Pokédex</h1>
      </div>

      <div className="card-grid">
        <article className="card image-frame">
          <img src={current.image} alt={current.name} />
        </article>

        <article className="card">
          <h2>{current.name}</h2>
          <p>{current.description ?? "Statystyki i podstawowe dane."}</p>
          <div className="stat-grid">
            <div className="stat">
              <strong>Nr</strong>
              <span>{current.id}</span>
            </div>
            <div className="stat">
              <strong>Typ</strong>
              <span>{current.type}</span>
            </div>
            <div className="stat">
              <strong>HP</strong>
              <span>{current.hp}</span>
            </div>
            <div className="stat">
              <strong>Attack</strong>
              <span>{current.attack}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
