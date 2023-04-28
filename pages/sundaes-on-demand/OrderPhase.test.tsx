import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SundaesOnDemand from './index'

// ? happy path is when everything works as expected (the user clicks each correct button in the correct order with no errors or going back)
test('order phases for happy path', async () => {
  // render app
  // add ice cream scoops and toppings
  // find and click order button
  // check summary information based on order
  // accept terms and conditions and click button to confirm order
  // confirm order number on confirmation page
  // click "new order" button on confirmation page
  // check that scoops and toppings subtotals have been reset
  // do we need to await anything to avoid test errors?
})
