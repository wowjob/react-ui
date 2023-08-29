type TTaxonomyValue = {
  id: number
  label: string
}

type TAction = {
  buttonList: string[]
  prefix: string
}

type TConfig = {
  taxonomyProfile: string
  taxonomyName: string
  saveData: string
}

type TRotatingCarousel = {
  postURL: string
  maxSelected: number
  list: TRotatingItem[]
  initialized: boolean
  selectedList: TRotatingItemBase[]
  lastFocused: string
  minimumItemNumber: number
  originalItemNumber: number
  maxSelectedText: string
  currentSelectedJoinText: string
  mainTitle: string
  action: TAction
  config: TConfig
  nextPage: string
  taxonomyValues: string
  // taxonomyValueList: TTaxonomyValue[]
}

interface Window {
  rotatingCarousel: TRotatingCarousel
}

declare global {
  interface Window {
    rotatingCarousel: TRotatingCarousel
  }
}
