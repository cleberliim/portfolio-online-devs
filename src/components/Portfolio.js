// src/components/Portfolio.js
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import SkeletonCard from './SkeletonCard'; // Certifique-se de que o caminho está correto
import styles from './Portfolio.module.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Projeto API de Autenticação',
    description: 'Uma API de autenticação simples usando JWT para garantir segurança.',
    category: 'Back End',
    technologies: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express', icon: 'fas fa-cogs' },
      { name: 'JWT', icon: 'fas fa-lock' },
      { name: 'MongoDB', icon: 'fas fa-database' }
    ],
    github: 'https://github.com/seu-usuario/projeto-api-autenticacao',
  },
  {
    id: 2,
    title: 'Projeto Front End - E-commerce',
    description: 'Um e-commerce simples utilizando React.',
    category: 'Front End',
    technologies: [
      { name: 'React', icon: 'fab fa-react' },
      { name: 'CSS', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js-square' },
    ],
    github: 'https://github.com/seu-usuario/projeto-ecommerce',
  },
  {
    id: 3,
    title: 'Projeto API de Gestão de Usuários',
    description: 'Uma API para gerenciar usuários com Node.js e MongoDB.',
    category: 'Back End',
    technologies: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'MongoDB', icon: 'fas fa-database' },
    ],
    github: 'https://github.com/seu-usuario/projeto-gestao-usuarios',
  },
  {
    id: 4,
    title: 'Projeto APIs de Pagamento',
    description: 'Integração com APIs de pagamento como Stripe e PayPal.',
    category: 'APIs',
    technologies: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Stripe', icon: 'fab fa-stripe' },
      { name: 'PayPal', icon: 'fab fa-paypal' },
    ],
    github: 'https://github.com/seu-usuario/projeto-pagamentos',
  },
];


const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter((project) => project.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white pt-14">
      <div className="flex justify-center space-x-6 mb-8">
        {['Todos', 'Back End', 'Front End', 'APIs'].map((category) => (
          <button
            key={category}
            onClick={() => filterProjects(category)}
            className={`text-lg font-medium py-2 px-4 rounded-lg ${selectedCategory === category ? 'bg-gray-900 text-white' : 'text-gray-600'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={`${styles['project-container']} ${styles['scrollbar-hidden']}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
            : filteredProjects.map((item) => (
              <div key={item.id} className="relative p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {item.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <i className={`${tech.icon} text-gray-600`}></i>
                      <span className="text-sm text-gray-500">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  <i className="fab fa-github mr-2"></i>
                  Ver no GitHub
                </a>
              </div>
            ))}
        </div>
      </div>

      <a
        href="https://wa.me/+5515991495111"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-full flex items-center shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <FaWhatsapp size={24} className="mr-2" />
        Solicitar Orçamento
      </a>
    </div>
  );
};

export default Portfolio;
