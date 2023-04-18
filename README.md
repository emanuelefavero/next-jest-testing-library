# Next.js + Jest + React Testing Library

This is a Next.js project with Jest and React Testing Library set up

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

#### Why TDD?

- You don't need to manually test your code every time you make a change
- You can refactor your code with confidence because you have tests to make sure nothing breaks
- Writing tests before the code forces you to think about the code you are writing
- Writing tests before the code feels part of the process, instead of a "chore" to do at the end

&nbsp;

---

&nbsp;

## Resources

- [Next.js Testing](https://nextjs.org/docs/testing)
