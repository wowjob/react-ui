import { useEffect, useReducer, useRef } from 'react'
import type { ChangeEvent, FocusEvent, MouseEvent, TouchEvent } from 'react'
import {
  SAction,
  SButton,
  SContent,
  SCurrent,
  SItemGrid,
  SRemoveButton,
  SRotatingCarousel,
  SRotatingInfo,
  SRotatingMainTitle,
  SSelected,
} from './rotating-carousel.style'
import {
  initialValue,
  rotatingCarouselReducer,
} from './rotating-carousel.reducer'
import { A } from './rotating-carousel.action'
import { Button, RotatingItem, TRotatingItem } from '..'
import { generateSequence } from '@af/util'

export const RotatingCarousel = () => {
  const rotatingCarouselRef = useRef<HTMLDivElement>(null)
  const swipeData = useRef({
    startX: 0,
    endX: 0,
  })

  const [state, dispatch] = useReducer(rotatingCarouselReducer, initialValue)
  const {
    list,
    postURL,
    initialized,
    selectedList,
    maxSelected,
    lastFocused,
    minimumItemNumber,
    originalItemNumber,
    maxSelectedText,
    currentSelectedJoinText,
    mainTitle,
    action,
    config,
  } = state

  useEffect(() => {
    if (!initialized) {
      dispatch(A.actionInit())
    }
  }, [initialized])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(A.actionToggleInput(+(e.target.dataset.id || 0)))
    if (rotatingCarouselRef && rotatingCarouselRef.current) {
      const elementData = list.find(
        ({ dataId }) => dataId === +(e.target.dataset.id || 0),
      )
      if (elementData) {
        rotatingCarouselRef.current.style.setProperty(
          '--text-color',
          elementData.textColour as string,
        )
      }
    }
  }

  const onFocus = (e: FocusEvent<HTMLInputElement>) => {
    dispatch(A.actionFocusInput(e.target.id))
  }

  const focusPrev = () => {
    dispatch(A.actionFocusPrevInput())
  }

  const focusNext = () => {
    dispatch(A.actionFocusNextInput())
  }

  const removeItem = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement
    dispatch(A.actionRemoveInput(name))
  }

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    // Set the start position of the swipe
    swipeData.current.startX = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    // Set the end position of the swipe
    swipeData.current.endX = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (swipeData.current.startX - swipeData.current.endX > 100) {
      // If the difference in the start and end position is more than 100px, consider it a swipe
      focusNext()
    } else if (swipeData.current.endX - swipeData.current.startX > 100) {
      focusPrev()
    }
  }

  const lastFocusedIndex = +lastFocused.split('-')[3] - 1
  const howManyLeftAndRight = 6
  const arr = generateSequence(
    lastFocusedIndex,
    minimumItemNumber,
    howManyLeftAndRight * 2,
  )

  const whichOneFocused = (lastFocusedIndex + 1) % originalItemNumber
  const whichOneFocusedPretty =
    whichOneFocused === 0 ? originalItemNumber : whichOneFocused

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement

    if (action.buttonList.includes(name)) {
      const className = `.${action.prefix}${name} > :first-child`
      const actionElement = document.querySelector(className)

      const taxonomyValueMap: Record<string, string> = list
        .filter(({ checked }) => checked)
        .reduce(
          (a, c: TRotatingItem) => ({ ...a, [c.dataId || '']: c.label }),
          {},
        )

      const taxonomyValueList = Object.keys(taxonomyValueMap).map((key) => ({
        id: +key,
        label: taxonomyValueMap[key],
      }))

      console.log(taxonomyValueList)
      if (actionElement) {
        const href = actionElement.getAttribute('href')

        const postData = {
          // taxonomyProfile: '1',
          // taxonomyName: '2',
          // saveData: '3',
          ...config,
          taxonomyValues: JSON.stringify(taxonomyValueList),
          nextPage: href,
        }

        try {
          //
          const { result, nextPage } = await (
            await fetch(postURL, {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(postData),
            })
          ).json()

          if (result) {
            window.location.assign(nextPage)
          }
        } catch (error: Error | any) {
          console.log('Error: ', error.message)
        }
      }
    }
  }

  return (
    <div>
      <SRotatingCarousel
        ref={rotatingCarouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        $backgroundImage={list[lastFocusedIndex].backgroundImage || ''}
      >
        <SContent>
          <SRotatingMainTitle>{mainTitle}</SRotatingMainTitle>
          <SRotatingInfo>
            <span>{maxSelectedText}</span>
            {selectedList.length > 0 && (
              <span>
                {' '}
                ({selectedList.length}/{maxSelected})
              </span>
            )}
          </SRotatingInfo>
          <SSelected>
            {selectedList.length > 0 &&
              selectedList.map(({ dataId, label }) => (
                <SRemoveButton
                  key={dataId}
                  name={String(dataId)}
                  onClick={removeItem}
                >
                  {label}
                </SRemoveButton>
              ))}
          </SSelected>
          <SCurrent>
            {whichOneFocusedPretty}
            {currentSelectedJoinText}
            {originalItemNumber}
          </SCurrent>
          <SItemGrid>
            <SButton
              aria-label="previous item"
              $direction="left"
              onClick={focusPrev}
            />
            <div>
              {list.map(
                (
                  {
                    backgroundImage,
                    dataId,
                    description,
                    label,
                    id,
                    textColour,
                    checked,
                    itemImage,
                  },
                  key,
                ) => (
                  <RotatingItem
                    key={id}
                    id={id}
                    angle={
                      arr.includes(key)
                        ? arr.indexOf(key) - howManyLeftAndRight + 1
                        : 12
                    }
                    textColour={textColour}
                    backgroundImage={itemImage}
                    dataId={dataId}
                    description={description}
                    label={label}
                    onChange={onChange}
                    onFocus={onFocus}
                    checked={checked}
                    focused={
                      lastFocused === `rotating-item-selector-${key + 1}`
                    }
                  />
                ),
              )}
            </div>
            <SButton
              aria-label="next item"
              $direction="right"
              onClick={focusNext}
            />
          </SItemGrid>
          <SAction>
            <Button name="next" onClick={onClick} theme="fill">
              Next
            </Button>
            <Button name="skip" onClick={onClick} theme="text">
              Skip
            </Button>
          </SAction>
        </SContent>
      </SRotatingCarousel>
    </div>
  )
}
