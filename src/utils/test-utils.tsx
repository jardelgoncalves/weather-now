import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
type CustomRenderProps = {} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps
) => render(ui, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
