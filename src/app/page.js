import Civel from './sessoes/Civel';
import Depoimentos from './sessoes/Depoimentos';
import Hero from './sessoes/Hero';
import Localizacao from './sessoes/Localizacao';
import Previdenciario from './sessoes/Previdenciario';
import Revisao from './sessoes/Revisao';
import Servicos from './sessoes/Servicos';
import SobreNos from './sessoes/SobreNos';
import Trabalhista from './sessoes/Trabalhista';

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicos />
      <Revisao />
      <Trabalhista />
      <Previdenciario />
      <Civel />
      <SobreNos />
      <Depoimentos />
      <Localizacao />
    </main>
  );
}
