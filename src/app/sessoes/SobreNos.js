export default function SobreNos() {
  return (
    <section className="bg-gray-50 py-8 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className=" font-extrabold text-gray-900 mb-10">
          <span className="">SOBRE A </span>
          <span style={{ color: '#FF0000' }}>FLAY ASSESSORIA</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
          Nossa equipe de advogados é dedicada a oferecer serviços jurídicos de
          alta qualidade. Com vasta experiência, nos comprometemos a defender
          seus interesses com profissionalismo e ética.
        </p>

        <div
          id="numbers-section"
          className="flex flex-col md:flex-row justify-center gap-12 mt-16"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
              <span id="clientes">0</span>+
            </h3>
            <p className="text-lg font-medium text-gray-600">
              Clientes Satisfeitos
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
              <span id="casos">0</span>+
            </h3>
            <p className="text-lg font-medium text-gray-600">
              Casos Resolvidos
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
              <span id="anos">0</span>+
            </h3>
            <p className="text-lg font-medium text-gray-600">
              Anos de Experiência
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nossa Missão
            </h3>
            <p className="text-gray-600">
              Oferecer serviços jurídicos com excelência, ética e transparência,
              ajudando nossos clientes a superar desafios legais de forma
              eficiente.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nossa Visão
            </h3>
            <p className="text-gray-600">
              Ser referência em advocacia, reconhecida pela qualidade dos
              serviços prestados e pela satisfação dos nossos clientes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-gray-600">
              Ética, compromisso e inovação são os pilares que norteiam nossas
              ações e relacionamentos com nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
