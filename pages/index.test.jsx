import { render } from '@testing-library/react'
import Home from './index'

describe('Home', () => {
  it('renders a heading with the text "Hello"', () => {
    const { getByRole } = render(<Home />)
    const headingElement = getByRole('heading', { name: 'Hello' })
    expect(headingElement).toBeInTheDocument()
  })
})
