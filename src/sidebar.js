import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faVimeoV, faTwitter, faSkype } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-gray-100 flex h-screen">
      {/* Sidebar */}
      <aside className="bg-white w-1/4 flex flex-col items-center py-8">
        <h1 className="text-4xl font-bold mb-12">ARLO</h1>
        
        <nav className="flex flex-col items-center space-y-4">
          <a href="#" className="text-gray-700 hover:text-black">Home</a>
          <a href="#" className="text-gray-700 hover:text-black">Sobre</a>
          <a href="#" className="text-gray-700 hover:text-black">Serviços</a>
          <a href="#" className="text-gray-700 hover:text-black">Portfolio</a>
          <a href="#" className="text-gray-700 hover:text-black">Contato</a>
          
        </nav>

        <div className="mt-auto text-center">
          <p className="text-gray-500 mt-12">&copy; 2024 by <span className="font-semibold">Cleber Lima</span></p>
          <p className="text-gray-500">Todos direitos Reservados</p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-gray-500 hover:text-black"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FontAwesomeIcon icon={faVimeoV} /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FontAwesomeIcon icon={faSkype} /></a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center">
        <div className="rounded-full overflow-hidden w-24 h-24 mb-6">
          <img src="https://via.placeholder.com/100" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-3xl font-bold">CLEBER LIMA</h2>
        <p className="text-gray-500 mt-2">Analista de Sistemas</p>
      </main>
    </div>
  );
};

export default Sidebar;