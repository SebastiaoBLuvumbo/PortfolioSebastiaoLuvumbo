import React from 'react';
import { GraduationCap, Code, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mim
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conheça mais sobre minha trajetória e experiência profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="w-64 h-64 mx-auto md:mx-0 mb-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
              SBL
            </div>
          </div>

          <div>
            <div className="mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Sou estudante de <strong>Engenharia Informática</strong> no <strong>ISPTEC – Instituto Superior Politécnico de Tecnologias e Ciências</strong> e <strong>Desenvolvedor Full Stack</strong> focado na criação de soluções inovadoras, escaláveis e de alto desempenho. Tenho domínio de Angular e React no front-end, e Node.js (AdonisJS, Fastify) e PHP (Laravel, CodeIgniter) no back-end, aplicando boas práticas como Clean Architecture, MVC e versionamento com Git.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
Apaixonado por resolver problemas com código, busco entregar sistemas robustos, eficientes e alinhados às necessidades do negócio, contribuindo para o crescimento de equipes e a excelência técnica dos projetos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Formação</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Eng. Informática - ISPTEC</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Técnico de Informática - IPIL</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Code className="text-green-600 dark:text-green-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Experiência</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">+3 anos Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;