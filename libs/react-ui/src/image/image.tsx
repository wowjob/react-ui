import { SImage } from './image.style'
import type { TImage } from './image.type'

export const Image = ({ alt, src }: TImage) => {
  return <SImage alt={alt} src={src} loading="lazy" />
}
