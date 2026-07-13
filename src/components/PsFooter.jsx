export default function PsFooter() {
  return (
    <>
      <div className="pt-10 pb-24 md:pb-16">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-[640px] mx-auto border-t border-border pt-7 text-sm text-text-secondary">
            <strong className="text-white">P.S.</strong> Se você chegou até aqui, já sabe que
            precificar no achismo tá custando caro. A Calculadora de Honorários Contábeis te
            dá, em minutos, o que a maioria dos contadores nunca calculou na carreira inteira:
            o valor real da própria hora de trabalho. O preço promocional de lançamento não
            fica assim pra sempre — garanta o seu agora. Qualquer dúvida, me chama no Instagram{' '}
            <span className="text-gold font-bold">@danielarchanjo.ofc</span>.
          </div>
        </div>
      </div>

      <footer className="pt-7 pb-24 md:pb-16 border-t border-border text-center text-[12.5px] text-text-muted">
        <div className="max-w-content mx-auto px-6">
          Archanjo Consultoria Empresarial · Daniel Archanjo, Contador
          <br />
          <a
            href="https://instagram.com/danielarchanjo.ofc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold"
          >
            @danielarchanjo.ofc
          </a>
        </div>
      </footer>
    </>
  )
}
