import { render, screen } from '@testing-library/react'
import Home from './index'

describe('Home', () => {
  it('renders a heading with the text "Hello"', () => {
    render(<Home />)
    const headingElement = screen.getByRole('heading', { name: 'Hello' })

    // Assertion
    expect(headingElement).toBeInTheDocument()
    // expect(headingElement.textContent).toBe('Hello') // ? SAME AS ABOVE

    // TIP:
    // expect is a global function that starts an assertion
    // .toBeInTheDocument() is an assertion matcher that comes from jest-dom
    // the matcher can have arguments
  })
})
