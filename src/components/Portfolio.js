import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import SkeletonCard from "./SkeletonCard";

const portfolioItems = [
  {
    id: 1,
    title: "PowerLink",
    description:
      "PowerLink é um gerenciador de Power BI que permite administrar seus dashboards com facilidade, garantindo praticidade e insights valiosos sem complicações.",
    category: "Back End",
    technologies: [
      { name: "PHP", icon: "fa-brands fa-php" },
      { name: "TawindCss", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js-square" },
    ],
    github: "https://github.com/cleberliim/PowerLink",
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
    title: "Portfólio Online para Devs",
    description: "Este projeto é uma aplicação simples, desenvolvida com React.js e TailwindCSS, projetada para funcionar como um portfólio online para desenvolvedores em geral.",
    category: "Front End",
    technologies: [
      { name: "Nodejs", icon: "fab fa-node" },
      { name: "TawindCss", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js-square" },

    ],
    github: "https://github.com/cleberliim/portfolio-online-devs",
  },

  {
    id: 4,
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



];


const Portfolio = () => {
  const [ selectedCategory, setSelectedCategory ] = useState("Todos");
  const [ loading, setLoading ] = useState(true);

  // Estado para armazenar os cliques dos projetos
  const [ clickCounts, setClickCounts ] = useState({});

  useEffect(() => {
    // Carregar contadores de cliques do localStorage ao iniciar
    const storedClicks = JSON.parse(localStorage.getItem("clickCounts")) || {};
    setClickCounts(storedClicks);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const handleClick = (id) => {
    setClickCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      newCounts[ id ] = (newCounts[ id ] || 0) + 1;

      // Salvar o novo contador de cliques no localStorage
      localStorage.setItem("clickCounts", JSON.stringify(newCounts));

      return newCounts;
    });
  };

  const filteredProjects =
    selectedCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter(
        (project) => project.category === selectedCategory
      );

  return (
    <div className="h-screen flex flex-col max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white pt-14">
      {/* Cabeçalho fixo */}
      <div className="flex justify-center space-x-6 mb-4">
        {[ "Todos", "Back End", "Front End" ].map((category) => (
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
        <div className="p-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
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
                <div className="flex items-center space-x-2">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
                    onClick={() => handleClick(item.id)} // Passa o ID do projeto para o contador
                  >
                    <i className="fa-solid fa-eye mr-2"></i>
                    Visitar
                  </a>
                  {/* Exibição do contador de cliques individual */}
                  <span className="text-lg text-gray-600">
                    {clickCounts[ item.id ] || 0}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Botão do WhatsApp fixo */}
      <a
        href="https://wa.me/+5515991495111"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Portfolio;
