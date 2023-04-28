import { render, screen } from '@testing-library/react'
import OrderConfirmation from './order-confirmation'

describe('OrderConfirmation', () => {
  test('displays the order number received from the server', async () => {
    const { unmount } = render(<OrderConfirmation />)

    const loading = screen.getByText(/loading/i)
    expect(loading).toBeInTheDocument()

    const orderNumber = await screen.findByText(/Your order number is:/i, {
      exact: false,
    })
    expect(orderNumber).toHaveTextContent('1234567890')

    // TIP: Prevent act... warning from showing up in test output
    unmount()
  })
})
