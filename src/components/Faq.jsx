import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'

const perguntas = [
  {
    q: 'Funciona no Google Sheets?',
    a: 'Funciona, mas recomendamos abrir primeiro no Excel para preservar 100% da formatação original (cores, dashboard e gráfico).',
  },
  {
    q: 'Preciso saber fórmula de Excel?',
    a: 'Não. Você só preenche os campos amarelos. Todas as fórmulas já vêm prontas e calculam sozinhas.',
  },
  {
    q: 'Quanto tempo leva pra configurar?',
    a: 'Em média 15 minutos para preencher os custos do escritório e ver o primeiro resultado.',
  },
  {
    q: 'O que exatamente eu recebo?',
    a: 'A planilha em Excel (.xlsx) com as 6 abas e o manual de instruções em PDF, liberados imediatamente após a compra.',
  },
  {
    q: 'Tem suporte se eu tiver dúvida?',
    a: 'Sim, você pode enviar dúvidas diretamente pelo Instagram @danielarchanjo.ofc.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Você tem 7 dias de garantia incondicional. Se não fizer sentido pra você, devolvemos 100% do valor, sem perguntas.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section className="py-16">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="Perguntas frequentes" title="Ainda com dúvidas?" />
        <div className="mt-8 flex flex-col gap-2.5">
          {perguntas.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="bg-card border border-border rounded-md2 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full text-left py-4.5 px-5 flex items-center justify-between gap-3.5 text-[14.5px] font-bold text-white"
                >
                  {item.q}
                  <span
                    className={`flex-shrink-0 w-[22px] h-[22px] rounded-full border border-border flex items-center justify-center text-gold text-sm transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-250 ease-in-out"
                  style={{ maxHeight: isOpen ? '300px' : '0px' }}
                >
                  <div className="px-5 pb-4.5 text-sm text-text-secondary">{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
