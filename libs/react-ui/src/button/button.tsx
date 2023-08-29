import { SButton } from './button.style'
import type { TButton } from './button.type'

export const Button = ({ theme, children, onClick, name }: TButton) => {
  return (
    <SButton name={name} $theme={theme} onClick={onClick}>
      {children}
    </SButton>
  )
}
