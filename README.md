# playwright-auth-example (Dependencies)
https://playwright.dev/docs/test-projects#dependencies

Dependencies are a list of projects that need to run before the tests in another project run. They can be useful for configuring the global setup actions so that one project depends on this running first.

Playwright provides a way to reuse the signed-in state in the tests. That way you can log in only once and then skip the log in step for all of the tests.

Web apps use cookie-based or token-based authentication, where authenticated state is stored as cookies or in local storage. Playwright provides browserContext.storageState([options]) method that can be used to retrieve storage state from authenticated contexts and then create new contexts with pre-populated state.