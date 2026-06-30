"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ScreenSaver() {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setUsers(Array.isArray(data) ? data : data.data || []));
  }, []);

  useEffect(() => {
    if (users.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % users.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [users]);

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.warn("Fullscreen error", error);
    }
  };

  if (users.length === 0) {
    return (
      <div className="page-section" style={{ padding: 0, background: "#050816", minHeight: "100vh" }}>
        <div className="card" style={{ background: "transparent", border: "none", boxShadow: "none", color: "white" }}>
          <h2>Ładowanie wygaszacza...</h2>
        </div>
      </div>
    );
  }

  const current = users[currentIndex];

  return (
    <div
      className="page-section"
      style={{
        padding: 0,
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #202a44, #050816 70%)",
        color: "white",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="card" style={{ maxWidth: "740px", width: "100%", textAlign: "center", background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}>
        <h1 style={{ color: "#f8fafc" }}>{current.name}</h1>
        <div className="image-frame" style={{ borderRadius: "28px", overflow: "hidden", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <img src={current.image} alt={current.name} style={{ width: "100%", maxWidth: "360px" }} />
        </div>
        <div className="stat-grid" style={{ marginTop: "22px" }}>
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
        <div className="hero-actions" style={{ justifyContent: "center", gap: "14px", marginTop: "24px", flexWrap: "wrap" }}>
          <button type="button" className="button-primary" onClick={toggleFullscreen}>
            {isFullscreen ? "Wyjdź z pełnego ekranu" : "Pełny ekran"}
          </button>
          <button type="button" className="button-secondary" onClick={() => router.back()}>
            Wróć do strony
          </button>
        </div>
      </div>
    </div>
  );
}
