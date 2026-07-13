import SectionHeading from './SectionHeading.jsx'

const objecoes = [
  {
    q: 'Eu já sei precificar, faço isso há anos.',
    a: 'Precificar por intuição não é o mesmo que calcular o custo real da sua hora. Muita gente com anos de profissão nunca fez essa conta — e é justamente aí que o dinheiro escapa.',
  },
  {
    q: 'Isso deve ser complicado de usar.',
    a: 'Você só preenche os campos amarelos. O resto é automático. Em 15 minutos você já tem o custo da sua hora calculado.',
  },
  {
    q: 'Não confio em planilha pronta, meu escritório é diferente.',
    a: 'Todos os valores são 100% editáveis. A planilha é o ponto de partida técnico — você adapta pra realidade exata do seu escritório.',
  },
  {
    q: 'R$ 37 é caro para uma planilha.',
    a: 'Pensa no quanto você pode estar perdendo por mês cobrando errado de um único cliente. Essa planilha se paga na primeira renegociação de honorário.',
  },
  {
    q: 'Funciona no meu computador? E no Google Sheets?',
    a: 'É um arquivo Excel padrão (.xlsx), funciona em qualquer computador com Excel e também abre no Google Sheets.',
  },
]

export default function Objecoes() {
  return (
    <section className="py-16">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="Tire suas dúvidas" title="Antes de você pensar, eu já pensei" />
        <div className="mt-8 flex flex-col gap-3">
          {objecoes.map((o) => (
            <div key={o.q} className="bg-card border border-border rounded-md2 p-5">
              <div className="text-[15px] font-bold text-white mb-2 flex gap-2">
                <span className="text-gold flex-shrink-0">"</span>
                {o.q}
              </div>
              <div className="text-sm text-text-secondary pl-[22px]">{o.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
