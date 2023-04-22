import { render, screen } from '@testing-library/react'
import SummaryForm from './SummaryForm'
import userEvent from '@testing-library/user-event'

describe('SummaryForm', () => {
  test('checkbox is unchecked by default, checking the checkbox enables the button, unchecking the checkbox disables the button', async () => {
    // NOTE: Setup userEvent
    const user = userEvent.setup()

    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {
      name: /I agree to Terms and Conditions/i,
    })
    const button = screen.getByRole('button', { name: /Confirm order/i })

    //  Check initial state (checkbox is unchecked, button is disabled)
    expect(checkbox).not.toBeChecked()
    expect(button).toBeDisabled()

    // Check state when checkbox is checked (button is enabled)
    // NOTE: userEvent always returns a promise, so we need to await it
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(button).toBeEnabled()

    // Check state when checkbox is unchecked (button is disabled)
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(button).toBeDisabled()
  })

  test('popover responds to hover', async () => {
    const user = userEvent.setup()

    render(<SummaryForm />)
    const popover = screen.queryByText(/Those are our Terms and Conditions.../i)
    const popoverTrigger = screen.getByText(/Terms and Conditions/i)

    // popover starts out hidden
    expect(popover).not.toBeInTheDocument()

    // popover appears upon mouseover of checkbox label

    // popover disappears when we mouse out
  })
})
