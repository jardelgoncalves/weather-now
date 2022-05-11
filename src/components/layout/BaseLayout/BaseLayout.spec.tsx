import React from 'react'
import { render, screen } from 'utils/test-utils'
import { Basic as BasicStory } from './BaseLayout.stories'

describe('<BaseLayout>', () => {
  it('should render BaseLayout', () => {
    render(<BasicStory {...BasicStory.args} />, {})
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByAltText(/weather ?now/i)).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('should render h2 inside the BaseLayout', () => {
    render(
      <BasicStory {...BasicStory.args}>
        <h2>Hello</h2>
      </BasicStory>,
      {}
    )
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
