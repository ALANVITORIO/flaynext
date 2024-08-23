export default function Trabalhista() {
  return (
    <section className="py-6 bg-slate-50 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Advogado Trabalhista
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:order-2">
          <p className="text-lg font-semibold mb-4 ml-5">
            Especialistas em Direito Trabalhista
          </p>
          <p className="text-gray-600 mb-8 ml-5 text-left">
            Lorem ipsum dolor sit amet consectetur. Dui auctor sagittis est et
            nisl. Cras blandit ultrices adipiscing eget volutpat sed. Lorem diam
            amet donec enim. Et viverra mauris.
          </p>
        </div>
        <div className="lg:w-1/2 lg:order-1">
          <img
            src="/trabalhista.webp"
            alt="Imagem de um advogado trabalhista"
            className="w-3/4 h-auto mb-8 lg:mb-0 rounded-lg mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-[#2A3047] p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-briefcase-fill text-[#2A3047] text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: '#D98900' }}>
            Triagem Inicial
          </h3>
          <p className="text-gray-600 text-left text-white">
            Informações para triagem inicial importantes para definir os
            próximos passos do processo trabalhista. Explicação breve sobre o
            que envolve a triagem inicial.
          </p>
        </div>
        <div className="bg-[#2A3047] p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-file-earmark-text text-[#2A3047] text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: '#D98900' }}>
            Análise Documental
          </h3>
          <p className="text-gray-600 text-left text-white">
            Verificação dos documentos e cálculos necessários para a entrada da
            ação trabalhista.
          </p>
        </div>
        <div className="bg-[#2A3047] p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-folder2-open text-[#2A3047] text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: '#D98900' }}>
            Cálculos Trabalhistas
          </h3>
          <p className="text-gray-600 text-left text-white">
            Realização dos cálculos necessários para a entrada da ação
            trabalhista.
          </p>
        </div>
        <div className="bg-[#2A3047] p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-box-arrow-in-right text-[#2A3047] text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: '#D98900' }}>
            Entrada com a Ação
          </h3>
          <p className="text-gray-600 text-left text-white">
            Procedimentos finais para a entrada da ação trabalhista.
          </p>
        </div>
      </div>
    </section>
  );
}
