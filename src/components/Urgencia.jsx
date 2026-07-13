import SectionHeading from './SectionHeading.jsx'
import CtaButton from './CtaButton.jsx'

export default function Urgencia() {
  return (
    <section className="py-16">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="Atenção" title="Preço de lançamento por tempo limitado" />
        <div className="mt-8 bg-gradient-to-br from-[#1F1B0E] to-black-2 border border-gold/35 rounded-lg2 py-7 px-6 text-center">
          <h3 className="text-[19px] text-gold-light mb-2">De R$ 97 por R$ 37</h3>
          <p className="text-sm text-text-secondary mb-5">
            Esse valor promocional é válido apenas durante o período de lançamento. Depois
            disso, o preço volta ao normal.
          </p>
          <CtaButton secondary>Garantir o preço de lançamento</CtaButton>
        </div>
      </div>
    </section>
  )
}
