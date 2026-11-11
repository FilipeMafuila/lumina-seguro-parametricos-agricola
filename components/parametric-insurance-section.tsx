const referenceImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g1io5vRT25OJuiICG6W84ApXFrWuit.png'

export function ParametricInsuranceSection() {
  return (
    <section className="parametric-section" aria-labelledby="parametric-title">
      <div className="parametric-section-grid">
        <figure className="parametric-collage">
          <img
            className="parametric-collage-image"
            src={referenceImage}
            alt="Indicadores climáticos em lavouras: temperatura, umidade e chuva, protegidos por um escudo."
            loading="lazy"
          />
        </figure>

        <div className="parametric-copy">
          <h2 className="parametric-title" id="parametric-title">
            <span className="parametric-title-lead">Como funciona o</span>
            <span className="parametric-title-accent">Seguro Paramétrico?</span>
          </h2>
          <p>
            O seguro paramétrico utiliza diferentes indicadores — como{' '}
            <strong>temperatura, chuva e umidade</strong> — para definir valores mínimos e máximos que serão usados
            para pagar indenizações em caso de sinistros provocados pelo clima.
          </p>
          <p>
            Isso simplifica o processo e torna mais objetivo o cálculo das perdas, o que evita gastos com peritos e
            possíveis disputas judiciais. Dessa forma, mais famílias podem ter acesso ao seguro paramétrico, visto
            que o custo operacional é menor. Além disso, essa modalidade de seguro pode ser usada para proteger
            praticamente qualquer tipo de cultura.
          </p>
          <a className="parametric-section-cta" href="#cadastro">
            Corretor, cadastre-se aqui
          </a>
        </div>
      </div>
    </section>
  )
}
