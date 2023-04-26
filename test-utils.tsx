import { render } from '@testing-library/react'
import { OrderDetailsProvider } from '@/contexts/OrderDetails'

// * NOTE: We have created a custom render to render the component with the OrderDetailsProvider wrapper (context)
// @see https://testing-library.com/docs/react-testing-library/setup
// Now if you import the { render, screen, waitFor etc...} methods from this file instead of @testing-library/react you will get the OrderDetailsProvider wrapper (context)
const renderWithContext = (ui: any, options?: any) =>
  render(ui, {
    wrapper: OrderDetailsProvider,
    ...options,
  })

// re-export everything
export * from '@testing-library/react'

// override render method with render with context
export { renderWithContext as render }
