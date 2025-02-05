import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Sidebar = () => {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    // Simula o carregamento de dados (como uma chamada de API ou algo do tipo)
    const timer = setTimeout(() => {
      setLoading(false); // Após 1 segundos, o carregamento é concluído
    }, 1000);

    // Limpeza do timer para evitar efeitos colaterais
    return () => clearTimeout(timer);
  }, []); // O array vazio aqui garante que o useEffect só seja executado uma vez

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre mim', path: '/about' },
    { name: 'Serviços', path: '/services' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <aside className="  w-full lg:w-1/4 h-screen flex flex-col justify-center items-center py-8 lg:py-12 mx-4 lg:mx-8">
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
                isActive ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
              }
            >
              {link.name}
            </NavLink>
          ))
        )}
      </nav>

      {/* Redes sociais */}
      <div className="flex flex-col items-center mt-12 text-center">
        <p className="text-gray-500 text-sm lg:text-base">
          &copy; developed by <span className="font-semibold">Cleber Lima</span>
        </p>

        <div className="flex justify-center space-x-4 mt-6">
          {/* Redes sociais com cores */}
          <a href="https://github.com/cleberliim" className="text-gray-500 hover:text-black">
            <i className="fab fa-github text-3xl text-black hover:text-gray-800"></i>
          </a>
          <a href="https://www.linkedin.com/in/cleberliim" className="text-blue-700 hover:text-blue-800">
            <i className="fab fa-linkedin-in  text-3xl text-blue-700 hover:text-blue-800"></i>
          </a>
          <a href="https://wa.me/+5515991495111" className="text-green-500 hover:text-green-600">
            <i className="fab fa-whatsapp text-3xl text-green-500 hover:text-green-600"></i>
          </a>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;
