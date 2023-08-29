import { Image } from '..'
import {
  SRotatingDescription,
  SRotatingImageText,
  SRotatingImageWrapper,
  SRotatingInput,
  SRotatingItem,
  SRotatingLabel,
} from './rotating-item.style'
import type { TRotatingItem } from './rotating-item.type'

export const RotatingItem = ({
  backgroundImage,
  dataId,
  description,
  label,
  id,
  textColour,
  onChange,
  onFocus,
  checked,
  focused,
  angle,
}: TRotatingItem) => (
  <SRotatingLabel htmlFor={`rotating-item-selector-${id}`}>
    <SRotatingItem
      $backgroundImage={backgroundImage}
      $dataId={dataId}
      $label={label}
      $textColour={textColour}
      $focused={focused}
      $angle={angle}
    >
      <SRotatingInput
        onChange={onChange}
        onFocus={onFocus}
        type="checkbox"
        id={`rotating-item-selector-${id}`}
        data-id={dataId}
        checked={checked}
        autoFocus={focused}
      />
      <SRotatingImageWrapper $focused={focused} $checked={checked}>
        <Image src={backgroundImage || ''} alt={`${label}: ${description}`} />
        <SRotatingImageText $textColour={textColour}>
          {label}
        </SRotatingImageText>
      </SRotatingImageWrapper>

      <SRotatingDescription $focused={focused}>
        {description}
      </SRotatingDescription>
    </SRotatingItem>
  </SRotatingLabel>
)
