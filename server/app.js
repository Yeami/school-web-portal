const express = require('express');

const userRouter = require('./routers/user');
const port = process.env.SERVER_PORT;
require('./db/db');

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(port, (error) => {
  if (error) {
    return console.log(`\n[INFO] Error during starting the server: ${error}`);
  }

  console.log(`\n[INFO] Server is running on port ${port}`);
});