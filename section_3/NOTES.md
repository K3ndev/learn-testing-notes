# Writing a test

- foo.test.js
- keep the test simple

# it

- same Fn with test
- it(testMsg, callback)

# expect

- expect(result).toBe(6);

# describe

- help to categorize your test

# running test

- "test": "vitest --run --reporter verbose"
- "test:watch": "vitest"

# AAA Pattern

- A = Arrange
  - define the testing environment & values
- A = Act
  - run the actual code
- A = Assert
  - Expected value

# when a function have a handling error

- use a Function expression
- and your test is using .toThrow()
- make sure that it have .toThrow(/comment/)
