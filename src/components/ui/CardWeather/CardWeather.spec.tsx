import userEvent from '@testing-library/user-event'
import React from 'react'
import { render, screen, waitFor } from 'utils/test-utils'
import { Basic as BasicStory } from './CardWeather.stories'

describe('<CardWeather>', () => {
  it('should render CardWeather', () => {
    render(
      <BasicStory
        title=""
        temp={0}
        pressure={0}
        humidity={0}
        {...BasicStory.args}
      />,
      {}
    )
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 4 }).length).toEqual(2)
  })

  it('should render CardWeather with try again button and error', () => {
    render(
      <BasicStory
        title=""
        temp={0}
        pressure={0}
        humidity={0}
        {...BasicStory.args}
        isError
      />,
      {}
    )
    expect(screen.getByText(/something/i)).toBeInTheDocument()
    expect(screen.getByText(/try again/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render CardWeather with loading', () => {
    render(
      <BasicStory
        title=""
        temp={0}
        pressure={0}
        humidity={0}
        {...BasicStory.args}
        isLoading
      />,
      {}
    )
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()
  })

  it('should have a clickable try again button', async () => {
    const onClick = jest.fn()
    render(
      <BasicStory
        title=""
        temp={0}
        pressure={0}
        humidity={0}
        {...BasicStory.args}
        isError
        onClick={onClick}
      />,
      {}
    )
    const button = screen.getByText(/try again/i)
    userEvent.click(button)

    await waitFor(() => {
      expect(onClick).toHaveBeenCalled()
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
