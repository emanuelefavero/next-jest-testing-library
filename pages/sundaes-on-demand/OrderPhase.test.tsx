import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SundaesOnDemand from './index'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

// ? happy path is when everything works as expected (the user clicks each correct button in the correct order with no errors or going back)
test('order phases for happy path', async () => {
  const user = userEvent.setup()
  // render app
  // Don't need to wrap in provider already wrapped

  // destructure `unmount` from the return value to use at the end of the test
  const { unmount } = render(<SundaesOnDemand />)

  // add ice cream scoops and toppings
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  })
  await user.clear(vanillaInput)
  await user.type(vanillaInput, '1')

  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  })
  await user.clear(chocolateInput)
  await user.type(chocolateInput, '2')

  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: 'Cherries',
  })
  await user.click(cherriesCheckbox)

  // check grand total
  const grandTotal = screen.getByRole('heading', { name: /grand total: \$/i })
  expect(grandTotal).toHaveTextContent('7.50')

  // accept terms and conditions and click button to confirm order
  const termsCheckbox = screen.getByRole('checkbox', {
    name: /I agree to Terms and Conditions/i,
  })
  await user.click(termsCheckbox)

  const confirmOrderButton = screen.getByRole('button', {
    name: /Confirm order/i,
  })
  expect(confirmOrderButton).toBeEnabled()

  unmount()
})

// ? sad path is when something goes wrong (the user clicks the wrong button, or the wrong order, or goes back, or there is an error)
