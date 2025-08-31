import React from 'react';
import { Monitor, Server, Database, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Front-End',
      icon: <Monitor className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['HTML/CSS', 'JavaScript/TypeScript', 'Angular (Angular Material)', 'React.js (Shadcn/ui)', 'Bootstrap', 'Tailwind CSS', 'Wordpress']
    },
    {
      title: 'Back-End',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js (Express, Fastify)', 'AdonisJS', 'NestJS', 'PHP (Laravel, CodeIgniter)', 'C#', 'APIs REST/RESTful', 'GraphQL']
    },
    {
      title: 'Bancos de Dados',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'SupaBase']
    },
    {
      title: 'Ferramentas & Outros',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: ['Docker', 'Git (GitHub, GitLab)', 'KeyCloak (Autenticação), JWT', 'Azure DevOps', 'Clean Architecture, MVC', 'Carbone.io, jsreport', 'VPS Setup (Contabo)']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Sempre aprendendo e evoluindo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;