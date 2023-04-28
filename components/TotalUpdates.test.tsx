import { render, screen } from '@/test-utils'
import userEvent from '@testing-library/user-event'
import Options from './Options'
import OrderEntry from './OrderEntry'
import { useRouter } from 'next/router'

// mock useRouter - jest.fn() returns a mock function (it doesn't do anything, but it is useful to avoid errors)
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('scoops and toppings subtotal', () => {
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

  // ------------------------------------------------

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
})

// ------------------------------------------------
// ------------------------------------------------

describe('grand total', () => {
  test('grand total starts at $0.00', () => {
    // * Prevent act()... error by destructuring unmount and then calling it at the end of the test
    // ? Make sure to abort the axios call in Options.tsx using the AbortController on component unmount
    const { unmount } = render(<OrderEntry />)

    const grandTotal = screen.getByText('Grand total: $', { exact: false })
    expect(grandTotal).toHaveTextContent('0.00')

    unmount()
  })

  // ------------------------------------------------

  test('grand total updates properly if scoop is added first', async () => {
    const user = userEvent.setup()
    render(<OrderEntry />)

    const grandTotal = screen.getByText('Grand total: $', { exact: false })
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    })
    const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    })

    // add scoop first
    await user.clear(vanillaInput)
    await user.type(vanillaInput, '2')
    expect(grandTotal).toHaveTextContent('4.00')

    // add topping
    await user.click(cherriesCheckbox)
    expect(grandTotal).toHaveTextContent('5.50')
  })

  // ------------------------------------------------

  test('grand total updates properly if topping is added first', async () => {
    const user = userEvent.setup()
    render(<OrderEntry />)

    const grandTotal = screen.getByText('Grand total: $', { exact: false })
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    })
    const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    })

    // add topping first
    await user.click(cherriesCheckbox)
    expect(grandTotal).toHaveTextContent('1.50')

    // add scoop
    await user.clear(vanillaInput)
    await user.type(vanillaInput, '2')
    expect(grandTotal).toHaveTextContent('5.50')
  })

  // ------------------------------------------------

  test('grand total updates properly if item is removed', async () => {
    const user = userEvent.setup()
    render(<OrderEntry />)

    const grandTotal = screen.getByText('Grand total: $', { exact: false })
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    })

    // add scoop
    await user.clear(vanillaInput)
    await user.type(vanillaInput, '2')

    // remove scoop
    await user.clear(vanillaInput)
    await user.type(vanillaInput, '1')
    expect(grandTotal).toHaveTextContent('2.00')
  })
})
