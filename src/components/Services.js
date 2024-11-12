import React from "react";
import { FaCode, FaChartBar, FaMobileAlt, FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Modern and responsive websites.",
    icon: <FaCode size={30} className="text-green-500" />,
  },
  {
    title: "Power BI",
    description: "Data analytics and visualization.",
    icon: <FaChartBar size={30} className="text-purple-500" />,
  },
  {
    title: "Mobile Application",
    description: "Custom mobile solutions for iOS and Android.",
    icon: <FaMobileAlt size={30} className="text-pink-500" />,
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-slate-800 p-6 rounded-lg  flex flex-col items-center text-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-white mt-2">{description}</p>
  </div>
);

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>

      {/* Botão de "Solicitar Orçamento" para WhatsApp */}
      <a
        href="https://wa.me/+5515991495111"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <FaWhatsapp size={20} className="mr-2" />
        Solicitar Orçamento
      </a>
    </div>
  );
};

export default Services;
