"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/obrazki", label: "Galeria" },
  { href: "/pokedex", label: "Pokédex" },
  { href: "/users", label: "Lista" },
  { href: "/screensaver", label: "Wygaszacz" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isScreensaver = pathname === "/screensaver";

  if (isScreensaver) return null;

  return (
    <header className="site-header">
      <div className="site-nav">
        <div className="brand">
          <p className="brand-title">Pokemon Hub</p>
          <p className="brand-subtitle">Galeria i dane Pokémon w jednym miejscu</p>
        </div>

        <nav className="nav-links" aria-label="Główne menu">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
