export default function Civel() {
  return (
    <section className="py-6 bg-slate-100 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Advogado Cível</h2>

      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:order-2">
          <p className="text-lg font-semibold mb-4 ml-5">
            Especialistas em Direito Cível
          </p>
          <p className="text-gray-600 mb-8 ml-5 text-left">
            Nossa equipe possui vasta experiência em diversas áreas do direito
            cível, oferecendo consultoria e representação legal de alta
            qualidade para nossos clientes.
          </p>
        </div>
        <div className="lg:w-1/2 lg:order-1">
          <img
            src="/civel.webp"
            alt="Imagem de um advogado cível"
            className="w-3/4 h-auto mb-8 lg:mb-0 rounded-lg mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-[#020621] p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-people-fill text-[#020621] text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: '#D98900' }}>
            Consultoria Familiar
          </h3>
          <p className="text-gray-600 text-left text-white">
            Consultoria especializada em casos de direito familiar, incluindo
            divórcios, guarda de filhos, e acordos pré-nupciais.
          </p>
        </div>
        <div className="bg-[#020621] p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-house-door-fill text-[#020621] text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: '#D98900' }}>
            Direito Imobiliário
          </h3>
          <p className="text-gray-600 text-left text-white">
            Assessoria jurídica completa para compra, venda, locação e
            regularização de imóveis.
          </p>
        </div>
        <div className="bg-[#020621] p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-cash-coin text-[#020621] text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: '#D98900' }}>
            Direito de Sucessões
          </h3>
          <p className="text-gray-600 text-left text-white">
            Consultoria e representação em questões relacionadas à heranças,
            inventários, e partilhas de bens.
          </p>
        </div>
        <div className="bg-[#020621] p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-journal-richtext text-[#020621] text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: '#D98900' }}>
            Contratos e Obrigações
          </h3>
          <p className="text-gray-600 text-left text-white">
            Elaboração, revisão e consultoria em contratos civis e comerciais,
            garantindo segurança jurídica em suas negociações.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn btn-primary">
          Fale com um Especialista
        </a>
      </div>
    </section>
  );
}
