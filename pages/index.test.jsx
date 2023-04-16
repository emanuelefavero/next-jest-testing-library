import { render, screen } from '@testing-library/react'
import Home from './index'

describe('Home', () => {
  it('renders a heading with the text "Hello"', () => {
    render(<Home />)
    const headingElement = screen.getByRole('heading', { name: 'Hello' })
    expect(headingElement).toBeInTheDocument()
  })
})
