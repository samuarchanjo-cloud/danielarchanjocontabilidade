import SectionHeading from './SectionHeading.jsx'

export default function Abertura() {
  return (
    <section className="py-16">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          label="O problema real"
          title="Você sabe quanto custa a sua hora de trabalho?"
        >
          <p className="text-base text-text-secondary max-w-[600px] mb-2">
            Se a resposta for "mais ou menos", você provavelmente está cobrando errado — e não
            é sua culpa. Ninguém te ensinou a calcular isso na faculdade.
          </p>
          <p className="text-base text-text-secondary max-w-[600px] mb-2">
            A maioria dos contadores define o preço olhando pro concorrente ou "no feeling". O
            problema é que isso não considera o custo real do seu escritório, o seu
            pró-labore desejado, nem a complexidade real de cada cliente.
          </p>
          <p className="text-base text-text-secondary max-w-[600px] mb-2">
            Resultado: você trabalha demais, recebe de menos, e ainda tem medo de aumentar o
            preço achando que vai perder cliente. A Calculadora de Honorários Contábeis existe
            pra acabar com isso — com números, não com achismo.
          </p>
        </SectionHeading>
      </div>
    </section>
  )
}
