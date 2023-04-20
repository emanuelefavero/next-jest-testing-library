import { render, screen, fireEvent } from '@testing-library/react'
import { logRoles } from '@testing-library/dom'
import ColorButtonPage from './color-button'

describe('ColorButtonPage', () => {
  test('button should toggle between Crimson and MidnightBlue when clicked', () => {
    render(<ColorButtonPage />)
    const button = screen.getByRole('button', {
      name: 'Change to Midnight Blue',
    })

    // Check initial state
    expect(button).toHaveStyle({ backgroundColor: 'Crimson' })
    expect(button).toHaveTextContent('Change to Midnight Blue')

    // Check new state after first click
    fireEvent.click(button)
    expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })
    expect(button).toHaveTextContent('Change to Crimson')

    // Check new state after second click
    fireEvent.click(button)
    expect(button).toHaveStyle({ backgroundColor: 'Crimson' })
    expect(button).toHaveTextContent('Change to Midnight Blue')
  })

  // TIP: logRoles() is a function from @testing-library/dom that will help you debug your tests by logging the elements and their roles
  test('log roles of this page', () => {
    const { container } = render(<ColorButtonPage />)
    // logRoles(container) // ! Uncomment to see the roles in the jest output
  })
})

/* .toHaveStyle() is a custom matcher from jest-dom
// @see https://github.com/testing-library/jest-dom
// Other custom matchers:
// * toBeDisabled
// * toBeEnabled
toBeEmptyDOMElement
// * toBeInTheDocument
toBeInvalid
toBeRequired
toBeValid
// * toBeVisible
// * toContainElement
// * toContainHTML
toHaveAccessibleDescription
toHaveAccessibleName
toHaveAttribute
// * toHaveClass
// * toHaveFocus
toHaveFormValues
// * toHaveStyle
// * toHaveTextContent
// * toHaveValue
toHaveDisplayValue
// * toBeChecked
toBePartiallyChecked
toHaveErrorMessage
*/
