import SectionHeading from './SectionHeading.jsx'

const passos = [
  {
    num: '01',
    title: 'Você informa os custos do seu escritório',
    text: 'Aluguel, softwares, equipe, pró-labore desejado e horas produtivas do mês. Leva menos de 10 minutos.',
  },
  {
    num: '02',
    title: 'A planilha calcula o custo real da sua hora',
    text: 'Com fórmula automática, sem você precisar entender de Excel. O número aparece na hora.',
  },
  {
    num: '03',
    title: 'Ela sugere o honorário certo pra cada serviço',
    text: 'MEI, Simples Nacional, departamento pessoal, consultoria — já vem tudo pré-configurado com valores de referência.',
  },
  {
    num: '04',
    title: 'Você ajusta por perfil de cliente e fecha o preço com segurança',
    text: 'Cliente organizado, bagunçado, alto volume — a planilha aplica o multiplicador certo automaticamente.',
  },
]

export default function Solucao() {
  return (
    <section className="py-16">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          label="A solução"
          title="Uma planilha que calcula por você — você só preenche os campos amarelos"
        >
          <p className="text-base text-text-secondary max-w-[600px] mb-2">
            Sem fórmula pra decorar, sem curso, sem curva de aprendizado. Você preenche os
            custos do seu escritório uma vez, e a partir daí a ferramenta faz o resto sozinha.
          </p>
        </SectionHeading>

        <div className="mt-9 bg-card border border-border rounded-lg2 py-8 px-6.5">
          {passos.map((p, i) => (
            <div
              key={p.num}
              className={`flex gap-4 py-4 ${
                i !== passos.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <span className="font-display font-semibold text-xl text-gold flex-shrink-0 w-8">
                {p.num}
              </span>
              <div>
                <h4 className="font-sans font-bold text-[15.5px] text-white mb-1">{p.title}</h4>
                <p className="text-sm text-text-secondary">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
