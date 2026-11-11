const referenceImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mxaHTSK5S03GCQoFheva2nTiYh4WEK.png'

export function VideoPresentationSection() {
  return (
    <section className="video-section" id="como-funciona" aria-labelledby="video-section-title">
      <div className="video-section-copy">
        <h2 className="video-section-title" id="video-section-title">
          <span>Proteção</span> e estabilidade financeira
          <br />
          para a Agricultura Familiar.
        </h2>
        <p className="video-section-description">
          Assista este vídeo para conhecer o seguro paramétrico, uma solução para a adaptabilidade climática
        </p>
      </div>

      <div
        className="video-preview"
        role="img"
        aria-label="Prévia do vídeo: Potencial da Agricultura Familiar"
      >
        <img className="video-preview-image" src={referenceImage} alt="" loading="lazy" />
      </div>

      <a className="video-section-cta" href="#cadastro">
        Corretor, cadastre-se aqui
      </a>
    </section>
  )
}
