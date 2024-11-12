import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
 
// Importe outros componentes conforme necessário
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <motion.div 
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -50 }} 
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                </motion.div>
              } 
            />
            <Route 
              path="/about" 
              element={
                <motion.div 
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -50 }} 
                  transition={{ duration: 0.3 }}
                >
                  <About />
                </motion.div>
              } 
            />
             <Route 
              path="/services" 
              element={
                <motion.div 
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -50 }} 
                  transition={{ duration: 0.3 }}
                >
                  <Services />
                </motion.div>
              } 
            />
            <Route 
              path="/portfolio" 
              element={
                <motion.div 
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -50 }} 
                  transition={{ duration: 0.3 }}
                >
                  <Portfolio />
                </motion.div>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <motion.div 
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -50 }} 
                  transition={{ duration: 0.3 }}
                >
                  <Contact />
                </motion.div>
              } 
            />
            
            {/* Adicione outras rotas com animações aqui */}
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
