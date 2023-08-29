import type { ChangeEvent, FocusEvent, ReactNode } from 'react'

export type TRotatingItemBase = {
  dataId?: number
  id?: number
  label?: string
  textColour?: string
  itemImage?: string
  backgroundImage?: string
  children?: ReactNode
  focused?: boolean
  angle?: number
  checked?: boolean
}

export type TRotatingItem = {
  description: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus: (e: FocusEvent<HTMLInputElement>) => void
} & TRotatingItemBase

export type $TRotatingItem = {
  [$ in keyof TRotatingItemBase as `$${string & $}`]: TRotatingItemBase[$]
}
