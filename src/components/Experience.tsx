import React from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Full-stack Developer',
    company: 'ALITECH',
    location: 'Luanda, Angola',
    date: '05/2025 \u2013 Atual',
    badge: 'Atual',
    badgeColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    description: [
      'Experiência no desenvolvimento de projeto fullstack em monorepo, incluindo backend com autenticação via GraphQL',
      'Experiência no desenvolvimento de sistemas administrativos para gerenciamento de igrejas, utilizando Laravel, React + PostgreSQL',
      'Implementação de chat em tempo real com WebSocket em projeto de agência de viagens, utilizando React, Angular + PHP'
    ]
  },
  // {
  //   title: 'Front-End Developer',
  //   company: 'Hackathon Zero Barreiras - NDINGA',
  //   location: 'Academia do Empreendedor de Luanda, Benfica, Angola',
  //   date: '24, 25, 26 e 31/03/2026',
  //   badge: 'Hackathon',
  //   badgeColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  //   description: [
  //     'Atuei como Front-end Developer no Hackathon Zero Barreiras, integrando uma equipa multidisciplinar no desenvolvimento de uma solução digital para higiene menstrual inclusiva',
  //     'Criação de interfaces interativas e acessíveis para apresentação de soluções inovadoras, incluindo absorvente inteligente e dispositivo wearable de monitoramento de saúde',
  //     'Desenvolvimento de experiências visuais com animações modernas, foco em usabilidade e acessibilidade para pessoas com deficiência (PCD’s)',
  //     'Colaboração na definição da experiência do utilizador e storytelling da plataforma, promovendo autonomia, dignidade e inclusão na saúde reprodutiva feminina'
  //   ]
  // },
  // {
  //   title: 'Front-End Developer',
  //   company: 'Timbuktoo AgriTech Hackathon - OMBELA',
  //   location: '42 Luanda (ISPTEC), Talatona, Angola',
  //   date: '24, 25 e 26/02/2026',
  //   badge: 'Hackathon',
  //   badgeColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  //   description: [
  //     'Atuei como Front-end Developer numa equipa multidisciplinar no desenvolvimento de uma plataforma inteligente de previsão climática agrícola',
  //     'Criação de interfaces e dashboards para visualização de previsões e cenários de risco',
  //     'Colaboração na experiência do utilizador e na proposta de valor baseada em previsões hiperlocais, alertas e planos de produção com apoio de IA'
  //   ]
  // },
  {
    title: 'Desenvolvedor Full-stack',
    company: 'K SOLID',
    location: 'Kilamba X28, Belas, Luanda, Angola',
    date: '08/2021 \u2013 07/2025',
    description: [
      'Desenvolvedor Web full-stack com experiência em arquiteturas MVC e Clean Architecture, atuando no desenvolvimento de APIs RESTful com Node.js (Fastify, AdonisJS) e interfaces responsivas com Angular (Angular Material) e ReactJS',
      'Experiência no desenvolvimento de sistemas web complexos, incluindo um ERP modular com controle hierárquico de permissões, gestão de colaboradores, assiduidade (texto, QR Code, biometria) e folha salarial',
      'Implementação de autenticação/autorização segura utilizando Keycloak e Firebase, integração com bancos de dados MySQL e MongoDB, e geração de relatórios dinâmicos com jsreport e Carbone.io',
      'Utilização de GitHub, GitLab e Azure DevOps para versionamento e integração contínua em ambientes colaborativos'
    ]
  },
  {
    title: 'Desenvolvedor Full-stack',
    company: 'DevTeam',
    location: 'Patriota, Luanda, Angola',
    date: '04/2023 \u2013 02/2025',
    description: [
      'Experiência no desenvolvimento de sites institucionais com WordPress e sistemas web com CodeIgniter, além da criação de interfaces responsivas com HTML5, CSS3, JavaScript e Bootstrap',
      'Atuação em plataformas de vendas online e sistemas para restaurantes, com módulos de pedidos, notificações em tempo real e painel administrativo para gestão de produtos e atendimento'
    ]
  },
  {
    title: 'Técnico de Informática',
    company: 'FAJOSIL',
    location: 'Kifica, Benfica, Luanda, Angola',
    date: '05/2023 \u2013 05/2024',
    description: [
      'Atuação na infraestrutura de TI com manutenção preventiva/corretiva de sistemas, equipamentos e redes, além de administração de usuários e políticas de segurança',
      'Suporte técnico de 1º e 2º nível, realizando diagnóstico e resolução de problemas de hardware, software e conectividade'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experiência Profissional
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Minha trajetória profissional e principais conquistas ao longo dos anos
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-500/30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start">
                <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#111827] bg-blue-500 z-10 top-6"></div>

                <div className="w-full md:pl-16">
                  <div className="bg-white dark:bg-[#1f2937] p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.date}
                      </div>
                      {exp.badge && (
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${exp.badgeColor}`}>
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                          <ChevronRight className="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
