import { render, screen } from '@testing-library/react'
import Home from './index'

describe('Home', () => {
  // TIP: it() and test() are the same
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

  // TIP: A test fails only if it throws an error, so empty tests will pass
  it('do nothing', () => {})

  // it('throws an error', () => {
  //   throw new Error('This test failed')
  // })
})
