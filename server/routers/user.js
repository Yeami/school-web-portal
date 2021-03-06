const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/login', async (req, res) => {
  // Login a registered user
  try {
    const { email, password } = req.body.user;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).send({ error: 'Login failed! Check authentication credentials' });
    }
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/me', auth, async (req, res) => {
  // View logged in user profile
  const { email } = req.user;
  const user = await User.findByEmail(email);
  res.send(user);
});

router.post('/me/logout', auth, async (req, res) => {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/me/logoutall', auth, async (req, res) => {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/me/update', auth, async (req, res) => {
  // Update the user info
  try {
    const filter = { _id: req.user._id };
    const update = { ...req.body.user };

    await User.findOneAndUpdate(filter, update, {
      new: true,
    })
      .populate('position')
      .then((user) => res.send(user));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/me/avatar', auth, async (req, res) => {
  // Update the user`s avatar URL
  try {
    const filter = { _id: req.user._id };
    const update = { avatarUrl: req.body.avatarUrl };

    await User.findOneAndUpdate(filter, update, {
      new: true,
    })
      .populate('position')
      .then((user) => res.send(user));
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
