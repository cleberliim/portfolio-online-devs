import React from 'react';
 

const About = () => {
  // Lista de habilidades com suas porcentagens
  const skills = [
    { name: 'Node.js', level: 60 },
    { name: 'Express', level: 80 },
    { name: 'API REST', level: 75 },
    { name: 'Python', level: 80 },
    { name: 'PHP', level: 70 },
    { name: 'TypeScript', level: 60 },
    { name: 'CI/CD', level: 60 },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center">SOBRE MIM</h2>

      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          Profissional com mais de 4 anos de experiência em TI, especialmente no setor logístico. 
          Atuei em cargos que evoluíram de Suporte Técnico até Analista de Sistema, desenvolvendo 
          projetos internos e para parceiros, com foco em qualidade e eficiência.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><strong>Idade:</strong> 28</li>
          <li><strong>Cidade:</strong> Boituva - SP</li>
          <li><strong>Freelance:</strong> Disponível</li>
        </ul>
      </div>

      {/* Tabela de Habilidades com Scroll Invisível */}
      <div className="overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ">
        <table className="min-w-full table-auto border-collapse border border-gray-300 mt-6 ">
          <thead>
            <tr>
              <th colSpan="2" className="border border-gray-300 text-center p-4 text-xl font-semibold bg-gray-100">
                Programming Skills
              </th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill.name}>
                <td className="border border-gray-300 p-4">
                  <p className="font-medium text-gray-700">{skill.name}</p>
                  <div className="bg-gray-200 rounded-full h-2.5 mb-2">
                    <div 
                      className="bg-slate-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500">{skill.level}% de conhecimento</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       

      {/* Botão de Download do Currículo */}
      <a
        href="https://drive.google.com/file/d/12OpR5AAOwsXFtIhvrSGACXxMMqudxZOy/view?usp=sharing" // Substitua com o caminho real do seu currículo
        download="curriculum.pdf"
        className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 mt-6 mx-auto block text-center"
        aria-label="ver Currículo"
      >
        <svg className="text-2xl mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
          <path d="M12 5v14m7-7l-7 7-7-7" />
          <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" />
        </svg>
        <span>Ver Currículo</span>
      </a>
    </div>
  );
};

export default About;
