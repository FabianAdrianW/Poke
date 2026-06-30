"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ObrazkiPage() {
  const router = useRouter();
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setPokemons(Array.isArray(data) ? data : data.data || []))
      .catch(() => setPokemons([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page-section gallery-page">
      <div className="section-title">
        <div>
          <h1>Galeria Pokémon</h1>
          <p className="gallery-intro">Przesuwaj w dół po cyfrowej sali wystawowej i odkrywaj galerię Pokémonów jak muzealne obrazy.</p>
        </div>
      </div>

      {loading ? (
        <div className="card">
          <h2>Ładowanie galerii...</h2>
        </div>
      ) : (
        <div className="gallery-wall">
          {pokemons.map((p) => (
            <article key={p.id} className="gallery-card">
              <figure>
                <img src={p.image} alt={p.name} />
                <figcaption>{p.name}</figcaption>
              </figure>
              <div className="gallery-meta">
                <span>Typ: {p.type}</span>
                <span>ID: #{p.id}</span>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="hero-actions gallery-footer">
        <button type="button" className="button-secondary" onClick={() => router.back()}>
          Powrót
        </button>
      </div>
    </div>
  );
}
