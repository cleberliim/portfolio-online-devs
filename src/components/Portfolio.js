import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import SkeletonCard from "./SkeletonCard";

const portfolioItems = [
  {
    id: 1,
    title: "Projeto API de Autenticação",
    description:
      "Este é um projeto de API simples para autenticação de usuários utilizando JWT (JSON Web Token). Ele permite que os usuários se registrem, façam login e acessem rotas protegidas. A API é construída com Express.js e documentada de maneira interativa usando Swagger.",
    category: "Back End",
    technologies: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Express", icon: "fas fa-cogs" },
      { name: "JWT", icon: "fas fa-lock" },
      { name: "Swagger", icon: "fa-solid fa-bars-staggered" },
    ],
    github: "https://github.com/cleberliim/my-auth-api",
  },
  {
    id: 2,
    title: "Site - AmaOcupacional",
    description: "Um site simples comercial.",
    category: "Front End",
    technologies: [
      { name: "PHP", icon: "fa-brands fa-php" },
      { name: "TawindCss", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "API MAPS", icon: "fa-solid fa-map" },
    ],
    github: "https://www.amaocupacional.com/",
  },
  {
    id: 3,
    title: "Site - BlackRec",
    description: "Uma API para gerenciar usuários com Node.js e MongoDB.",
    category: "Front End",
    technologies: [
      { name: "PHP", icon: "fa-brands fa-php" },
      { name: "TawindCss", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "API MAPS", icon: "fa-solid fa-map" },
    ],
    github: "https://blackrecprod.com.br/",
  },
  {
    id: 4,
    title: "Projeto API de Gestão de Usuários",
    description: "Uma API para gerenciar usuários com Node.js e MongoDB.",
    category: "Back End",
    technologies: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "MongoDB", icon: "fas fa-database" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "Express", icon: "fas fa-cogs" },
      { name: "JWT", icon: "fas fa-lock" },
    ],
    github: "https://github.com/cleberliim/Api-user-manager",
  },
  {
    id: 6,
    title: "Projeto CRUD Simples",
    description:
      "Um projeto CRUD completo que realiza operações de criação, leitura, atualização e exclusão de dados. Ideal para gerenciar informações de forma simples e eficiente.",
    category: "Back End",
    technologies: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "Express" },
    ],
    github: "https://github.com/cleberliim/onfinances-backend",
  },

  {
    id: 7,
    title: "Landing page for Developer Back-End",
    description:
      "Landing page para Desenvolvedores Back-End que precisam mostrar seu portfólio sem perder tempo com design.",
    category: "Front End",
    technologies: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "React.js", icon: "fa-brands fa-react" },
      { name: "Vercel", icon: "fa-brands fa-octopus-deploy" },
      { name: "TawindCss", icon: "fa-regular fa-file-code" },
    ],
    github: "https://github.com/cleberliim/my-portfolio",
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
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

  const filteredProjects =
    selectedCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter(
        (project) => project.category === selectedCategory
      );

  return (
    <div className="h-screen flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white pt-14">
      {/* Cabeçalho fixo */}
      <div className="flex justify-center space-x-6 mb-4">
        {["Todos", "Back End", "Front End"].map((category) => (
          <button
            key={category}
            onClick={() => filterProjects(category)}
            className={`text-lg font-medium py-2 px-4 rounded-lg ${selectedCategory === category
              ? "bg-gray-900 text-white"
              : "text-gray-600"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Conteúdo rolável */}
      <div className="flex-grow overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
            : filteredProjects.map((item) => (
              <div
                key={item.id}
                className="relative p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {item.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <i className={`${tech.icon} text-gray-600`}></i>
                      <span className="text-sm text-gray-500">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  <i className="fa-solid fa-eye mr-2"></i>
                  Visitar
                </a>
              </div>
            ))}
        </div>
      </div>

      {/* Botão do WhatsApp fixo */}
      <a
        href="https://wa.me/+5515991495111"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-full flex items-center shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <FaWhatsapp size={24} className="mr-2" />
        Vamos conversar?
      </a>
    </div>
  );
};

export default Portfolio;
