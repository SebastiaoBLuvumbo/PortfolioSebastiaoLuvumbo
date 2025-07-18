import React from 'react';
import { ExternalLink, Github, Code, Clock, Globe, Leaf, UtensilsCrossed, GraduationCap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'K SOLID',
      description: 'Site Oficial da K SOLID',
      technologies: ['Angular', 'HTML', 'CSS', 'TypeScript', 'GitLab', 'Strapi', 'Azure DevOps'],
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      demo: 'https://ksolid.ao/#/home'
    },
    {
      title: 'SakoExpress – Sistema Web para Restaurantes',
      description: 'Plataforma web integrada que permite ao cliente fazer pedidos pelo próprio dispositivo. Cozinheiros        recebem as solicitações em tempo real, preparam o pedido e o garçom é notificado automaticamente para a                 entrega.',
      technologies: ['HTML', 'CSS', 'JavasCript', 'Laravel', 'MySQL'],
      icon: <UtensilsCrossed className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600',
      demo: 'https://www.sakoexpress.com/',
    },
    {
      title: 'KERP, Sistema de Controle de Ponto',
      description: 'Sistema ERP completo com módulos para Gestão de Colaboradores, Controle de Assiduidade (via texto,         QR Code e biometria), Processamento de Salários, entre outros.',
      technologies: ['Angular (Angular Material)', 'Node.js (AdonisJS)', 'MySQL', 'KeyCloak (Autenticação)', 'Azure           DevOps', 'GitLab'],
      icon: <Clock className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'SAGA',
      description: 'Sistema administrativa para gerenciamento de agrícolas, controle de produção e atividades de               campo.',
      technologies: ['Angular (Angular Material)', 'Node.js (AdonisJS)', 'MongoDB', 'Azure DevOps', 'GitHub'],
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      github: 'https://github.com/SebastiaoBLuvumbo/sistemaAgricola',
    },
    {
      title: 'BOOKAR+ & KEDUA',
      description: 'BOOKAR+ é uma plataforma de estudos online voltada para a comercialização de cursos. KEDUA é um             sistema de gestão escolar desenvolvido para secretarias acadêmicas, com funcionalidades como matrículas,         controle de turmas, boletins e históricos escolares.',
      technologies: [
        'Angular (Angular Material)',
        'React.js',
        'Node.js (AdonisJS, Fastify) com Clean Architecture',
        'MongoDB, MySQL',
        'Azure DevOps',
        'GitHub'
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-600',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projetos
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi ao longo da minha jornada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center text-white mr-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Tecnologias:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github size={16} />
                  <span>Código</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Quer ver mais projetos?
          </p>
          <a
            href="https://github.com/SebastiaoBLuvumbo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Github size={20} />
            <span>Ver no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;