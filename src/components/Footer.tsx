import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Desenvolvido com</span>
            <Heart className="text-red-500" size={16} />
            <span>por Sebastião Biniaku Luvumbo</span>
          </p>
          <p className="mt-2 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2 text-gray-400">
            <Code size={16} />
            <span className="text-sm">
              Feito com React, TypeScript e Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;