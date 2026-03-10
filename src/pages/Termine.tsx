import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const termine = [
  { datum: "Fr, 16. Mai 2026", uhrzeit: "18:45 Uhr", event: "Reguläre Singstunde", ort: "Überwälder Einhaus" },
  { datum: "Sa, 13. Juni 2026", uhrzeit: "19:00 Uhr", event: "Sommerkonzert des Sängerkreises", ort: "Bürgerhaus Wald-Michelbach" },
  { datum: "So, 12. Juli 2026", uhrzeit: "11:00 Uhr", event: "Singen am Gassenmarkt", ort: "Ortskern Wald-Michelbach" },
  { datum: "So, 20. Dez 2026", uhrzeit: "16:00 Uhr", event: "Weihnachtliches Chorsingen", ort: "Evangelische Kirche" }
];

export default function Termine() {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)] flex flex-col">
      <Helmet>
        <title>Termine | MGV 1951 Wald-Michelbach</title>
        <meta name="description" content="Alle aktuellen Termine und Veranstaltungen des MGV 1951 e.V. Wald-Michelbach im Überblick." />
      </Helmet>
      
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Unsere Termine</h1>
            <p className="text-xl text-gray-600">Wir freuen uns auf Ihren Besuch bei unseren Auftritten.</p>
          </motion.div>

          <div className="space-y-6">
            {termine.map((termin, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-50 text-[var(--color-primary)] p-4 rounded-xl flex-shrink-0">
                  <Calendar size={32} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-[var(--color-accent2)] mb-1">
                    {termin.datum} • {termin.uhrzeit}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{termin.event}</h3>
                  <p className="text-gray-600 flex items-center gap-2">
                    📍 {termin.ort}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 italic">Änderungen vorbehalten. Bitte achten Sie auch auf Ankündigungen in der lokalen Presse.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}