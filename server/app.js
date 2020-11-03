const express = require('express');

const port = process.env.SERVER_PORT;

const app = express();

require('./db/db');
require('./middleware')(app);
require('./routers')(app);

app.listen(port, (error) => {
  if (error) {
    return console.log(`\n[INFO] Error during starting the server: ${error}`);
  }

  console.log(`\n[INFO] Server is running on port ${port}`);
});
