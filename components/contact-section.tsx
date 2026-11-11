import { ArrowDown } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-panel-inner">
          <div className="contact-copy">
            <span className="product-pill contact-pill">Seguro Paramétrico</span>
            <h2 className="contact-title" id="contact-title">
              <span className="contact-title-lead">Fale com a Newe.</span>
              <span className="contact-title-message">
                Atendimento rápido, com
                <br />
                a solução que você precisa.
              </span>
            </h2>
          </div>

          <a className="contact-panel-action" href="#cadastro">
            <span>Fale com a Newe</span>
            <ArrowDown aria-hidden="true" size={22} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}
