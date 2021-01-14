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

router.patch('/update/:id', auth, async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const update = { ...req.body };

    await Subject.findOneAndUpdate(filter, update, {
      new: true,
    }).then((subject) => {
      res.send(subject);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/remove/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    await Subject.findByIdAndRemove(id);

    res.status(201).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
