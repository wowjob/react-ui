import { ChangeEvent } from 'react'

export type TToggleBase = {
  checked?: boolean
}

export type TToggle = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
} & TToggleBase

export type $TToggle = {
  [$ in keyof TToggleBase as `$${string & $}`]: TToggleBase[$]
}
