const express = require("express");
const router = express.Router();
const tasks = require('../services/tasks');

router.get('/', async function(req, res, next) {
  try {
    res.json(await tasks.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting tasks `, err.message);
    next(err);
  }
});

router.post('/create', async function(req, res, next) {
  try {
    res.json(await tasks.create(req.body.name));
  } catch (err) {
    console.error(`Error while creating tasks `, err.message);
    next(err);
  }
});

router.post('/update/:id', async function(req, res, next) {
  try {
    res.json(await tasks.update(req.params.id, req.body.name));
  } catch (err) {
    console.error(`Error while updating tasks `, err.message);
    next(err);
  }
});

router.post('/delete', async function(req, res, next) {
  try {
    res.json(await tasks.remove(req.body.id));
  } catch (err) {
    console.error(`Error while updating tasks `, err.message);
    next(err);
  }
});

module.exports = router;
