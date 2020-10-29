const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());


app.get('/', (request, response) => {
  response.send({
    message: 'Node.js and Express REST API'}
  );
});


const server = app.listen(port, (error) => {
  if (error) {
    return console.log(`Error: ${error}`);
  }

  console.log(`[INFO] Server listening on port ${server.address().port}`);
});