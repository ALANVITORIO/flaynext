import './Hero.css';

export default function Hero() {
  return (
    <>
      <header className="w-full flex justify-between items-center p-4 bg-[#0b0c1a]">
        <div className="logo">
          <img
            src="/logo.jpg"
            alt="Logo"
            style={{ height: '40px', width: 'auto', borderRadius: '50%' }}
          />
        </div>
        <nav className="flex space-x-4 mr-40">
          <a href="#home" className="text-[#e0d3b8]">
            Home
          </a>
          <a href="#about" className="text-[#e0d3b8]">
            Sobre
          </a>
          <a href="#services" className="text-[#e0d3b8]">
            Serviços
          </a>
          <a href="#contact" className="text-[#e0d3b8]">
            Contato
          </a>
        </nav>
      </header>
      <section className="hero-section flex items-center min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="hero-title">Assessoria Flay</h1>
          <p className="hero-slogan">
            Seu parceiro confiável para resolver questões jurídicas e
            previdenciárias
          </p>
          <ul className="hero-services">
            <li>
              <i className="bi bi-award-fill"></i> Emissão de benefícios sociais
              (Loas, Cnis)
            </li>
            <li>
              <i className="bi bi-briefcase-fill"></i> Consultoria em advocacia
              trabalhista
            </li>
            <li>
              <i className="bi bi-heart-fill"></i> Planejamento e execução de
              pensão por morte
            </li>
            <li>
              <i className="bi bi-house-fill"></i> Assessoria completa em
              divórcios
            </li>
            <li>
              <i className="bi bi-file-earmark-check-fill"></i> Correções e
              atualizações de Cnis
            </li>
          </ul>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Fale com um especialista
            </a>
            <a href="#more-info" className="btn btn-secondary">
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
