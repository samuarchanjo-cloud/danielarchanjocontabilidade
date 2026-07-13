import SectionHeading from './SectionHeading.jsx'

const beneficios = [
  {
    icon: '💰',
    title: 'Saiba exatamente quanto cobrar',
    text: 'Chega de "achismo". Você vai ter um número técnico pra defender seu preço em qualquer negociação.',
  },
  {
    icon: '⏰',
    title: 'Descubra o valor real da sua hora',
    text: 'O cálculo mais importante que a maioria dos contadores nunca fez — pronto em minutos.',
  },
  {
    icon: '📊',
    title: 'Veja tudo num painel visual',
    text: 'Dashboard com gráfico comparativo, pronto pra consultar antes de qualquer reunião comercial.',
  },
  {
    icon: '👥',
    title: 'Precifique cada cliente do jeito certo',
    text: 'Cliente que dá mais trabalho paga mais — automaticamente, sem você precisar fazer conta na cabeça.',
  },
  {
    icon: '📄',
    title: 'Manual completo incluso',
    text: 'PDF passo a passo explicando cada aba, pra você usar sem travar em nenhum momento.',
  },
  {
    icon: '✅',
    title: 'Pronta pra usar hoje',
    text: 'Sem instalação, sem sistema novo pra aprender. Abre no Excel ou Google Sheets, na hora.',
  },
]

export default function Beneficios() {
  return (
    <section className="py-16">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          label="O que você ganha"
          title="Mais do que uma planilha: clareza pra negociar sem medo"
        />
        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {beneficios.map((b) => (
            <div key={b.title} className="bg-card border border-border rounded-md2 p-5.5">
              <div className="w-9.5 h-9.5 bg-gold/10 border border-gold/25 rounded-[10px] flex items-center justify-center text-gold text-lg mb-3.5">
                {b.icon}
              </div>
              <h4 className="font-sans font-bold text-[15.5px] text-white mb-1.5">{b.title}</h4>
              <p className="text-sm text-text-secondary">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
