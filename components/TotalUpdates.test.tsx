import { render, screen } from '@/test-utils'
import userEvent from '@testing-library/user-event'
import Options from './Options'

// TODO: If at the end of the course this test only tests the Option component, then it should be moved to the Option.test.tsx file

test('update scoops subtotal when scoops change', async () => {
  const user = userEvent.setup()
  render(<Options optionType='scoops' />)

  // make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false })
  // exact: false means that the text can contain other text
  expect(scoopsSubtotal).toHaveTextContent('0.00')

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  })
  await user.clear(vanillaInput)
  await user.type(vanillaInput, '1')
  expect(scoopsSubtotal).toHaveTextContent('2.00')

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  })
  await user.clear(chocolateInput)
  await user.type(chocolateInput, '2')
  expect(scoopsSubtotal).toHaveTextContent('6.00')
})

test('update toppings subtotal when toppings change', async () => {
  const user = userEvent.setup()
  render(<Options optionType='toppings' />)

  // make sure toppings total starts out $0.00
  const toppingsSubtotal = screen.getByText('Toppings total: $', {
    exact: false,
  })
  expect(toppingsSubtotal).toHaveTextContent('0.00')

  // tick Cherries topping checkbox and check the subtotal
  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: 'Cherries',
  })
  await user.click(cherriesCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('1.50')

  // tick Hot Fudge topping checkbox and check the subtotal
  const hotFudgeCheckbox = await screen.findByRole('checkbox', {
    name: 'Hot fudge',
  })
  await user.click(hotFudgeCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('3.00')

  // tick OFF Cherries topping checkbox and check the subtotal
  await user.click(cherriesCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('1.50')
})
