export default function Servicos() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center py-16 px-8">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold mb-4 ml-4">
          VEJA COMO A FLAY ASSESSORIA{' '}
          <span style={{ color: 'red' }}>PODE TE AJUDAR</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 ml-4">
          Lorem ipsum dolor sit amet consectetur. Dui auctor sagittis est et
          nisl. Cras blandit ultrices adipiscing eget volutpat sed. Lorem diam
          amet donec enim. Et viverra mauris.
        </p>
      </div>
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="bg-yellow-200 p-6 rounded-lg shadow-md"
          style={{ transform: 'translateY(20px)' }}
        >
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-calendar4-event text-yellow-500 text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2 text-center">
            Revisão pra vida toda
          </h3>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.
          </p>
        </div>
        <div
          className="bg-[#2A3047] p-6 rounded-lg shadow-md"
          style={{ transform: 'translateY(-20px)' }}
        >
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-people text-[#2A3047] text-2xl"></i>
          </div>
          <h3
            className="text-lg font-bold mb-2 text-center"
            style={{ color: '#D98900' }}
          >
            Cível
          </h3>
          <p className="text-gray-600 text-white">
            Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.
          </p>
        </div>
        <div
          className="bg-[#2A3047] p-6 rounded-lg shadow-md"
          style={{ transform: 'translateY(20px)' }}
        >
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-briefcase-fill text-[#2A3047] text-2xl"></i>
          </div>
          <h3
            className="text-lg font-bold mb-2 text-center"
            style={{ color: '#D98900' }}
          >
            Advogado Trabalhista
          </h3>
          <p className="text-gray-600 text-white">
            Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.
          </p>
        </div>
        <div
          className="bg-yellow-200 p-6 rounded-lg shadow-md text-center"
          style={{ transform: 'translateY(-20px)' }}
        >
          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex justify-center items-center">
            <i className="bi bi-wallet2 text-yellow-500 text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2 text-center">Previdenciário</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.
          </p>
        </div>
      </div>
    </section>
  );
}
