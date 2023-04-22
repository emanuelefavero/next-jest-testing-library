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
    render(<SummaryForm />)

    const user = userEvent.setup()

    // * popover starts out hidden
    // NOTE: We are using queryBy* here because we expect the element to not be there
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    )
    expect(nullPopover).not.toBeInTheDocument()

    // * popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i)
    await user.hover(termsAndConditions)
    const popover = screen.getByText(/no ice cream will actually be delivered/i)
    expect(popover).toBeInTheDocument()

    // * popover disappears when we mouse out
    await user.unhover(termsAndConditions)
    expect(popover).not.toBeInTheDocument()
  })
})
