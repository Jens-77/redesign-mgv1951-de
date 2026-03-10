import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const vorstandMembers = [
  { rolle: "1. Vorsitzender", name: "Bitte Namen einfügen" },
  { rolle: "2. Vorsitzender", name: "Bitte Namen einfügen" },
  { rolle: "Rechner", name: "Bitte Namen einfügen" },
  { rolle: "Schriftführer", name: "Bitte Namen einfügen" }
];

export default function Vorstand() {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)] flex flex-col">
      <Helmet>
        <title>Der Vorstand | MGV 1951 Wald-Michelbach</title>
        <meta name="description" content="Der Vorstand des MGV 1951 e.V. Wald-Michelbach." />
      </Helmet>
      
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Der Vorstand</h1>
            <p className="text-xl text-gray-600">Die treibenden Kräfte hinter dem MGV 1951.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vorstandMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
              >
                <div className="w-24 h-24 bg-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[var(--color-primary)] font-medium">{member.rolle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}