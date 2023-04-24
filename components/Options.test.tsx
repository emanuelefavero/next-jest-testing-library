import { render, screen } from '@testing-library/react'
import Options from './Options'

test('displays image for each scoop option from server', async () => {
  render(<Options optionType='scoops' />)

  // find images
  // NOTE: Every time we try to get data that is rendered from a fetch request (such as scoopImages), we need to use await and findBy*
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
  // TIP: $ means ends with (we're looking for images alt attributes that ends with 'scoop')
  expect(scoopImages).toHaveLength(2)

  // get alt text from images and put into an array
  const altTextArray = scoopImages.map((element: any) => element.alt)
  expect(altTextArray).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})

// TIP: numbers and strings can use the .toBe matcher
// TIP: arrays and objects can use the .toEqual matcher

// TIP: HOW DOES IT WORK? When we run the test, if the component makes a request to the server, the request will be intercepted by Mock Service Worker (that we setup in jest.setup.js) and it will check if there is a handler for that same request (same url). IF there is, the mock request will be used instead of the real request
