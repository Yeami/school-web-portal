const express = require('express');
const Subject = require('../models/subject');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    res.status(200).send(await Subject.find());
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/new', auth, async (req, res) => {
  try {
    const { name, description } = req.body.subject;

    res.status(201).send(new Subject({
      name,
      description,
    }).save());
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/remove', auth, async (req, res) => {
  try {
    const { id } = req.body;

    await Subject.findByIdAndRemove(id);

    res.status(201).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
