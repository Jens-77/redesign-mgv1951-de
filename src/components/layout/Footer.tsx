import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-white font-heading text-xl font-bold mb-4">MGV 1951</h3>
          <p className="mb-4">Männergesangverein 1951 e.V.<br/> 69483 Wald-Michelbach</p>
          <a href="mailto:info@mgv1951.de" className="text-[var(--color-accent1)] hover:text-white transition-colors">info@mgv1951.de</a>
        </div>
        <div>
          <h3 className="text-white font-heading text-xl font-bold mb-4">Quick-Links</h3>
          <ul className="space-y-2">
            <li><a href="/verein" className="hover:text-white transition-colors">Der Verein</a></li>
            <li><a href="/singstunde" className="hover:text-white transition-colors">Singstunden</a></li>
            <li><a href="/termine" className="hover:text-white transition-colors">Veranstaltungen & Termine</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-heading text-xl font-bold mb-4">Rechtliches</h3>
          <ul className="space-y-2">
            <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
            <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutzerklärung</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center">
        <p>© {new Date().getFullYear()} Männergesangverein 1951 e.V. Wald-Michelbach. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
