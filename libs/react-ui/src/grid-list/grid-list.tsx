import { useEffect, useReducer } from 'react'
import type { ChangeEvent } from 'react'
import {
  SChevron,
  SFilter,
  SGridBackground,
  SGridList,
  SGridListContent,
  SGridTitle,
  SInput,
  SLabel,
  SMainCheckbox,
  SMainCheckboxWrapper,
  SSpan,
  STitle,
  STitleWrapper,
} from './grid-list.style'
import { gridListReducer, initialValue } from './grid-list.reducer'
import { A } from './grid-list.action'
import { hexToHSL } from '@af/util'
import { createPortal } from 'react-dom'
import { FilterList } from '../filter-list'
import { Toggle } from '../toggle'

export const GridList = () => {
  const [state, dispatch] = useReducer(gridListReducer, initialValue)
  const {
    flavour,
    initialized,
    config,
    filter,
    sort,
    profileOn,
    lastUpdate,
    postURL,
  } = state
  const whichFilter = profileOn ? 'profileOn' : 'profileOff'
  const { selected: selectedFlavourList = [] } = flavour[whichFilter]

  useEffect(() => {
    if (!initialized) {
      dispatch(A.actionInitFlavour())
      const paramList = new URL(window.location.href)
      const flavour = paramList.searchParams.get('flavor')
      if (flavour) {
        console.log(flavour)
        dispatch(A.actionForceSelectOne(flavour))
      }
    }
  }, [initialized])

  useEffect(() => {
    if (lastUpdate > 0) {
      const filterList = filter[whichFilter].map((el) => ({
        taxonomy: el.dataId,
        values: el.list
          .filter(({ checked }) => checked)
          .map(({ dataId }) => dataId),
      }))

      // main selection
      const mainSelectionMap = {
        taxonomy: flavour.featuredId,
        values: flavour[whichFilter].list
          .filter(({ checked }) => checked)
          .map(({ dataId }) => dataId),
      }

      const dataMap = {
        pageId: config.pageid,
        source: config.source,
        taxonomyProfile: config.profile,
        documentTypes: config.type,
        filters: JSON.stringify([...filterList, mainSelectionMap]),
        sort: sort.list.find(({ checked }) => checked)?.dataId,
        pageNumber:
          document.querySelectorAll('.grid-list__wrapper').length + 1 || 1,
      }

      try {
        fetch(postURL, {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(dataMap),
        })
          .then((res) => {
            return res.text()
          })
          .then((htmlResponse) => {
            document
              .querySelector('.grid-list__wrapper .results-summary')
              ?.remove()
            document
              .querySelector('.grid-list__wrapper .paging-container')
              ?.remove()

            document
              .querySelector('.accessible-filter__grid-list')
              ?.insertAdjacentHTML('beforeend', htmlResponse)
          })
      } catch (error: any) {
        console.log('Error: ', error?.message)
      }
    }
  }, [lastUpdate])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dataId = (e.target as HTMLInputElement).dataset.id
    dispatch(
      dataId === 'all'
        ? A.actionResetFlavour()
        : A.actionChangeFlavour(+(dataId || 0)),
    )
  }

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dataId = (e.target as HTMLInputElement).dataset.id
    const { name, type } = e.target as HTMLInputElement

    const parsedName = +name.split('-')[1]
    const parsedKey = +name.split('-')[3]

    if (type === 'checkbox') {
      dispatch(A.actionChangeCheckbox(dataId || 0, parsedName, parsedKey))
    } else if (type === 'radio') {
      dispatch(A.actionChangeRadio(dataId || '', parsedName))
    }
  }

  const onProfileChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(A.actionToggleProfile())
  }

  const getCSSColour = () => {
    if (Array.isArray(selectedFlavourList)) {
      if (selectedFlavourList.length === 0) {
        return {
          '--bg-color': 'transparent',
          '--border-color': 'var(--black)',
          '--text-color': 'var(--black)',
        }
      } else if (selectedFlavourList.length === 1) {
        const { l } = hexToHSL(selectedFlavourList[0].textColour || '')

        return {
          '--bg-color': selectedFlavourList[0].textColour,
          '--border-color': selectedFlavourList[0].textColour,
          '--text-color': l < 0.5 ? 'var(--white)' : 'var(--black)',
        }
      } else {
        return {
          '--bg-color': 'var(--white)',
          '--border-color': 'var(--white)',
          '--text-color': 'var(--black)',
        }
      }
    }
  }

  const getBackground = () => {
    if (Array.isArray(selectedFlavourList)) {
      if (selectedFlavourList.length === 0) {
        return {
          '--bg': `url(${config.noFilterBackground})`,
        }
      } else if (selectedFlavourList.length === 1) {
        return {
          '--bg': `url(${selectedFlavourList[0].backgroundImage})`,
        }
      } else {
        return {
          '--bg': `url(${config.manyFilterBackground})`,
        }
      }
    }
  }

  const getTitle = () => {
    if (Array.isArray(selectedFlavourList)) {
      if (selectedFlavourList.length === 0) {
        return config.flavour.all
      } else if (selectedFlavourList.length === 1) {
        return `${selectedFlavourList[0].label} ${config.flavour.cocktails}`
      } else if (selectedFlavourList.length === 2) {
        return `${selectedFlavourList[0].label} & ${selectedFlavourList[1].label} ${config.flavour.cocktails}`
      } else {
        return config.flavour.variety
      }
    }
  }

  // Reference to the controlled DOM element
  const controlledElement = document.querySelector('.accessible-filter__side')

  return (
    <>
      <SGridList style={getCSSColour() as any}>
        <SGridBackground style={getBackground() as any} />
        <SGridListContent>
          <SGridTitle>{getTitle()}</SGridTitle>
          <SMainCheckboxWrapper>
            <SMainCheckbox>
              <SLabel $hightlight={selectedFlavourList.length === 0}>
                <SInput onChange={onChange} type="checkbox" data-id="all" />
                <SSpan>ALL</SSpan>
              </SLabel>
              {flavour[whichFilter].list.map(
                ({ onFocus, checked, dataId, id, textColour, label }) => (
                  <SLabel
                    key={dataId}
                    htmlFor={`flavour-${dataId}`}
                    $checked={checked}
                  >
                    <SInput
                      onChange={onChange}
                      id={`flavour-${dataId}`}
                      type="checkbox"
                      data-id={dataId}
                      checked={checked}
                    />
                    <SSpan>{label}</SSpan>
                  </SLabel>
                ),
              )}
            </SMainCheckbox>
          </SMainCheckboxWrapper>
        </SGridListContent>
      </SGridList>

      {controlledElement &&
        createPortal(
          // The JSX you want to render inside the controlled DOM element
          <SFilter>
            <STitleWrapper>
              <STitle as="label" htmlFor="use-profile">
                {filter.profileToggleLabel}
              </STitle>

              {/* <div>{filter.profileToggleDescription}</div> */}

              <Toggle
                id="use-profile"
                checked={profileOn}
                onChange={onProfileChange}
              />
            </STitleWrapper>

            <SInput type="checkbox" id="toggle-filter" />

            <STitle $underline as="label" htmlFor="toggle-filter">
              Filter
              <SChevron $checked={profileOn} />
            </STitle>

            {filter[whichFilter].map(
              ({ dataId, label, list, type, name }, key) => (
                <FilterList
                  dataId={dataId}
                  key={key}
                  label={label}
                  list={list}
                  type={type}
                  name={name}
                  onChange={onFilterChange}
                  index={key}
                />
              ),
            )}

            <FilterList {...sort} onChange={onFilterChange} />
          </SFilter>,
          controlledElement,
        )}
    </>
  )
}
