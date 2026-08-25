import Image from "next/image"

type MediaFrameProps = {
  src: string
  alt: string
  width: number
  height: number
  label: string
  note: string
  priority?: boolean
}
export default function MediaFrame({ src, alt, width, height, label, note, priority = false }: MediaFrameProps) {
  return (
    <figure className="media-frame">
      <div className="media-frame-image">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </div>
      <figcaption><span>{label}</span>{note}</figcaption>
    </figure>
  )
}
