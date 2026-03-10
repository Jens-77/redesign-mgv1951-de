import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Verein() {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)] flex flex-col">
      <Helmet>
        <title>Der Verein | MGV 1951 Wald-Michelbach</title>
        <meta name="description" content="Informationen über den Männergesangverein 1951 e.V. Wald-Michelbach." />
      </Helmet>
      
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Unser Verein</h1>
            <p className="text-xl text-gray-600">Tradition und Freude am Singen seit 1951.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-700 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <p className="mb-6">
              Der Männergesangverein 1951 e.V. wurde aus der Freude am gemeinsamen Chorgesang gegründet und ist seit vielen Jahrzehnten eine feste kulturelle Größe in Wald-Michelbach.
            </p>
            <p className="mb-6">
              Wir sind stolzes Mitglied im:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Sängerkreis Weschnitztal-Überwald e.V.</li>
              <li>Hessischen Sängerbund e.V.</li>
              <li>Deutschen Chorverband e.V.</li>
            </ul>
            <p>
              Ob traditionelle Volkslieder, moderne Arrangements oder festliche Sakralmusik – unser Repertoire ist bunt gemischt. Im Mittelpunkt stehen bei uns nicht nur der musikalische Anspruch, sondern auch die Geselligkeit, Kameradschaft und das Vereinsleben.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}