import { render, screen, fireEvent } from '@testing-library/react'
import SummaryForm from './summary-form'

describe('SummaryForm', () => {
  test('checkbox is unchecked by default, checking the checkbox enables the button, unchecking the checkbox disables the button', () => {
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {
      name: 'I agree to Terms and Conditions',
    })
    const button = screen.getByRole('button', { name: 'Confirm order' })

    //  Check initial state (checkbox is unchecked, button is disabled)
    expect(checkbox).not.toBeChecked()
    expect(button).toBeDisabled()

    // Check state when checkbox is checked (button is enabled)
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(button).toBeEnabled()

    // Check state when checkbox is unchecked (button is disabled)
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(button).toBeDisabled()
  })
})
