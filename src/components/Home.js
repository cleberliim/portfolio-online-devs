import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Skeleton Loader
const SkeletonLoader = () => (
  <div className="animate-pulse">
    {/* Foto de perfil */}
    <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gray-300"></div>
    <div className="mt-4 w-32 h-6 bg-gray-300 rounded"></div>
    <div className="mt-2 w-48 h-4 bg-gray-300 rounded"></div>
    {/* Ícones de redes sociais */}
    <div className="flex justify-center space-x-4 mt-4">
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
    </div>
  </div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento de dados (como uma requisição API)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Define o tempo para o skeleton ser mostrado
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 space-y-8">
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          {/* Foto de perfil */}
          <img
            className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4"
            src="https://media.licdn.com/dms/image/v2/D4D35AQHgDto9brXHmg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1731162392985?e=1732035600&v=beta&t=R9I3sFBMWUwHNu-dj-wYi48hAe-2TvHx8r-os-HmDms"
            alt="Imagem de Perfil"
          />
          <h2 className="text-3xl sm:text-4xl font-black tracking-widest">CLEBER LIMA</h2>
          <p className="text-gray-600 tracking-widest text-base sm:text-lg">Analista de Sistemas Jr | Developer Back End</p>

          <div className="flex justify-center space-x-4 mt-4">
            {/* Ícones de redes sociais */}
            <a
              href="https://github.com/cleberliim"
              className="text-gray-500 hover:text-black text-2xl sm:text-3xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/cleberliim"
              className="text-gray-500 hover:text-black text-2xl sm:text-3xl"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://wa.me/+5515991495111"
              className="text-gray-500 hover:text-black text-2xl sm:text-3xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>

          {/* Botão de "Vamos conversar" para WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=5515991495111"
            className="fixed bottom-6 right-6 flex items-center bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            <span>Vamos conversar?</span>
          </a>
        </>
      )}
    </div>
  );
};

export default Home;
