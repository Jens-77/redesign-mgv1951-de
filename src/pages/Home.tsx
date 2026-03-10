import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Music, Users, Calendar } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)] flex flex-col">
      <Helmet>
        <title>MGV 1951 Wald-Michelbach - Startseite | Männergesangverein</title>
        <meta name="description" content="Männergesangverein 1951 e.V. in Wald-Michelbach. Singstunden, Termine, Vorstand. Bei uns wird Freude und Gemeinschaft noch GROß geschrieben." />
      </Helmet>
      
      <Header />

      <main className="flex-1">
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
              Mitglied des Sängerkreises Weschnitztal-Überwald e.V., dem Hessischen Sängerbundes e.V. im Deutschen Chorverband e.V.
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
              className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Music size={120} />
              </div>
              <div className="inline-block bg-blue-100 text-[var(--color-primary)] p-4 rounded-2xl mb-6 relative z-10">
                 <Calendar size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 relative z-10">Nächste Singstunde</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed relative z-10">
                Jeden <strong className="text-gray-900">Freitag um 18:45 Uhr</strong> findet unsere gemeinsame Singstunde im Überwälder Einhaus statt.
              </p>
              <a href="/singstunde" className="text-[var(--color-primary)] font-bold flex items-center gap-2 hover:gap-3 transition-all relative z-10 w-fit">
                Erfahre mehr <span className="text-xl">→</span>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--color-primary)] text-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Users size={120} />
              </div>
              <div className="inline-block bg-blue-800 text-blue-200 p-4 rounded-2xl mb-6 relative z-10">
                <Users size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white relative z-10">Werde Mitglied</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed relative z-10">
                Neue Sänger sind bei uns jederzeit herzlich willkommen. Schau einfach vorbei oder kontaktiere uns vorab – Singen verbindet!
              </p>
              <a href="/kontakt" className="bg-white text-[var(--color-primary)] font-bold px-6 py-3 rounded-full flex items-center gap-2 max-w-fit hover:bg-gray-100 transition-colors relative z-10">
                Kontakt aufnehmen <span className="text-xl">→</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
