# Next.js + Jest + React Testing Library

This is a cheat sheet repo for Next.js + Jest + React Testing Library. Each page is a different topic.

> Note: This is a work in progress, please wait for the live version to be published

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

## Testing Library Order of Priority

Testing Library suggest to follow accessibility guidelines when writing tests. This means that you should use the following order of priority when querying the DOM:

- getByRole
- getByLabelText
- getByPlaceholderText
- getByText - _for non interactive elements_
- getByDisplayValue
- getByAltText
- getByTitle
- getByTestId

> Note: You should only use getByTestId as a last resort. Assign data-testid='my-element' to the element that you need to find

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

## Resources

- [Next.js Testing](https://nextjs.org/docs/testing)
- [Testing Library Order of Priority](https://testing-library.com/docs/queries/about/#priority)
- [w3c Accessibility Roles](https://www.w3.org/TR/wai-aria/#role_definitions)
- [getByTestId](https://testing-library.com/docs/queries/bytestid/)

&nbsp;

---

&nbsp;

## License

- [MIT](LICENSE.md)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#how-to-use)
