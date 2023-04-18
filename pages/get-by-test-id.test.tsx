import { render, screen } from '@testing-library/react'
import GetByTestId from './get-by-test-id'

describe('GetByTestId', () => {
  it('should render a div with the text "Hello"', () => {
    render(<GetByTestId />)
    const div = screen.getByTestId('my-div')
    expect(div).toHaveTextContent('Hello')
  })
})

// TIP: you can use .getByTestId as a last resort if you can't find an element with a role or text (only use it if other methods don't work)
// Just assign data-testid='my-div' to the element you want to find
// @see https://testing-library.com/docs/queries/bytestid/
