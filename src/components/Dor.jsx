import SectionHeading from './SectionHeading.jsx'

const dores = [
  'Você já cobrou barato só porque teve medo de "assustar" o cliente.',
  'Você nunca calculou, com números reais, quanto custa uma hora do seu trabalho.',
  'Você define preço olhando o que o concorrente cobra, não o que o seu escritório precisa faturar.',
  'Você tem cliente que dá trabalho demais e paga de menos, e não sabe exatamente o quanto isso te custa.',
  'Você trabalha mais horas do que gostaria e, ainda assim, sente que o dinheiro não fecha como deveria.',
  'Toda vez que precisa dar um preço novo, é um mini surto de "será que tá certo?"',
]

export default function Dor() {
  return (
    <section className="py-16 bg-black-2 border-y border-border">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          label="Isso te parece familiar?"
          title="Se você se identificar com pelo menos 2 destas frases, esse produto foi feito pra você"
        />
        <div className="mt-8 flex flex-col gap-0.5">
          {dores.map((texto, i) => (
            <div
              key={i}
              className={`flex items-start gap-3.5 py-4.5 text-[15.5px] text-white ${
                i !== dores.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <span className="text-[#C4544B] text-lg flex-shrink-0 mt-px">&times;</span>
              {texto}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
