import { render, screen, fireEvent } from '@testing-library/react'
import { logRoles } from '@testing-library/dom'
import ColorButtonPage from './color-button'

describe('ColorButtonPage', () => {
  test('button should toggle between red and blue when clicked', () => {
    render(<ColorButtonPage />)
    const button = screen.getByRole('button', { name: 'Change to blue' })

    // Check initial state
    expect(button).toHaveStyle({ backgroundColor: 'red' })
    expect(button).toHaveTextContent('Change to blue')

    // Check new state after first click
    fireEvent.click(button)
    expect(button).toHaveStyle({ backgroundColor: 'blue' })
    expect(button).toHaveTextContent('Change to red')

    // Check new state after second click
    fireEvent.click(button)
    expect(button).toHaveStyle({ backgroundColor: 'red' })
    expect(button).toHaveTextContent('Change to blue')
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
