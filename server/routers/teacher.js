const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    res.status(200).send(
      await User
        .find()
        .populate('position')
        .then((u) => u),
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const user = new User(req.body.teacher);
    await user.save();
    await user.generateAuthToken();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
