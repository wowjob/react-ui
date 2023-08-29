import { Global, GridList } from '@af/rui'
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(
  document.getElementById('grid-list') as HTMLElement,
)

root.render(
  <StrictMode>
    <Global />

    <GridList />
  </StrictMode>,
)
