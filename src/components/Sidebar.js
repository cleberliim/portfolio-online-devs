import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Sidebar = () => {
  const [ loading, setLoading ] = useState(true);
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [ isOpen ]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre mim', path: '/about' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <div className="flex pt-10">
      <button
        className="lg:hidden p-3 focus:outline-none fixed top-2 left-2 z-50 bg-white rounded-full shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside className={`fixed top-0 left-0 w-64 lg:w-1/4 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between items-center py-8 lg:py-12   lg:px-8 z-40`}>
        <div className="flex flex-col items-center pt-28">
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
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))
            )}
          </nav>
        </div>

        <div className="flex flex-col items-center mt-6 text-center">
          <p className="text-gray-500 text-sm lg:text-base">
            &copy; developed by <span className="font-semibold">Cleber Lima</span>
          </p>

          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/cleberliim" className="text-gray-500 hover:text-black">
              <i className="fab fa-github text-2xl hover:text-gray-800"></i>
            </a>
            <a href="https://www.linkedin.com/in/cleberliim" className="text-blue-700 hover:text-blue-800">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="https://wa.me/+5515991495111" className="text-green-500 hover:text-green-600">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>
      </aside>

      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${isOpen ? 'ml-64' : 'ml-0'} lg:ml-64 p-4`}
      >
        {/* Conteúdo principal vai aqui */}
      </div>
    </div>
  );
};

export default Sidebar;
