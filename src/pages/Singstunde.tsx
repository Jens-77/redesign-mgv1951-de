import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Singstunde() {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)] flex flex-col">
      <Helmet>
        <title>Singstunde | MGV 1951 Wald-Michelbach</title>
        <meta name="description" content="Informationen zu unseren wöchentlichen Singstunden. Komm vorbei und sing mit!" />
      </Helmet>
      
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Unsere Singstunde</h1>
            <p className="text-xl text-gray-600">Singen befreit und macht Spaß. Komm einfach mal vorbei!</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-[var(--color-primary)] rounded-xl">
                    <CalendarIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Wann?</h3>
                    <p className="text-gray-600 text-lg">Jeden Freitag</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-[var(--color-primary)] rounded-xl">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Uhrzeit</h3>
                    <p className="text-gray-600 text-lg">18:45 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-[var(--color-primary)] rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Wo?</h3>
                    <p className="text-gray-600 text-lg">Überwälder Einhaus, Wald-Michelbach</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Interesse?</h3>
                <p className="text-gray-600 mb-6">
                  Du singst gerne unter Dusche, aber am liebsten in Gesellschaft? Dann bist du bei uns genau richtig. Notenkenntnisse sind keine Voraussetzung!
                </p>
                <a href="/kontakt" className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition-colors w-full text-center">
                  Schreib uns eine Nachricht
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}