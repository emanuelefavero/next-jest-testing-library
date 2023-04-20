import { render, screen } from '@testing-library/react'
import Header from './Header'
import mockRouter from 'next-router-mock'

// mock the router for the Header component
jest.mock('next/router', () => require('next-router-mock'))

describe('Header', () => {
  it('should render a link to the home page', () => {
    render(<Header />)
    const linkElement = screen.getByText('Home')
    expect(linkElement).toBeInTheDocument()
  })
})
