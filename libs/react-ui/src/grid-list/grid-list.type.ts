import type { ChangeEvent, FocusEvent, ReactNode } from 'react'

const themeList = ['black', 'white', 'custom'] as const
type TTheme = (typeof themeList)[number]

export type TGridListFlavourBase = {
  dataId?: number
  id?: number
  label?: string
  textColour?: string
  itemImage?: string
  backgroundImage?: string
  children?: ReactNode
  focused?: boolean
  checked?: boolean
  hightlight?: boolean
  theme?: TTheme
}

export type TGridListFlavour = {
  description: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus: (e: FocusEvent<HTMLInputElement>) => void
} & TGridListFlavourBase

export type $TGridListFlavour = {
  [$ in keyof TGridListFlavourBase as `$${string & $}`]: TGridListFlavourBase[$]
}
