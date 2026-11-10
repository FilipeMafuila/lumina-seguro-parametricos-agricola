import { ArrowDown } from 'lucide-react'

const referenceImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sprvRnnRHakUqCScS8aTUGHMq3FWWt.png'

export function RuralHero() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow">LINHA RURAL</p>
        <span className="product-pill">Seguro Paramétrico</span>
        <h1 className="hero-title" id="hero-title">
          O seguro acessível e sob medida <span>para o pequeno produtor rural proteger o seu trabalho e a sua família.</span>
        </h1>
        <a className="how-it-works" href="#como-funciona">
          <span>Como funciona</span>
          <ArrowDown aria-hidden="true" size={19} strokeWidth={2.2} />
        </a>
      </div>

      <div className="hero-art" aria-hidden="true">
        <img
          className="hero-art-image"
          src={referenceImage}
          alt=""
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
