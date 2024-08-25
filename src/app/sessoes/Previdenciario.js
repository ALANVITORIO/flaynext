export default function Previdenciario() {
  return (
    <section className="py-6 bg-slate-50 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Direito Previdenciário
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-lg font-semibold mb-4">
            Especialistas em Direito Previdenciário
          </p>
          <p className="text-gray-600 mb-8">
            Nossa equipe é especializada em todos os aspectos do direito
            previdenciário. Desde a obtenção de benefícios até a revisão de
            aposentadorias, estamos aqui para ajudar em cada etapa do processo.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/previdenciario.webp"
            alt="Imagem relacionada ao direito previdenciário"
            className="w-3/4 h-auto mb-8 lg:mb-0 rounded-lg mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-shield-fill-check text-yellow-500 text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Consultoria Previdenciária</h3>
          <p className="text-gray-600 text-left">
            Orientações detalhadas sobre os direitos e deveres previdenciários,
            ajudando na tomada de decisões mais informadas.
          </p>
        </div>
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-file-earmark-medical text-yellow-500 text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Revisão de Aposentadoria</h3>
          <p className="text-gray-600 text-left">
            Verificação e análise detalhada dos cálculos de aposentadoria para
            garantir que todos os direitos sejam respeitados.
          </p>
        </div>
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-calendar-check text-yellow-500 text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Planejamento de Benefícios</h3>
          <p className="text-gray-600 text-left">
            Auxílio no planejamento de benefícios previdenciários, incluindo
            aposentadoria e pensões, para assegurar o máximo benefício possível.
          </p>
        </div>
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-file-earmark-lock text-yellow-500 text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Defesa Jurídica</h3>
          <p className="text-gray-600 text-left">
            Representação legal em questões previdenciárias, garantindo a defesa
            dos seus direitos em processos judiciais e administrativos.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8  ">
        <a href="#contact" className="btn btn-primary">
          Fale com um Especialista
        </a>
      </div>
    </section>
  );
}
