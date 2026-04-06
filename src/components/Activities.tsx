import React, { useState } from 'react';
import { Code, Trophy, Award, Users, MapPin, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../assets/img/maratona_programacao/img1.jpg';
import img2 from '../../assets/img/maratona_programacao/img2.jpg';
import img3 from '../../assets/img/maratona_programacao/img3.jpg';
import img4 from '../../assets/img/maratona_programacao/img4.jpg';
import timbuktoo1 from '../../assets/img/timbuktoo_agriTech_hackathon/img1.jpeg';
import timbuktoo2 from '../../assets/img/timbuktoo_agriTech_hackathon/1772141978086.jpg';
import timbuktoo3 from '../../assets/img/timbuktoo_agriTech_hackathon/_E9A0462.jpg';
import timbuktoo4 from '../../assets/img/timbuktoo_agriTech_hackathon/_E9A0457.jpg';
import timbuktoo5 from '../../assets/img/timbuktoo_agriTech_hackathon/_E9A0328.jpg';
import timbuktoo6 from '../../assets/img/timbuktoo_agriTech_hackathon/certificado.png';
import zero1 from '../../assets/img/hackahton_zero_barreiras/img1.jpeg';
import zero2 from '../../assets/img/hackahton_zero_barreiras/img2.jpeg';
import zero3 from '../../assets/img/hackahton_zero_barreiras/img3.jpeg';
import zero4 from '../../assets/img/hackahton_zero_barreiras/img4.jpeg';
import zero5 from '../../assets/img/hackahton_zero_barreiras/img5.jpeg';
import zero6 from '../../assets/img/hackahton_zero_barreiras/img6.jpeg';
import zero7 from '../../assets/img/hackahton_zero_barreiras/img7.jpeg';
import zero8 from '../../assets/img/hackahton_zero_barreiras/img8.jpeg';
import zero9 from '../../assets/img/hackahton_zero_barreiras/img9.jpeg';
import isptec1 from '../../assets/img/isptec/img1.jpg';
import isptec2 from '../../assets/img/isptec/img2.jpg';
import isptec3 from '../../assets/img/isptec/img3.jpeg';

const activities = [
  {
    title: 'Hackathon Zero Barreiras - NDINGA',
    type: 'Hackathon',
    typeColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    iconBg: 'bg-green-500',
    icon: <Code className="w-6 h-6 text-white" />,
    description: 'Participação como Front-end Developer em hackathon, desenvolvendo plataforma inteligente de previsão climática com equipe multidisciplinar.',
    date: '24, 25, 26 e 31 Fevereiro 2026',
    location: 'Academia do Empreendedor de Luanda',
    conquistas: [
      'Atuei como Front-end Developer no Hackathon Zero Barreiras',
      'Desenvolvi interfaces interativas acessíveis com foco em PCDs',
      'Colaborei na experiência do utilizador e impacto social'
    ],
    gallery: [
      zero6,
      zero3,
      zero4,
      zero2,
      zero5,
      zero1,
      zero8,
      zero7,
      zero9,
    ]
  },
  {
    title: 'Timbuktoo AgriTech Hackathon - OMBELA',
    type: 'Hackathon',
    typeColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    iconBg: 'bg-green-500',
    icon: <Code className="w-6 h-6 text-white" />,
    description: 'Participação como Front-end Developer em hackathon de tecnologia agrícola, desenvolvendo plataforma inteligente de previsão climática com equipe multidisciplinar.',
    date: '24, 25 e 26 Fevereiro 2026',
    location: '42 Luanda (ISPTEC)',
    conquistas: [
      'Desenvolvimento de interface para previsões climáticas',
      'Colaboração em equipe multidisciplinar',
      'Implementação de dashboards interativos'
    ],
    gallery: [
      timbuktoo2,
      timbuktoo6,
      timbuktoo4,
      timbuktoo1,
      timbuktoo3,
      timbuktoo5,
    ]
  },
  {
    title: 'Maratona de Programação',
    type: 'Programação Competitiva',
    typeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    iconBg: 'bg-blue-500',
    icon: <Trophy className="w-6 h-6 text-white" />,
    description: 'Participação em competição de programação, resolvendo problemas algorítmicos complexos e trabalhando sob pressão em equipe.',
    date: '2025/01/25',
    location: 'ISPTEC - Instituto Superior Politécnico de Tecnologias e Ciências, Luanda, Angola',
    conquistas: [
      'Resolução de algoritmos complexos',
      'Trabalho em equipe sob pressão',
      'Otimização de código e performance'
    ],
    gallery: [
      img1,
      img2,
      img3,
      img4
    ]
  },
  {
    title: 'ISPTEC - Instituto Superior Politécnico de Tecnologias e Ciências',
    type: 'Momentos do meu Primeiro Ano',
    typeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    iconBg: 'bg-purple-500',
    icon: <Award className="w-6 h-6 text-white" />,
    description: 'Momentos do meu primeiro ano no ISPTEC - Instituto Superior Politécnico de Tecnologias e Ciências.',
    date: '05/11/2024',
    location: 'ISPTEC, Talatona, Angola',
    conquistas: [],
    gallery: [
      isptec1,
      isptec2,
      isptec3
    ]
  }
];

const Activities: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (gallery: string[], index: number) => {
    setCurrentGallery(gallery);
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

  return (
    <section id="activities" className="py-20 bg-gray-50 dark:bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Atividades & Conquistas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Eventos, competi\u00e7\u00f5es, certifica\u00e7\u00f5es e conquistas que marcaram minha jornada profissional
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white dark:bg-[#1f2937] rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col h-full">

              <div className="flex items-start space-x-4 mb-6">
                <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${activity.iconBg}`}>
                  {activity.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                    {activity.title}
                  </h3>
                  <span className={`inline-block px-2 py-0.5 mt-2 rounded text-xs font-semibold ${activity.typeColor}`}>
                    {activity.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {activity.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  {activity.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5" />
                  {activity.location}
                </div>
              </div>

              <div className="mb-6 flex-grow">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Principais Conquistas:</h4>
                <ul className="space-y-2">
                  {activity.conquistas.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mr-2 shrink-0 select-none">&bull;</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activity.gallery.length > 0 && (
                <div className="mt-auto">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Galeria de Imagens:</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {activity.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="h-24 rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => openLightbox(activity.gallery, idx)}
                      >
                        <img src={img} alt={`Galeria ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 p-2"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 p-2"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="w-full max-w-5xl max-h-[90vh] px-12 relative flex items-center justify-center h-full">
            <img
              src={currentGallery[currentIndex]}
              alt="Gallery highlight"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-3 py-1 rounded-full">
              {currentIndex + 1} / {currentGallery.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Activities;
