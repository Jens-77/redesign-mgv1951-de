import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { name: 'Startseite', path: '/' },
    { name: 'Der Verein', path: '/verein' },
    { name: 'Der Vorstand', path: '/vorstand' },
    { name: 'Der Chor', path: '/chor' },
    { name: 'Der Chorleiter', path: '/chorleiter' },
    { name: 'Singstunde', path: '/singstunde' },
    { name: 'Termine', path: '/termine' },
    { name: 'Links', path: '/links' },
  ];

  return (
    <header className="bg-[var(--color-primary)] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="font-heading text-2xl font-bold flex items-center gap-4">
          <span>MGV 1951 e.V.</span>
        </a>
        
        <nav className="hidden lg:flex items-center gap-6">
          {links.map(link => (
            <a 
              key={link.path} 
              href={link.path} 
              className="text-sm font-medium hover:text-[var(--color-accent1)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/kontakt" 
            className="bg-[var(--color-accent2)] text-white px-5 py-2 rounded-full font-bold hover:bg-red-700 transition-colors ml-4 text-sm"
          >
            Kontakt
          </a>
        </nav>

        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[var(--color-primary)] border-t border-blue-900 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {links.map(link => (
                <a 
                  key={link.path} 
                  href={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-[var(--color-accent1)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/kontakt" 
                onClick={() => setIsOpen(false)}
                className="bg-[var(--color-accent2)] text-white px-5 py-3 rounded-full font-bold text-center mt-4 text-lg"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
