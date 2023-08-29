import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import { Global, RotatingCarousel } from '@af/rui'

const root = ReactDOM.createRoot(
  document.getElementById('rotating-carousel') as HTMLElement,
)

root.render(
  <StrictMode>
    <Global />

    <RotatingCarousel />
  </StrictMode>,
)
