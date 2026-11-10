import { ChevronDown, Disc3 } from 'lucide-react'

function InstagramGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9v9M6 6v.01M10 18v-5a3 3 0 0 1 6 0v5M10 10v8" />
    </svg>
  )
}

const navigation = [
  { label: 'Seguros', href: '#seguros', dropdown: true },
  { label: 'Sobre a Newe', href: '#sobre', dropdown: true },
  { label: 'Conteúdos', href: '#conteudos', dropdown: false },
  { label: 'Contato', href: '#contato', dropdown: true },
]

export function LandingHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Newe Seguros — início">
        <span className="brand-name">Newe</span>
        <span className="brand-subtitle">SEGUROS</span>
      </a>

      <nav className="main-navigation" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a className="navigation-link" href={item.href} key={item.label}>
            {item.label}
            {item.dropdown && <ChevronDown aria-hidden="true" size={13} strokeWidth={2.5} />}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <div className="social-links" aria-label="Redes sociais">
          <a href="#instagram" aria-label="Instagram" className="social-link">
            <InstagramGlyph />
          </a>
          <a href="#linkedin" aria-label="LinkedIn" className="social-link">
            <LinkedInGlyph />
          </a>
          <a href="#spotify" aria-label="Spotify" className="social-link">
            <Disc3 aria-hidden="true" size={16} strokeWidth={1.8} />
          </a>
        </div>
        <a className="signup-link" href="#cadastro">
          Cadastre-se aqui
        </a>
      </div>
    </header>
  )
}
