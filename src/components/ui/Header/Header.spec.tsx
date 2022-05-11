import React from 'react'
import { render, screen } from 'utils/test-utils'
import { Default } from './Header.stories'

describe('<Header>', () => {
  it('should render Header', () => {
    render(<Default {...Default.args} />, {})
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('should have a logo', () => {
    render(<Default {...Default.args} />, {})
    expect(screen.getByAltText(/weather ?now/i)).toBeInTheDocument()
  })
})
