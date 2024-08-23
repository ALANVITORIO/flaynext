export default function Revisao() {
  return (
    <section className="py-6 bg-slate-50 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Revisão para a vida toda
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-lg font-semibold mb-4">
            Especialistas em direito previdenciário
          </p>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur. Dui auctor sagittis est et
            nisl. Cras blandit ultrices adipiscing eget volutpat sed. Lorem diam
            amet donec enim. Et viverra mauris.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/idoso.webp"
            alt="Imagem de um especialista"
            className="w-3/4 h-auto mb-8 lg:mb-0 rounded-lg mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-file-earmark-text text-yellow-500 text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Triagem Inicial</h3>
          <p className="text-gray-600 text-left">
            Informações para triagem inicial importantes para definir os
            próximos passos do processo. Explicação breve sobre o que envolve a
            triagem inicial.
          </p>
        </div>
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-file-earmark-bar-graph text-yellow-500 text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Análise Documental</h3>
          <p className="text-gray-600 text-left">
            Verificação dos documentos e cálculos necessários para a entrada da
            ação.
          </p>
        </div>
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-folder2-open text-yellow-500 text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Cálculos Previdenciários</h3>
          <p className="text-gray-600 text-left">
            Realização dos cálculos necessários para a entrada da ação.
          </p>
        </div>
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-box-arrow-in-right text-yellow-500 text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Entrada com a Ação</h3>
          <p className="text-gray-600 text-left">
            Procedimentos finais para a entrada da ação jurídica.
          </p>
        </div>
      </div>
    </section>
  );
}
