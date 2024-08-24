'use client';

export default function Localizacao() {
  return (
    <section className="bg-[#020621] py-16 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna de Informações de Contato */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Fale Conosco</h2>
            <p className="text-white mb-4">
              Tem alguma dúvida ou precisa entrar em contato conosco? Envie uma
              mensagem ou encontre-nos no endereço abaixo.
            </p>

            <h4 className="text-[#D98900] font-semibold mb-2">
              Escritório Sede - Santo André
            </h4>
            <ul className="list-none mb-6">
              <li className="text-white">
                <strong>Telefone:</strong>
              </li>
              <li className="text-white">
                <strong>Email:</strong>
              </li>
              <li className="text-white">
                <strong>Endereço:</strong> R. Campos Sales, 100 - sala 72 -
                Centro, Santo André - SP, 09015-200
              </li>
            </ul>

            <div className="h-px bg-gray-700 mb-6"></div>

            {/* Redes Sociais */}
            <h3 className="text-[#D98900] font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="btn btn-primary text-white bg-blue-600 hover:bg-blue-700"
              >
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a
                href="#"
                className="btn btn-primary text-white bg-blue-700 hover:bg-blue-800"
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a
                href="#"
                className="btn btn-warning text-white bg-yellow-500 hover:bg-yellow-600"
              >
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </div>
          </div>

          {/* Coluna de Mapa do Google */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Localização Escritório Sede
            </h2>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.540615808095!2d-46.52873038502137!3d-23.66188218463073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce423d6d2380d1%3A0x5b15b3f6f75d24b!2sR.%20Campos%20Sales%2C%20100%20-%20sala%2072%20-%20Centro%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009015-200!5e0!3m2!1spt-BR!2sbr!4v1640719137391!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
