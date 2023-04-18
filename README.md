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

In watch mode, Jest will run all tests that have changed since the last commit. If you want to run all tests, you can press `a` to run all tests.

&nbsp;

---

&nbsp;

## Resources

- [Next.js Testing](https://nextjs.org/docs/testing)
