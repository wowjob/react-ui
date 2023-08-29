import { SInput, SLabel, SList, STitle } from './filter-list.style'
import type { TFilterList } from './filter-list.type'

export const FilterList = ({
  dataId,
  label,
  list,
  type,
  name,
  onChange,
  index,
}: TFilterList) => {
  return (
    <SList>
      <STitle>{label}</STitle>
      {list.map(({ dataId: id, label: text, checked }) => (
        <SLabel
          htmlFor={`${type}-${dataId}-${id}-${index}`}
          key={`${type}-${dataId}-${id}`}
          $checked={checked}
          $dataId={dataId}
          $type={type}
        >
          <SInput
            onChange={onChange}
            name={`${type}-${dataId}-${id}-${index}`}
            type={type}
            checked={checked}
            id={`${type}-${dataId}-${id}-${index}`}
            data-id={id}
          />
          <span>{text}</span>
        </SLabel>
      ))}
    </SList>
  )
}
