import { SInput, SToggle } from './toggle.style'
import type { TToggle } from './toggle.type'

export const Toggle = ({ checked, onChange }: TToggle) => {
  return (
    <SToggle $checked={checked}>
      <SInput type="checkbox" onChange={onChange} />
    </SToggle>
  )
}
