import { House, Leaf, Network, Plus, UsersRound } from 'lucide-react'

const participationOptions = [
  {
    title: 'Núcleo de produtores:',
    description:
      'Procure um Técnico Rural (ATER) e verifique se somos parceiros. Caso contrário, cadastre aqui o seu núcleo e indique um Técnico para entrarmos em contato.',
    Icon: Network,
    Accent: Plus,
    iconVariant: 'network',
  },
  {
    title: 'Associações e cooperativas:',
    description:
      'Marque uma reunião conosco para apresentarmos a solução e o formato da operação que melhor atenda suas necessidades.',
    Icon: House,
    Accent: Leaf,
    iconVariant: 'association',
  },
  {
    title: 'Gestores públicos:',
    description:
      'Estamos à disposição para apresentar este modelo de seguro capaz de garantir políticas de inclusão, geração de renda e adaptabilidade climática.',
    Icon: UsersRound,
    Accent: null,
    iconVariant: 'public',
  },
]

export function ParticipationSection() {
  return (
    <section className="participation-section" aria-labelledby="participation-title">
      <div className="participation-container">
        <div className="participation-header">
          <h2 className="participation-title" id="participation-title">
            <span className="participation-title-line">Como participar e incentivar a</span>
            <span className="participation-title-line">
              adoção do <span className="participation-title-accent">Seguro Paramétrico?</span>
            </span>
          </h2>
          <a className="parametric-section-cta participation-cta" href="#cadastro">
            Corretor, cadastre-se aqui
          </a>
        </div>

        <div className="participation-grid">
          {participationOptions.map(({ title, description, Icon, Accent, iconVariant }) => (
            <article className="participation-card" key={title}>
              <div className={`participation-icon participation-icon--${iconVariant}`} aria-hidden="true">
                <Icon className="participation-icon-main" size={31} strokeWidth={1.45} />
                {Accent && <Accent className="participation-icon-accent" size={13} strokeWidth={1.8} />}
              </div>
              <h3 className="participation-card-title">{title}</h3>
              <p className="participation-card-description">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
