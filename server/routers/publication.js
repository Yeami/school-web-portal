const express = require('express');
const Publication = require('../models/publication');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    res.status(200).send(
      await Publication
        .find()
        .populate('author')
        .then((p) => p),
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/new', auth, async (req, res) => {
  try {
    const author = req.user._id;
    const { title, content, imageUrl } = req.body.publication;

    new Publication({
      title,
      content,
      imageUrl,
      author,
    })
      .save()
      .then((p) => {
        res.status(201).send(p);
      });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
