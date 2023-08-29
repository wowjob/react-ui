import type { ChangeEvent, ReactNode } from 'react'

type TFilterItem = {
  dataId: number | string
  label?: string
  checked?: boolean
  children?: ReactNode
  type?: 'checkbox' | 'radio'
}

export type $TFilterItem = {
  [$ in keyof TFilterItem as `$${string & $}`]: TFilterItem[$]
}

export type TFilterList = {
  list: TFilterItem[]
  name?: string
  index?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
} & TFilterItem
