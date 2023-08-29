import type { MouseEvent, ReactNode } from 'react'

const buttonThemeList = ['fill', 'outlined', 'text'] as const
type TButtonTheme = (typeof buttonThemeList)[number]

export type TButtonBase = {
  theme: TButtonTheme
}

export type TButton = {
  name?: string
  children?: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
} & TButtonBase

export type $TButton = {
  [$ in keyof TButtonBase as `$${string & $}`]: TButtonBase[$]
}
