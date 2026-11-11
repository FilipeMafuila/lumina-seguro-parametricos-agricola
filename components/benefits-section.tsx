import { Leaf, Plus, Settings, ShieldCheck, Sprout, UsersRound } from 'lucide-react'

const benefits = [
  {
    title: 'Para proteger de forma inédita a Agricultura Familiar',
    description:
      'Os pequenos agricultores brasileiros não têm acesso às coberturas de seguro para suas plantações, por falta de informações e, também, por falta de recursos para pagar pelo Seguro Tradicional. Na modalidade de seguro que é comumente praticada pelo mercado, incide no valor do prêmio (valor que é pago à seguradora pela proteção) o custo da vistoria e do deslocamento do perito ao local do sinistro, o que inviabiliza a operação desta cobertura, individualmente, para pequenas propriedades. Como o Seguro Paramétrico não requer perícia presencial, ele se apresenta como a solução ideal para atender esses agricultores.',
    Icon: UsersRound,
    Accent: Sprout,
  },
  {
    title: 'Para reforçar o trabalho das associações e cooperativas no apoio à produção agrícola',
    description:
      'Organizadas de forma coletiva, por meio das associações e cooperativas, conseguimos garantir às famílias de agricultores indenização justa para que tenham condições de se recuperar em caso de problemas climáticos e, ainda, de permanecerem em suas propriedades com renda, segurança alimentar e preservação do ecossistema local. O entendimento dos gatilhos para acionamento das apólices é muito simples, o que facilita o acompanhamento do processo, desde a contratação até o fim da vigência da cobertura.',
    Icon: Settings,
    Accent: Plus,
  },
  {
    title: 'Para apoiar o poder público na gestão da segurança alimentar e das terras produtivas',
    description:
      'A adoção do Seguro Paramétrico como política pública irá proteger e incentivar a atividade econômica dos Agricultores Familiares que garantem mais de 70% do alimento produzido para consumo dos brasileiros. Para permanecerem em suas terras e preservarem o meio ambiente, esses agricultores precisam estar protegidos das intempéries, que colocam em risco a nossa segurança alimentar.',
    Icon: ShieldCheck,
    Accent: Leaf,
  },
]

export function BenefitsSection() {
  return (
    <section className="benefits-section" aria-label="Benefícios do seguro paramétrico">
      <div className="benefits-grid">
        {benefits.map(({ title, description, Icon, Accent }) => (
          <article className="benefit-card" key={title}>
            <div className="benefit-icon-badge" aria-hidden="true">
              <Icon className="benefit-icon" size={29} strokeWidth={1.45} />
              <Accent className="benefit-icon-accent" size={12} strokeWidth={1.8} />
            </div>
            <h2 className="benefit-title">{title}</h2>
            <p className="benefit-description">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
