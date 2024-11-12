import React from 'react';
import { FaWhatsapp, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-6">Contato</h1>
      <p className="text-lg mb-12">Entre em contato comigo pelas redes sociais ou e-mail:</p>
      <div className="flex space-x-6">
        {/* WhatsApp */}
        <a 
          href="https://wa.me/5515991495111" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-green-500 hover:text-green-700"
        >
          <FaWhatsapp size={40} />
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/cleberliim" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin size={40} />
        </a>

        {/* Discord */}
        <a 
          href="https://discord.com/users/cleberliim" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-600 hover:text-indigo-800"
        >
          <FaDiscord size={40} />
        </a>

        {/* E-mail */}
        <a 
          href="mailto:cleberliim@outlook.com" 
          className="text-red-500 hover:text-red-700"
        >
          <FaEnvelope size={40} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
