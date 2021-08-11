const express = require("express");
const router = express.Router();
const cource = require('../services/course');

router.get('/', async function(req, res, next) {
  try {
    res.json(await cource.get());
  } catch (err) {
    console.error(`Error while getting Course `, err.message);
    next(err);
  }
});

router.post('/create', async function(req, res, next) {
  try {
    res.json(await cource.create(req.body.name,req.body.description,req.body.category));
  } catch (err) {
    console.error(`Error while creating Course `, err.message);
    next(err);
  }
});

router.post('/update/:id', async function(req, res, next) {
  try {
    res.json(await cource.update(req.params.id, req.body.name,req.body.description,req.body.category));
  } catch (err) {
    console.error(`Error while updating Course `, err.message);
    next(err);
  }
});

router.post('/delete', async function(req, res, next) {
  try {
    res.json(await cource.remove(req.body.id));
  } catch (err) {
    console.error(`Error while updating Course `, err.message);
    next(err);
  }
});

module.exports = router;
