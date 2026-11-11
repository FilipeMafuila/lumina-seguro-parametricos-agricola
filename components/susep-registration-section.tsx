const referenceImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ad7IH9hQTzrnBuz8cdqacYabFdtwUc.png'

export function SusepRegistrationSection() {
  return (
    <section className="registration-section" aria-label="Registro SUSEP do seguro paramétrico">
      <div className="registration-photo" aria-hidden="true">
        <img className="registration-photo-image" src={referenceImage} alt="" />
      </div>

      <div className="registration-container">
        <div className="registration-card">
          <h2 className="registration-title">REGISTRO SUSEP</h2>
          <p className="registration-subtitle">Paramétrico</p>
          <div className="registration-numbers">
            <p>
              <strong>Subvencionável:</strong> 15414.619602/2020-01
            </p>
            <p>
              <strong>Não-Subvencionável:</strong> 15414.604915/2020-
              <br />
              56
            </p>
          </div>
        </div>

        <p className="registration-legal">
          A aceitação da proposta de seguro está sujeita à análise de risco. O registro deste plano da SUSEP não
          implica, por parte da Autarquia, incentivo ou recomendação à sua comercialização. O segurado poderá
          consultar a situação cadastral do corretor de seguros e da sociedade seguradora no sítio eletrônico{' '}
          <a href="https://www.susep.gov.br" target="_blank" rel="noreferrer">
            www.susep.gov.br
          </a>
          .
        </p>
      </div>
    </section>
  )
}
