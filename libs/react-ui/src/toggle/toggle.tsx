import { SInput, SToggle } from './toggle.style'
import type { TToggle } from './toggle.type'

export const Toggle = ({ checked, onChange, id }: TToggle) => {
  return (
    <SToggle $checked={checked}>
      <SInput id={id} type="checkbox" onChange={onChange} />
    </SToggle>
  )
}
