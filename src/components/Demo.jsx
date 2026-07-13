import SectionHeading from './SectionHeading.jsx'

const abas = [
  { num: '01', title: 'Capa', text: 'Identidade visual profissional do produto.' },
  { num: '02', title: 'Instruções', text: 'Resumo rápido de uso, direto na planilha.' },
  { num: '03', title: 'Custos do Escritório', text: 'Aqui você descobre o custo real da sua hora.' },
  { num: '04', title: 'Serviços', text: 'Precifique cada serviço que você oferece.' },
  { num: '05', title: 'Clientes', text: 'Aplique o honorário certo pra cada perfil.' },
  { num: '06', title: 'Dashboard', text: 'Visão consolidada com gráfico comparativo.' },
]

const barras = [
  { nome: 'MEI mensal', largura: '22%', valor: 'R$ 159' },
  { nome: 'Simples (baixo vol.)', largura: '46%', valor: 'R$ 479' },
  { nome: 'Simples (alto vol.)', largura: '100%', valor: 'R$ 1.039' },
  { nome: 'Depto. pessoal', largura: '24%', valor: 'R$ 239' },
]

export default function Demo() {
  return (
    <section className="py-16 bg-black-2 border-y border-border">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="Como funciona por dentro" title="6 abas. Zero complicação.">
          <p className="text-base text-text-secondary max-w-[600px] mb-2">
            Cada aba tem um papel específico — você nunca fica perdido sobre o que preencher
            ou pra onde olhar.
          </p>
        </SectionHeading>

        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-3">
          {abas.map((a) => (
            <div key={a.num} className="bg-card border border-border rounded-md2 p-5 flex items-center gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-[10px] bg-gradient-to-br from-gold to-[#9C7D1B] text-black font-display font-bold text-base flex items-center justify-center">
                {a.num}
              </div>
              <div>
                <h4 className="font-sans font-bold text-[15px] text-white mb-0.5">{a.title}</h4>
                <p className="text-[13.5px] text-text-secondary">{a.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 bg-gradient-to-br from-[#141416] to-black border border-border rounded-lg2 p-6">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-card-2 border border-border rounded-sm2 p-4">
              <div className="text-[11px] text-text-muted uppercase tracking-wide font-bold mb-1.5">
                Custo da sua hora
              </div>
              <div className="font-display font-semibold text-2xl text-gold">R$ 103,93</div>
            </div>
            <div className="bg-card-2 border border-border rounded-sm2 p-4">
              <div className="text-[11px] text-text-muted uppercase tracking-wide font-bold mb-1.5">
                Clientes cadastrados
              </div>
              <div className="font-display font-semibold text-2xl text-gold">12</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {barras.map((b) => (
              <div key={b.nome} className="flex items-center gap-2.5">
                <span className="text-xs text-text-secondary w-[110px] flex-shrink-0">{b.nome}</span>
                <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bar-fill-gradient rounded-full"
                    style={{ width: b.largura }}
                  />
                </div>
                <span className="text-xs text-white font-semibold w-16 text-right flex-shrink-0">
                  {b.valor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
