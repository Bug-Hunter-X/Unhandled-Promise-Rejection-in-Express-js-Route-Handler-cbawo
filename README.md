# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  The `bug.js` file shows an example route handler that performs an asynchronous operation without proper error handling. This can lead to application crashes or unexpected behavior.

The `bugSolution.js` file provides a corrected version with comprehensive error handling, preventing unhandled rejections.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js`.
4. Refresh the page several times.  Notice that the server might sometimes crash without providing clear error messages, because of the unhandled promise rejections.

## Solution

Always handle potential errors within asynchronous operations using `.catch()` to prevent unhandled promise rejections. Refer to `bugSolution.js` for a corrected implementation.