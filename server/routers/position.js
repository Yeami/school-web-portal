const express = require('express');
const Position = require('../models/position');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/all', auth, async (req, res) => {
  try {
    res.status(200).send(
      await Position.find(),
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
