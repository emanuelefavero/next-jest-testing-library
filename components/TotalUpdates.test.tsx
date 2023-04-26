import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Options from './Options'

test('update scoop subtotal when scoops change', async () => {
  const user = userEvent.setup()
  render(<Options optionType='scoops' />)

  // make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false }) // exact: false means that the text can contain other text

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  })

  await user.clear(vanillaInput)
  await user.type(vanillaInput, '1')
  expect(scoopsSubtotal).toHaveTextContent('2.00')

  // update chocolate scoops to 2 and check the subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  })

  await user.clear(chocolateInput)
  await user.type(chocolateInput, '2')
  expect(scoopsSubtotal).toHaveTextContent('6.00')
})
