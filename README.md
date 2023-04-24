# Next.js + Jest + React Testing Library

This is a cheat sheet repo for Next.js + Jest + React Testing Library. Each page is a different topic

> Note: Check [this page](https://testing-library.com/docs/dom-testing-library/cheatsheet/) for a quick cheat sheet from the official react testing library docs

&nbsp;

---

&nbsp;

## How to use

- clone this repo and `cd` into it
- run `npm install` to install dependencies
- run `npm test` to run tests

&nbsp;

---

&nbsp;

## Create a new Next.js app with Jest and React Testing Library

- run `mkdir` followed by the name of your project and `cd` into it, then:

```bash
npx create-next-app --example with-jest .
```

- make sure to remove the `__tests__` folder if already there to clear the example tests
- clear the `pages/index.js` boilerplate code
- remove `.git` folder if you want to start fresh: `rm -rf .git`
- initialize a new git repo: `git init` (`npm test` will fail if you don't do this)
- run `npm test` to make sure everything is working

&nbsp;

---

&nbsp;

## Configure eslint with Jest and React Testing Library

> Note: For this to work you should already have eslint installed and configured in your project byt choosing it during the `create-next-app` setup

- install eslint plugins for jest and react-testing-library:

```bash
npm install --save-dev eslint-plugin-testing-library eslint-plugin-jest-dom
```

- add the following to your `.eslintrc` file:

```json
{
  "plugins": ["testing-library", "jest-dom"],
  "extends": ["plugin:testing-library/react"]
}
```

> Note: Check the `.eslintrc.json` file in this repo for a full example

- be sure to have this rule on your `settings.json` file in vscode:

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```

> Note: You can either put this on your global settings or on your project settings by adding a `.vscode` folder to your project and adding a `settings.json` file inside it

&nbsp;

---

&nbsp;

## Run Jest Tests

```bash
npm test
```

### Jest commands

- `jest --watch` - run tests in watch mode
- `jest --watchAll` - run all tests in watch mode
- `jest` - run all tests and exit
- `jest --coverage` - run tests with coverage report
- `jest --watch --coverage` - run tests in watch mode with coverage report

&nbsp;

---

&nbsp;

## How does Jest watch mode work?

- Jest will run all tests that have changed since the last commit. If you want to run all tests, you can press `a` to run all tests.
- When a file is saved or a test file is changed, Jest will re-run the tests

> Note: If there are **no changes since the last commit**, **no tests will run**.

&nbsp;

---

&nbsp;

## TDD (Test Driven Development)

- Write tests before writing code
- Write the minimum amount of code to make the tests pass
- Refactor code as needed

> Note: Its is called "red-green" testing because the test initially fails (red) and then passes (green) after the code is written

### Why TDD?

- You don't need to manually test your code every time you make a change
- You can refactor your code with confidence because you have tests to make sure nothing breaks
- Writing tests before the code forces you to think about the code you are writing
- Writing tests before the code feels part of the process, instead of a "chore" to do at the end

&nbsp;

---

&nbsp;

## Unit Testing vs Functional Testing

#### **Unit testing** - tests individual units of code

| Pros                      | Cons                                |
| ------------------------- | ----------------------------------- |
| Mock dependencies         | Further from how users interact     |
| Easy to pinpoint failures | More likely to break in refactoring |

#### **Functional testing** - tests how the app works from the user's perspective

| Pros                        | Cons                    |
| --------------------------- | ----------------------- |
| Close to how users interact | More difficult to debug |
| Robust tests                |                         |

> Note: react-testing-library is a functional testing library

&nbsp;

---

&nbsp;

## render method

#### import render

```js
import { render } from '@testing-library/react'
import Component from './Component'
```

### use render

```js
render(<Component />)
```

&nbsp;

---

&nbsp;

## Testing Library screen methods

#### import screen

```js
import { screen } from '@testing-library/react'
```

### use screen

```js
const button = screen.getByRole('button')
```

#### Commands

> e.g. `screen.queryByRole('button')` - returns a single element

- `get` - expect an element to be in the DOM
- `query` - expect an element not to be in DOM (useful for popovers etc...), returns null if not found
- `find` - expect an element to be in the DOM, but wait for it to appear (useful for async data)

#### All

> e.g. `getAllByRole('button')` - returns an array of all buttons in the DOM

Add `All` to the command to return an array of elements

#### Query Type

> e.g. `getByRole('button')`

- `ByRole` - query by role
- `ByLabelText` - query by label text
- `ByPlaceholderText` - query by placeholder text
- `ByText` - query by text
- `ByDisplayValue` - query by display value
- `ByAltText` - query by alt text
- `ByTitle` - query by title
- `ByTestId` - query by test id

## Testing Library Order of Priority

Testing Library suggest to follow accessibility guidelines when writing tests. This means that you should use the following order of priority when querying the DOM:

- `getByRole('button', { name: /click me/i })`
- `getByLabelText('First Name')`
- `getByPlaceholderText('Enter your first name')`
- `getByText('Click me')`
- `getByDisplayValue('John')`
- `getByAltText('Profile picture')`
- `getByTitle('Close')`
- `getByTestId('my-element')`

> Note: You should only use `getByTestId` as a last resort. Assign `data-testid='my-element'` to the element that you need to find

### Accessibility Roles

- alert, alertdialog, application, article, banner, button, checkbox, columnheader, combobox, complementary, contentinfo, definition, dialog, directory, document, form, grid, gridcell, group, heading, img, link, list, listbox, listitem, log, main, marquee, math, menu, menubar, menuitem, menuitemcheckbox, menuitemradio, navigation, none, note, option, presentation, progressbar, radio, radiogroup, region, row, rowgroup, rowheader, scrollbar, search, searchbox, separator, slider, spinbutton, status, tab, tablist, tabpanel, textbox, timer, toolbar, tooltip, tree, treegrid, treeitem

&nbsp;

---

&nbsp;

## js-dom Custom Matchers

> See: [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)

- toBeDisabled
- toBeEnabled
- toBeEmptyDOMElement
- toBeInTheDocument
- toBeInvalid
- toBeRequired
- toBeValid
- toBeVisible
- toContainElement
- toContainHTML
- toHaveAccessibleDescription
- toHaveAccessibleName
- toHaveAttribute
- toHaveClass
- toHaveFocus
- toHaveFormValues
- toHaveStyle
- toHaveTextContent
- toHaveValue
- toHaveDisplayValue
- toBeChecked
- toBePartiallyChecked
- toHaveErrorMessage

&nbsp;

---

&nbsp;

## userEvent

`userEvent` is a library that provides a set of utilities to simulate user interactions with the DOM. It is a wrapper around `fireEvent` that provides a more natural API for interacting with the DOM.

> Note: `userEvent` always returns a Promise, so you must use `await` with it

### userEvent Usage

```js
// ... other imports
import userEvent from '@testing-library/user-event'

describe('Component', () => {
  it('should do something', async () => {
    // NOTE: Setup userEvent
    const user = userEvent.setup()

    render(<Component />)
    const button = screen.getByRole('button')

    await user.click(checkbox)
  })
})
```

> Read This for more info: [https://testing-library.com/docs/ecosystem-user-event/](https://testing-library.com/docs/ecosystem-user-event/)

### userEvent methods

- `userEvent.click(element)` - click an element
- `userEvent.hover(element)` - hover over an element
- `userEvent.unhover(element)` - unhover over an element
- `userEvent.type(element, text)` - type text into an element
- `userEvent.clear(element)` - clear text from an input or textarea
- `userEvent.selectOptions(element, values)` - select options in a select element
- `userEvent.upload(element, fileOrFiles)` - upload a file or files to an element
- `userEvent.tab()` - tab to the next focusable element
- `userEvent.keyboard(text)` - type text using the keyboard

&nbsp;

---

&nbsp;

## Mock Service Worker

Mock Service Worker (MSW) is a service worker based library that allows you to intercept network requests and mock responses.

### Install

> See: [https://mswjs.io/docs/getting-started/install](https://mswjs.io/docs/getting-started/install)

```bash
npm install msw --save-dev
```

### Setup

> See: [https://mswjs.io/docs/getting-started/integrate/node](https://mswjs.io/docs/getting-started/integrate/node)

- Add the following to `jest.setup.js`

```js
import { server } from './mocks/server'
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

// TIP: This file is similar to setupTests.js from create-react-ap
```

> Note: Make sure to have imported `jest.setup.js` in `jest.config.js` like so `setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],`

### Usage

> See: [https://mswjs.io/docs/getting-started/mocks/rest-api](https://mswjs.io/docs/getting-started/mocks/rest-api)

- Create a `mocks` folder in the root of your project
- Create a `server.js` file in the `mocks` folder
- Add the following to `server.js`

```js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)
```

- Create a `handlers.js` file in the `mocks` folder
- Add the following to `handlers.js`

```js
import { rest } from 'msw'
import { apiURL } from '@/config'

