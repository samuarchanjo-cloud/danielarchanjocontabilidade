import autoridadePhoto from '../assets/autoridade-daniel.jpg'
import SectionHeading from './SectionHeading.jsx'

export default function Autoridade() {
  return (
    <section className="py-16">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          label="Quem criou"
          title="Feita por um contador que já viveu esse problema na pele"
        />

        <div className="mt-9 grid grid-cols-1 md:grid-cols-[0.8fr_1fr] gap-7 items-center">
          <div className="relative w-full max-w-[280px] mx-auto aspect-square rounded-[20px] overflow-hidden border border-border bg-gradient-to-br from-[#1F1F23] to-[#0F0F11] shadow-[0_16px_32px_rgba(0,0,0,0.4)]">
            <img
              src={autoridadePhoto}
              alt="Daniel Archanjo sorrindo, contador"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_-40px_50px_-20px_rgba(10,10,11,0.5)]" />
          </div>

          <div>
            <p className="text-[15.5px] text-text-secondary mb-3.5">
              Sou Daniel Archanjo, contador, fundador da Archanjo Consultoria Empresarial.
              Depois de anos atendendo escritórios de MEI e Simples Nacional, percebi o mesmo
              padrão se repetindo: contadores excelentes tecnicamente, cobrando mal porque
              nunca pararam pra calcular o próprio custo.
            </p>
            <p className="font-display italic font-medium text-[19px] text-white border-l-2 border-gold pl-4 my-4.5">
              "Não existe problema de cliente difícil. Existe problema de preço mal calculado."
            </p>
            <p className="text-[15.5px] text-text-secondary mb-3.5">
              Criei essa planilha pra resolver exatamente isso — com a mesma lógica que uso no
              meu próprio escritório.
            </p>
            <span className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-gold mt-1.5">
              @ @danielarchanjo.ofc
            </span>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3.5 md:gap-5">
          <div className="bg-card border border-border rounded-md2 p-5 text-center">
            <span className="block font-display font-semibold text-2xl text-gold">4+</span>
            <span className="text-xs text-text-secondary mt-1 block">
              Anos de atuação como contador
            </span>
          </div>
          <div className="bg-card border border-border rounded-md2 p-5 text-center">
            <span className="block font-display font-semibold text-2xl text-gold">31mil+</span>
            <span className="text-xs text-text-secondary mt-1 block">
              Contadores acompanham meu trabalho no Instagram
            </span>
          </div>
        </div>
        <p className="mt-4.5 text-center text-[12.5px] text-text-muted">
          Depoimentos de clientes que já usam a planilha em breve nesta seção.
        </p>
      </div>
    </section>
  )
}
