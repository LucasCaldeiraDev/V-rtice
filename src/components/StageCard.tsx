import type { Stage } from '../content/site'

/**
 * Variante compacta usada como legenda sobre o vídeo: pequena, ancorada no
 * canto e translúcida, para nunca cobrir a construção em cena.
 */
export function StageCaption({ stage }: { stage: Stage }) {
  return (
    <article className="border-2 border-grafite bg-papel/90 p-4 backdrop-blur-sm md:p-5">
      <p className="cota">
        Etapa {stage.numero} — {stage.nome}
      </p>
      <h3 className="display mt-1.5 text-xl md:text-2xl">{stage.titulo}</h3>
      <p className="mt-1.5 text-[0.8125rem] leading-snug text-grafite/80">{stage.texto}</p>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-dashed border-projeto/40 pt-2 font-mono text-[0.625rem] tracking-[0.08em] uppercase">
        {stage.dados.map((d) => (
          <span key={d.label} className="text-grafite/60">
            {d.label} <span className="font-medium normal-case text-projeto">{d.value}</span>
          </span>
        ))}
      </p>
    </article>
  )
}

export function StageCard({ stage, withImage = false }: { stage: Stage; withImage?: boolean }) {
  return (
    <article className="border-2 border-grafite bg-papel">
      {withImage && (
        <img
          src={stage.img}
          alt={stage.imgAlt}
          width={1920}
          height={1072}
          loading="lazy"
          decoding="async"
          className="aspect-video w-full border-b-2 border-grafite object-cover"
        />
      )}
      <div className="p-4 sm:p-6 md:p-8">
        <p className="cota">
          Etapa {stage.numero} — {stage.nome}
        </p>
        <h3 className="display mt-2 text-2xl sm:mt-3 sm:text-3xl md:text-4xl">{stage.titulo}</h3>
        <p className="mt-2 text-[0.8125rem] leading-snug text-grafite/80 sm:mt-3 sm:text-sm sm:leading-relaxed md:text-base">
          {stage.texto}
        </p>
        <dl className="mt-3 font-mono text-xs sm:mt-5">
          {stage.dados.map((d) => (
            <div
              key={d.label}
              className="flex items-baseline justify-between border-t border-dashed border-projeto/40 py-1.5 sm:py-2"
            >
              <dt className="uppercase tracking-[0.14em] text-grafite/60">{d.label}</dt>
              <dd className="text-sm font-medium text-projeto">{d.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}
