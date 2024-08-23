import Hero from './sessoes/Hero';
import Revisao from './sessoes/Revisao';
import Servicos from './sessoes/Servicos';
import Trabalhista from './sessoes/Trabalhista';

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicos />
      <Revisao />
      <Trabalhista />
    </main>
  );
}
