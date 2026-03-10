import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)]">
      <Helmet>
        <title>MGV 1951 Wald-Michelbach - Startseite | Männergesangverein</title>
        <meta name="description" content="Männergesangverein 1951 e.V. in Wald-Michelbach. Singstunden, Termine, Vorstand." />
      </Helmet>
      
      <header className="bg-[var(--color-primary)] text-white p-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-heading text-2xl font-bold">MGV 1951</div>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="hover:text-[var(--color-accent1)] transition-colors">Startseite</a>
            <a href="/verein" className="hover:text-[var(--color-accent1)] transition-colors">Der Verein</a>
            <a href="/vorstand" className="hover:text-[var(--color-accent1)] transition-colors">Der Vorstand</a>
            <a href="/kontakt" className="hover:text-[var(--color-accent1)] transition-colors">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 px-4 text-center bg-gray-50 border-b">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Männergesangverein 1951 e.V. Wald-Michelbach</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-[var(--color-neutral)]">
            Mitglied des Sängerkreises Weschnitztal-Überwald e.V., Hessischer Sängerbund e.V. im Deutschen Chorverband e.V.
          </p>
          <button className="bg-[var(--color-accent2)] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-transform hover:-translate-y-1">
            Termine ansehen
          </button>
        </section>
      </main>

      <footer className="bg-gray-100 py-12 mt-20 text-center border-t">
        <div className="text-[var(--color-neutral)]">
          <p>© 2026 Männergesangverein 1951 e.V. Wald-Michelbach</p>
        </div>
      </footer>
    </div>
  );
}
