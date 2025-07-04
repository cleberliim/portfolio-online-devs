import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Garantir que o CSS do skeleton esteja carregado


const About = () => {
  // Lista de habilidades com suas porcentagens
  const skills = [
    { name: 'PHP', level: 80 },
    { name: 'Laravel', level: 80 },
    { name: 'API REST', level: 80 },
    { name: 'SQL Server', level: 80 },
    { name: 'Oracle', level: 80 },
    { name: 'Analise de Dados', level: 70 },
    { name: 'Power BI', level: 70 },
    { name: 'MySQL', level: 80 },
    { name: 'Apache', level: 80 },
    { name: 'Kanban', level: 70 },
    { name: 'Microserviços', level: 70 },
    { name: 'Metodologias Ageis', level: 70 },
    { name: 'Scrum', level: 70 },


  ];

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Desliga o loading após 2 segundos
    }, 1000); // Ajuste o tempo de acordo com a simulação do seu carregamento
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center tracking-widest">
        {loading ? <Skeleton width={200} /> : 'SOBRE MIM'}
      </h2>

      <div className="mb-6">
        <p className="text-base sm:text-lg mb-4 text-gray-700">
          {loading ? <Skeleton count={3} /> : 'Com cerca de 4 anos de experiência na área de Tecnologia da Informação, minha atuação é focada no desenvolvimento e implantação de sistemas, bem como na análise de dados utilizando SQL Server. Tenho ênfase na otimização de processos para melhorar a eficiência operacional e gerar resultados concretos. Minha experiência também inclui Sustentação e Suporte, com a responsabilidade pela manutenção contínua de sistemas, garantindo a estabilidade dos serviços, resolução de incidentes e implementação de melhorias nos processos operacionais. Além disso, possuo experiência na gestão de projetos, utilizando metodologias ágeis (Scrum), assegurando entregas de alta qualidade e alinhadas às metas estratégicas da empresa.'}
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6 text-sm sm:text-base">
          {loading ? (
            <Skeleton count={3} />
          ) : (
            <>
              <li><strong>Freelance:</strong> Disponível</li>
            </>
          )}
        </ul>
      </div>

      {/* Tabela de Habilidades com Scroll Invisível */}
      <div className="overflow-x-auto sm:overflow-hidden">
        <table className="min-w-full table-auto border-collapse border border-gray-300 mt-6">
          <thead>
            <tr>
              <th colSpan="2" className="border border-gray-300 text-center p-4 text-xl sm:text-2xl font-semibold bg-gray-100">
                {loading ? <Skeleton width={200} /> : 'Programming Skills'}
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <>
                <tr><td colSpan="2"><Skeleton count={5} height={30} /></td></tr>
              </>
            ) : (
              skills.map((skill) => (
                <tr key={skill.name}>
                  <td className="border border-gray-300 p-4">
                    <p className="font-medium text-gray-700">{skill.name}</p>
                    <div className="bg-gray-200 rounded-full h-2.5 mb-2">
                      <div
                        className="bg-slate-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-sm sm:text-base text-gray-500">{skill.level}% de conhecimento</p>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Botão de Download do Currículo */}
      <div className="mt-6 mx-auto block text-center">
        {loading ? (
          <Skeleton width={200} height={50} />
        ) : (
          <a
            href="#" // Substitua com o caminho real do seu currículo
            download="curriculum.pdf"
            className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
            aria-label="ver Currículo"
          >
            <svg className="text-2xl mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
              <path d="M12 5v14m7-7l-7 7-7-7" />
              <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" />
            </svg>
            <span>Ver currículo completo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default About;
