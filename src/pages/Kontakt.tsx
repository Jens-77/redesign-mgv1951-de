import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)] flex flex-col">
      <Helmet>
        <title>Kontakt | MGV 1951 Wald-Michelbach</title>
        <meta name="description" content="Kontaktieren Sie den Männergesangverein 1951 e.V. Wald-Michelbach." />
      </Helmet>
      
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Kontakt aufnehmen</h1>
            <p className="text-xl text-gray-600">Wir freuen uns über Nachrichten von neuen Sängern, Fans und Freunden.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-start gap-6">
                <div className="bg-blue-50 text-[var(--color-primary)] p-4 rounded-xl">
                  <Mail size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">E-Mail schreiben</h3>
                  <a href="mailto:info@mgv1951.de" className="text-lg text-[var(--color-primary)] font-medium hover:underline">
                    info@mgv1951.de
                  </a>
                  <p className="text-gray-500 mt-2">Wir antworten in der Regel innerhalb von 2-3 Werktagen.</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-start gap-6">
                <div className="bg-blue-50 text-[var(--color-primary)] p-4 rounded-xl">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Post & Probenort</h3>
                  <address className="not-italic text-lg text-gray-700">
                    <strong>Überwälder Einhaus</strong><br/>
                    Ortskern<br/>
                    69483 Wald-Michelbach
                  </address>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6">Nachricht senden</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder="Dein Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder="deine@email.de" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all resize-none" placeholder="Wie können wir dir helfen?"></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="dsgvo" className="mt-1.5" required />
                  <label htmlFor="dsgvo" className="text-sm text-gray-500">
                    Ich willige ein, dass meine Daten zur Kontaktaufnahme gespeichert werden. Weitere Informationen finde ich in der <a href="/datenschutz" className="text-[var(--color-primary)] underline">Datenschutzerklärung</a>.
                  </label>
                </div>
                <button type="submit" className="w-full bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-colors shadow-md">
                  Absenden
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}