import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'; // Certifique-se de importar o Skeleton
import 'react-loading-skeleton/dist/skeleton.css'; // Importar o CSS

const Sidebar = () => {
  const [loading, setLoading] = useState(true);

  // Simulando um carregamento de dados
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 segundos de carregamento para simulação
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre mim', path: '/about' },
    { name: 'Serviços', path: '/Services' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <aside className="bg-white w-full lg:w-1/4 h-full flex flex-col justify-center items-center py-8 lg:py-12 mx-4 lg:mx-8">
      <h2 className="text-2xl lg:text-3xl mb-4 tracking-widest font-black text-center">
        {loading ? <Skeleton width={150} /> : 'CLEBER LIMA'}
      </h2>
      <p className="text-gray-600 tracking-widest text-sm lg:text-base mb-10 text-center">
        {loading ? <Skeleton width={180} /> : 'Analista de Sistemas Jr'}
      </p>
      <nav className="flex flex-col items-center space-y-6 text-lg lg:text-xl">
        {loading ? (
          <Skeleton count={5} height={30} width={200} />
        ) : (
          navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold"
                  : "text-gray-700 hover:text-black"
              }
            >
              {link.name}
            </NavLink>
          ))
        )}
      </nav>

      <div className="flex flex-col items-center mt-12 text-center">
        <p className="text-gray-500 text-sm lg:text-base">
          &copy; developed by <span className="font-semibold">Cleber Lima</span>
        </p>

        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://github.com/cleberliim" className="text-gray-500 hover:text-black">
            <Skeleton width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/cleberliim" className="text-gray-500 hover:text-black">
            <Skeleton width={24} height={24} />
          </a>
          <a href="https://wa.me/+5515991495111" className="text-gray-500 hover:text-black">
            <Skeleton width={24} height={24} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
