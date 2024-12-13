import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Importando o CSS do Skeleton
import { FaCode, FaLaptop, FaCog, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "Desenvolvimento de Software Sob Medida",
    description: "Soluções personalizadas para empresas, como ERPs, CRMs, sistemas de gestão de estoque e mais.",
    icon: <FaCode size={30} className="text-green-500" />,
  },
  {
    title: "Desenvolvimento de Sites e Aplicativos Web",
    description: "Criação de sites responsivos e aplicativos web, incluindo e-commerce, blogs, landing pages, entre outros.",
    icon: <FaLaptop size={30} className="text-blue-500" />,
  },
  {
    title: "Consultoria em Tecnologia",
    description: "Ajudamos sua empresa a escolher as melhores tecnologias e implementar soluções eficazes.",
    icon: <FaCog size={30} className="text-yellow-500" />,
  },
  {
    title: "Testes e Garantia de Qualidade (QA)",
    description: "Realizamos testes manuais e automatizados para garantir que o software seja funcional e livre de erros.",
    icon: <FaCheckCircle size={30} className="text-purple-500" />,
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-slate-800 p-6 rounded-lg flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:scale-105">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-white mt-2">{description}</p>
  </div>
);

const Services = () => {
  // Estado para controlar o carregamento
  const [isLoading, setIsLoading] = useState(true);

  // Simulação de carregamento (pode ser uma requisição real)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Simula o carregamento dos dados após 2 segundos
    }, 1000); // Ajuste o tempo conforme necessário
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 sm:p-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center tracking-widest">
        {isLoading ? <Skeleton width={200} /> : "Serviços que ofereço:"}
      </h2>
      <div className="container mx-auto px-4 py-12">
        {/* Grid responsivo de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {isLoading ? (
            // Exibindo Skeletons para cada card de serviço
            Array(3).fill().map((_, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg flex flex-col items-center text-center shadow-lg">
                <div className="mb-4">
                  <Skeleton circle width={50} height={50} />
                </div>
                <Skeleton width={150} height={20} className="mb-2" />
                <Skeleton width={200} height={15} />
              </div>
            ))
          ) : (
            // Exibindo os dados reais dos serviços
            services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))
          )}
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
        Vamos conversar?
      </a>
    </div>
  );
};

export default Services;
