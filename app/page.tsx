"use client"
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const startScreensaver = () => {
    router.push("/screensaver");
  };

  return (
    <div>
      <section className="hero">
        <div>
          <p className="eyebrow">Witamy w Pokemon Hub</p>
          <h1 className="hero-title">
            Odkryj galerię, dane i wygaszacz Pokémon w jednym miejscu.
          </h1>
          <div className="hero-actions">
            <button type="button" className="button-primary" onClick={() => router.push("/obrazki")}>Przejdź do galerii</button>
            <button type="button" className="button-secondary" onClick={() => router.push("/pokedex")}>Otwórz Pokédex</button>
          </div>
        </div>

        <div className="card card-hero">
          <h2>Sprawdź sekcje</h2>
          <div className="card-hero-grid">
            <div className="info-tile">
              <strong>Galeria</strong>
              <span>Wszystkie Pokémony w jednym widoku.</span>
            </div>
            <div className="info-tile">
              <strong>Pokédex</strong>
              <span>Dane i statystyki dla każdego Pokémon.</span>
            </div>
            <div className="info-tile">
              <strong>Lista</strong>
              <span>Kompletny przegląd Pokémonów.</span>
            </div>
            <div className="info-tile">
              <strong>Wygaszacz</strong>
              <span>Pełnoekranowa prezentacja.</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
