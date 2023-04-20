import { render, screen, fireEvent } from '@testing-library/react'
import CheckboxButton from './checkbox-button'

describe('CheckboxButton', () => {
  test('when checkbox is checked, button should be disabled', () => {
    render(<CheckboxButton />)
    // get the checkbox from its label text "Disable button"
    const checkbox = screen.getByRole('checkbox', {
      name: 'Disable button',
    })
    const button = screen.getByRole('button', { name: 'Button' })

    // Check initial state (before checkbox is checked) - check that the button is enabled
    expect(checkbox).not.toBeChecked()
    expect(button).toBeEnabled()

    // Check new state after checkbox is checked - check that the button is disabled
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(button).toBeDisabled()
    expect(button).toHaveStyle({
      backgroundColor: 'black',
      color: 'gray',
      border: 0,
    })

    // Check new state after checkbox is unchecked - check that the button is enabled
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(button).toBeEnabled()
  })
})
