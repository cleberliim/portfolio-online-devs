import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import styles from './Portfolio.module.css'; // Importando o CSS Module

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
    title: 'Sistema de CRUD',
    description: 'Sistema básico de CRUD (Create, Read, Update, Delete) com Flask e SQLite.',
    category: 'Back End',
    technologies: [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'Flask', icon: 'fas fa-cogs' },
      { name: 'SQLite', icon: 'fas fa-database' }
    ],
    github: 'https://github.com/seu-usuario/projeto-crud',
  },
  {
    id: 3,
    title: 'Projeto de Microserviços',
    description: 'Arquitetura de microserviços utilizando Docker e Spring Boot.',
    category: 'Back End',
    technologies: [
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'Spring Boot', icon: 'fas fa-cogs' },
      { name: 'RabbitMQ', icon: 'fas fa-rabbit' }
    ],
    github: 'https://github.com/seu-usuario/projeto-microservicos',
  },
  {
    id: 4,
    title: 'API de Pagamentos',
    description: 'Integração com a API de pagamentos Stripe utilizando Ruby on Rails.',
    category: 'Back End',
    technologies: [
      { name: 'Ruby on Rails', icon: 'fas fa-gem' },
      { name: 'Stripe', icon: 'fas fa-credit-card' },
      { name: 'PostgreSQL', icon: 'fas fa-database' }
    ],
    github: 'https://github.com/seu-usuario/projeto-api-pagamentos',
  },
  {
    id: 5,
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
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((project) => project.category === selectedCategory);

  return (
    <div className="  px-4 sm:px-6 lg:px-8  h bg-white pt-14">

      {/* Filtros de Categoria */}
      <div className="flex justify-center space-x-6 mb-8">
        {['Todos', 'Back End', 'Front End', 'APIs'].map((category) => (
          <button
            key={category}
            onClick={() => filterProjects(category)}
            className={`text-lg font-medium py-2 px-4 rounded-lg  ${
              selectedCategory === category ? 'bg-gray-900 text-white' : ' text-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Contêiner rolável para os projetos */}
      <div className={`${styles['project-container']} ${styles['scrollbar-hidden']}`}>
        {/* Galeria de Portfólio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="relative p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
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

      {/* Botão de "Solicitar Orçamento" para WhatsApp */}
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
