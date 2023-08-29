export type TRotatingCarousel = {
  backgroundImage: string
}

export type $TRotatingCarousel = {
  [$ in keyof TRotatingCarousel as `$${string & $}`]: TRotatingCarousel[$]
}