export const handlers = [
  rest.get(`${apiURL}/scoops`, (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '/images/vanilla.png' },
      ])
    )
  }),
  // ... other handlers
]
```

- Now you can get fetched data from your mock server in your test files by using `await` and `findBy*` queries

```js
import { render, screen } from '@testing-library/react'
import Options from './Options'

test('my test', async () => {
  render(<Options optionType='scoops' />)

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
  expect(scoopImages).toHaveLength(2)

  const altTextArray = scoopImages.map((element: any) => element.alt)
  expect(altTextArray).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})
```

**HOW DOES IT WORK?** When we run the test, if the component makes a request to the server, the request will be intercepted by Mock Service Worker (that we setup in jest.setup.js) and it will check if there is a handler for that same request (same url). IF there is, the mock request will be used instead of the real request

&nbsp;

---

&nbsp;

## Resources

- [Next.js Testing](https://nextjs.org/docs/testing)
- [Testing Library Cheat Sheet](https://testing-library.com/docs/react-testing-library/cheatsheet/)
- [userEvent](https://testing-library.com/docs/ecosystem-user-event/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about/)
- [Testing Library Order of Priority](https://testing-library.com/docs/queries/about/#priority)
- [w3c Accessibility Roles](https://www.w3.org/TR/wai-aria/#role_definitions)
- [getByTestId](https://testing-library.com/docs/queries/bytestid/)
- [Mock Service Worker](https://mswjs.io/docs/getting-started/install)

&nbsp;

---

&nbsp;

## License

- [MIT](LICENSE.md)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#how-to-use)

```

```

```

```

```

```
