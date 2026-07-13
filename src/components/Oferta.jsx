import SectionHeading from './SectionHeading.jsx'
import CtaButton from './CtaButton.jsx'

const itens = [
  {
    bold: 'Planilha completa em Excel',
    resto: 'com 6 abas e fórmulas automáticas',
  },
  {
    bold: '7 serviços pré-cadastrados',
    resto: 'com valores de referência de mercado',
  },
  { bold: 'Dashboard visual', resto: 'com gráfico comparativo' },
  {
    bold: 'Manual de instruções em PDF',
    resto: ', passo a passo de cada aba',
  },
  {
    bold: 'Acesso imediato',
    resto: 'após a confirmação da compra',
  },
  { bold: 'Garantia incondicional', resto: 'de 7 dias' },
]

export default function Oferta() {
  return (
    <section id="oferta" className="py-16 bg-black-2 border-y border-border">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="A oferta" title="Tudo que você recebe hoje" />

        <div className="relative mt-9 max-w-[520px] mx-auto bg-card border border-gold/30 rounded-lg2 py-8 px-6.5 overflow-hidden">
          <div className="absolute top-[18px] -right-[38px] bg-gold text-black text-[10.5px] font-extrabold tracking-wide py-1.5 px-[42px] rotate-[35deg]">
            OFERTA DE LANÇAMENTO
          </div>

          <h3 className="text-xl text-white mb-5">Calculadora de Honorários Contábeis</h3>

          <div className="mb-6">
            {itens.map((item, i) => (
              <div
                key={item.bold}
                className={`flex items-start gap-2.5 text-[14.5px] text-text-secondary py-2.5 ${
                  i !== itens.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <span className="text-gold flex-shrink-0 font-bold">✓</span>
                <span>
                  <strong className="text-white">{item.bold}</strong> {item.resto}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center my-6 py-5 border-y border-border">
            <div className="text-[15px] text-text-muted line-through">De R$ 97</div>
            <div className="font-display font-bold text-[46px] leading-tight text-gold mt-0.5">
              R$ 37
            </div>
            <div className="text-[12.5px] text-text-muted mt-1">
              Pagamento único · Acesso vitalício
            </div>
          </div>

          <CtaButton className="!w-full">Quero a minha planilha agora</CtaButton>
          <div className="flex items-center justify-center gap-1.5 text-[12.5px] text-text-muted mt-3 flex-wrap text-center">
            <span>Pagamento seguro</span>
            <span className="text-border">&bull;</span>
            <span>Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  )
}
