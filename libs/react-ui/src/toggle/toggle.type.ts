import { ChangeEvent } from 'react'

export type TToggleBase = {
  checked?: boolean
}

export type TToggle = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  id?: string
} & TToggleBase

export type $TToggle = {
  [$ in keyof TToggleBase as `$${string & $}`]: TToggleBase[$]
}
