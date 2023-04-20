import { render, screen } from '@testing-library/react'
import ToHaveClass from './to-have-class'

describe('ToHaveClass', () => {
  test('div should have class hidden', () => {
    render(<ToHaveClass />)
    const div = screen.getByText('ToHaveClass')
    expect(div).toHaveClass('hidden')

    // TIP: You can also use the classList property to check for classes
    // expect(div.classList.contains('hidden')).toBe(true)

    // TIP: You can also use the className property to check for classes
    // expect(div.className).toContain('hidden')
  })
})

// TIP: We are checking for the class name hidden instead of checking if the element is hidden because we are using css modules. If we were using regular css, we could check if the element is hidden with the following:
// expect(div).not.toBeVisible()
