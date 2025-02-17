const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('An error occurred:', err);
      res.status(500).send('Internal Server Error'); // Send a proper error response
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation(){
  // Simulate an asynchronous operation that may fail
  await new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.5; // 50% chance of failure
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Simulated asynchronous operation failed'));
      } else {
        resolve();
      }
    }, 1000);
  });
}