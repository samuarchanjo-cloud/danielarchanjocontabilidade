import SectionHeading from './SectionHeading.jsx'

export default function Garantia() {
  return (
    <section className="py-16 bg-black-2 border-y border-border">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="Risco zero" title="Garantia incondicional de 7 dias" />
        <div className="mt-8 max-w-[560px] mx-auto text-center bg-card border border-gold/30 rounded-lg2 py-10 px-7">
          <div className="w-[72px] h-[72px] rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-5 text-gold">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h3 className="text-[22px] text-white mb-3">
            Testou e não gostou? Devolvemos 100%.
          </h3>
          <p className="text-[14.5px] text-text-secondary">
            Você tem 7 dias corridos pra usar a planilha. Se por qualquer motivo achar que não
            é pra você, é só pedir o reembolso — sem perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </section>
  )
}
