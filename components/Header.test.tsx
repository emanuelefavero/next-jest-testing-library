import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('should render a link to the home page', () => {
    render(<Header />)
    const linkElement = screen.getByText('Home')
    expect(linkElement).toBeInTheDocument()
  })
})
