import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)]">
      <Helmet>
        <title>MGV 1951 Wald-Michelbach - Startseite | Männergesangverein</title>
        <meta name="description" content="Männergesangverein 1951 e.V. in Wald-Michelbach. Singstunden, Termine, Vorstand. Bei uns wird Freude und Gemeinschaft noch GROß geschrieben." />
      </Helmet>
      
      <header className="bg-[var(--color-primary)] text-white p-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-heading text-2xl font-bold flex items-center gap-4">
            <span>MGV 1951</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="/" className="text-[var(--color-accent1)] font-semibold border-b-2 border-[var(--color-accent1)] pb-1 transition-colors">Startseite</a>
            <a href="/verein" className="hover:text-[var(--color-accent1)] transition-colors pb-1 border-b-2 border-transparent hover:border-[var(--color-accent1)]">Der Verein</a>
            <a href="/vorstand" className="hover:text-[var(--color-accent1)] transition-colors pb-1 border-b-2 border-transparent hover:border-[var(--color-accent1)]">Der Vorstand</a>
            <a href="/chor" className="hover:text-[var(--color-accent1)] transition-colors pb-1 border-b-2 border-transparent hover:border-[var(--color-accent1)]">Der Chor</a>
            <a href="/chorleiter" className="hover:text-[var(--color-accent1)] transition-colors pb-1 border-b-2 border-transparent hover:border-[var(--color-accent1)]">Der Chorleiter</a>
            <a href="/singstunde" className="hover:text-[var(--color-accent1)] transition-colors pb-1 border-b-2 border-transparent hover:border-[var(--color-accent1)]">Singstunde</a>
            <a href="/termine" className="hover:text-[var(--color-accent1)] transition-colors pb-1 border-b-2 border-transparent hover:border-[var(--color-accent1)]">Termine</a>
            <a href="/links" className="hover:text-[var(--color-accent1)] transition-colors pb-1 border-b-2 border-transparent hover:border-[var(--color-accent1)]">Links</a>
            <a href="/kontakt" className="bg-[var(--color-accent2)] text-white px-5 py-2 rounded-full font-bold hover:shadow-lg transition-transform hover:-translate-y-0.5 ml-4">Kontakt</a>
          </nav>
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-32 px-4 text-center bg-gray-50 border-b overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              Männergesangverein <br/>
              <span className="text-gray-800">1951 e.V. Wald-Michelbach</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-neutral)] mb-6 font-medium">
              ...bei uns wird Freude und Gemeinschaft noch GROß geschrieben...
            </p>
            <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-500">
              Mitglied des Sängerkreis Weschnitztal-Überwald e.V., dem Hessischen Sängerbundes e.V. im Deutschen Chorverband e.V.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/termine" className="bg-[var(--color-accent2)] text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center">
                Termine ansehen
              </a>
              <a href="/verein" className="bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-center">
                Unser Verein
              </a>
            </div>
          </motion.div>
        </section>

        {/* Info Highlights Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="inline-block bg-blue-100 text-[var(--color-primary)] p-4 rounded-2xl mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Nächste Singstunde</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Jeden <strong className="text-gray-900">Freitag um 18:45 Uhr</strong> findet unsere gemeinsame Singstunde im Überwälder Einhaus statt.
              </p>
              <a href="/singstunde" className="text-[var(--color-primary)] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Erfahre mehr <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--color-primary)] text-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow"
            >
              <div className="inline-block bg-blue-800 text-blue-200 p-4 rounded-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Werde Mitglied</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Neue Sänger sind bei uns jederzeit herzlich willkommen. Schau einfach vorbei oder kontaktiere uns vorab – Singen verbindet!
              </p>
              <a href="/kontakt" className="bg-white text-[var(--color-primary)] font-bold px-6 py-3 rounded-full flex items-center gap-2 max-w-fit hover:bg-gray-100 transition-colors">
                Kontakt aufnehmen <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-heading text-xl font-bold mb-4">MGV 1951</h3>
            <p className="mb-4">Männergesangverein 1951 e.V.<br/> Wald-Michelbach</p>
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
          <p>© 2026 Männergesangverein 1951 e.V. Wald-Michelbach. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}

