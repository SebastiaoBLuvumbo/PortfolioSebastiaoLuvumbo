import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              SL
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Sebastião Biniaku
            <span className="block text-blue-600 dark:text-blue-400">Luvumbo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Desenvolvedor Full Stack com +3 anos de experiência, focado em soluções escaláveis, alto desempenho e boas práticas como Clean Architecture. Comprometido com qualidade e geração de valor.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/sebasti%C3%A3o-b-luvumbo-3569ab374/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/SebastiaoBLuvumbo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:luvumbobsebastiao@gmail.com"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowDown size={24} />
            <span>Conheça mais</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;