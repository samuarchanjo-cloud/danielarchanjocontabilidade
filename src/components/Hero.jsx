import heroPhoto from '../assets/hero-daniel.jpg'
import CtaButton from './CtaButton.jsx'

export default function Hero() {
  return (
    <section className="relative pt-14 pb-12 overflow-hidden">
      <div
        className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(201,162,39,0.10) 0%, rgba(201,162,39,0) 70%)',
        }}
      />
      <div className="max-w-content mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1fr] gap-9 md:gap-14 items-center">
          <div className="order-first md:order-none">
            <div className="relative w-full max-w-[340px] md:max-w-full mx-auto aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-[#1F1F23] to-[#0F0F11] shadow-[inset_0_0_0_1px_rgba(201,162,39,0.08),0_20px_40px_rgba(0,0,0,0.4)]">
              <img
                src={heroPhoto}
                alt="Daniel Archanjo, contador, fundador da Archanjo Consultoria Empresarial"
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_-60px_60px_-20px_rgba(10,10,11,0.55),inset_0_60px_50px_-30px_rgba(10,10,11,0.35)]" />
            </div>
            <div className="max-w-[340px] md:max-w-full mx-auto mt-3.5 bg-card border border-border rounded-2xl py-4.5 px-5 text-center">
              <div className="font-display font-semibold text-lg">Daniel Archanjo</div>
              <div className="text-sm text-text-secondary mt-0.5">
                Contador · Fundador da Archanjo Consultoria Empresarial
              </div>
              <div className="h-px bg-border my-3" />
              <div className="text-sm font-bold text-gold-light flex items-center justify-center gap-1.5">
                🏢 +31.000 contadores acompanham meu trabalho
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[1.2px] uppercase text-gold bg-gold/[0.08] border border-gold/25 py-1.5 px-3.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Ferramenta profissional para contadores
            </span>
            <h1 className="font-display font-semibold text-[34px] md:text-[44px] lg:text-[50px] leading-[1.15] tracking-tight mb-4.5">
              Pare de precificar no <em className="not-italic text-gold">achismo</em>. Descubra
              o valor real da sua hora.
            </h1>
            <p className="text-base md:text-[17px] text-text-secondary max-w-[520px] mb-7">
              A planilha que calcula automaticamente o honorário certo para cada cliente do
              seu escritório — enquanto você continua focado em contabilidade, não em
              matemática financeira.
            </p>
            <CtaButton>Quero a minha planilha</CtaButton>
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-[12.5px] text-text-muted mt-3 flex-wrap text-center">
              <span>Acesso imediato</span>
              <span className="text-border">&bull;</span>
              <span>Garantia de 7 dias</span>
              <span className="text-border">&bull;</span>
              <span>Sem mensalidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
