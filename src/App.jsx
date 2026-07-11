import React from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import WhatsAppFloat from './components/layout/WhatsAppFloat.jsx';
import Hero from './components/sections/Hero.jsx';
import Solucoes from './components/sections/Solucoes.jsx';
import GestaoInteligente from './components/sections/GestaoInteligente.jsx';
import SobreDaniel from './components/sections/SobreDaniel.jsx';
import Depoimentos from './components/sections/Depoimentos.jsx';
import FAQ from './components/sections/FAQ.jsx';
import CTAFinal from './components/sections/CTAFinal.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solucoes />
        <GestaoInteligente />
        <SobreDaniel />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
