import { render, screen, waitFor } from '@testing-library/react'
import OrderEntry from './OrderEntry'
import { rest } from 'msw'
import { server } from '@/mocks/server'
import { apiURL } from '@/config'

describe('OrderEntry', () => {
  test('handles error for scoops and toppings routes', async () => {
    // TIP: We are using the server.resetHandlers() method here to set up a new behavior for these routes. In this case we want to return a 500 error for both routes. This is a good way to test error handling in your app.
    server.resetHandlers(
      rest.get(`${apiURL}/scoops`, (req, res, ctx) => {
        return res(ctx.status(500))
      }),

      rest.get(`${apiURL}/toppings`, (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    render(<OrderEntry />)

    // TIP: waitFor() allows us to wait for something to happen before continuing with the test. In this case we are waiting for both the alerts to show up
    await waitFor(async () => {
      const alerts = await screen.findAllByRole('alert')
      expect(alerts).toHaveLength(2)
    })
  })
})

// TIP: use test.only() to run only one test
// TIP: use test.skip() to skip a test
