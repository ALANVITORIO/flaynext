'use client';

import { useState } from 'react';

export default function Depoimentos() {
  const testimonials = [
    {
      name: 'Beatriz Lima',
      feedback:
        'Um excelente advogado, super prestativo, indico sempre que alguém me pergunta se conheço um bom advogado...',
      time: '3 meses atrás',
      stars: 5,
    },
    {
      name: 'Rafael Souza',
      feedback:
        'Serviço impecável, sempre muito atenciosos e prontos para resolver qualquer dúvida. Recomendo!',
      time: '5 meses atrás',
      stars: 5,
    },
    {
      name: 'Lucas Pereira',
      feedback:
        'A equipe é fantástica, resolvi todos os meus problemas de forma rápida e eficiente. Muito grato!',
      time: '2 meses atrás',
      stars: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section className="bg-[#070E3E] py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-white">O QUE DIZEM SOBRE A </span>
          <span style={{ color: '#D98900' }}>FLAY ASSESSORIA</span>
        </h2>
        <div className="flex items-center">
          <button
            onClick={prevTestimonial}
            className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 flex-shrink-0"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white mx-4 flex-grow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                <i className="bi bi-person-fill text-white"></i>
              </div>
              <div>
                <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                <span className="text-sm text-gray-400">
                  {testimonials[currentIndex].time}
                </span>
              </div>
            </div>
            <p className="italic text-gray-300">
              "{testimonials[currentIndex].feedback}"
            </p>
            <div className="mt-4 flex items-center">
              <div className="flex space-x-1">
                {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill text-yellow-400"></i>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={nextTestimonial}
            className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 flex-shrink-0"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
