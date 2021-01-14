const express = require('express');
const Class = require('../models/class');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    res.status(200).send(
      await Class.find(),
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/new', auth, async (req, res) => {
  try {
    const { name } = req.body.class;
    const students = [];

    res.status(201).send(new Class({
      name,
      students,
    }).save());
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/student/new', auth, async (req, res) => {
  try {
    const { student, classId } = req.body.data;
    await Class.findById(classId)
      .then((c) => {
        c.students.push(student);
        c.save();
      });

    res.status(201).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
