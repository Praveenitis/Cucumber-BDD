# CucumberBDD

## Overview

This repository contains a BDD-style automation framework built with Cucumber and Playwright. It focuses on validating the login flow for the Sauce Demo application using feature files, step definitions, and page objects.

## Key Features

- Cucumber BDD test implementation using `.feature` files
- Playwright-based page object model for browser automation
- Structured project layout for feature, step definition, support, and page files
- HTML reporting support via Cucumber configuration

## Prerequisites

- Node.js `>=18`
- npm
- Git (optional, for cloning the repository)

## Installation

1. Clone the repository or open it locally.
2. Install dependencies:

```bash
npm install
```

## Running the Tests

Execute the main Cucumber test suite with the configured runner:

```bash
npm test
```

This command runs:

```bash
cucumber-js --config cucumber.config.js
```

## Project Structure

- `Features/` - Gherkin feature files defining BDD scenarios
- `stepDefinition/` - Cucumber step implementations
- `Support/` - Hooks and world configuration for test setup
- `pages/` - Page Object Model classes for UI interaction
- `tests/` - Playwright test files and sample seeds
- `specs/` - Documentation or test plan notes
- `cucumber.config.js` - Cucumber test configuration
- `playwright.config.js` - Playwright test configuration
- `package.json` - project dependencies and scripts

## Configuration

### `cucumber.config.js`

- `paths`: pattern for `.feature` files
- `require`: step definitions and support files
- `format`: output format and HTML report path

### `playwright.config.js`

- Browser projects: Chromium, Firefox, WebKit
- Test directory: `./tests`
- HTML reporter enabled
- Trace collection on retry

## How the Login Scenario Works

The current BDD scenario in `Features/login.feature` covers:

1. Opening the Sauce Demo login page
2. Entering a valid username
3. Entering a valid password
4. Clicking the login button
5. Verifying the products page is displayed

The test logic is implemented in:

- `stepDefinition/loginSteps.js`
- `pages/loginPage.js`
- `Support/hooks.js`

## Notes

- Update the feature files in `Features/` to add more scenarios.
- Use `pages/` to add reusable page object classes.
- Use `Support/hooks.js` to add global setup/teardown actions.

## Optional Playwright Execution

If you want to run any Playwright-based tests in `tests/`, use:

```bash
npx playwright test
```

## License

This project is provided as-is.
