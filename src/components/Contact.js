import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

// Componente Skeleton para o efeito de carregamento
const Skeleton = ({ className }) => (
  <div className={`bg-gray-300 animate-pulse ${className}`} />
);

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulação de carregamento (exemplo com 2 segundos)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-6 sm:px-8 lg:px-16">
      {isLoading ? (
        <>
          <Skeleton className="w-32 h-10 mb-6" />
          <Skeleton className="w-80 h-6 mb-12" />
          <div className="flex flex-wrap justify-center gap-6">
            {/* Skeleton dos ícones */}
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="w-10 h-10 rounded-full" />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Contato</h1>
          <p className="text-lg sm:text-xl mb-12 text-center max-w-2xl">
            Entre em contato comigo pelas redes sociais ou e-mail:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5515991495111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 transition-colors duration-300"
            >
              <FaWhatsapp size={40} className="hover:scale-110 transition-transform duration-300" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/cleberliim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <FaLinkedin size={40} className="hover:scale-110 transition-transform duration-300" />
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/users/cleberliim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
            >
              <FaDiscord size={40} className="hover:scale-110 transition-transform duration-300" />
            </a>

            {/* E-mail */}
            <a
              href="mailto:cleberliim@outlook.com"
              className="text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              <FaEnvelope size={40} className="hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
