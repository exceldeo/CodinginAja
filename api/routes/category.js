const express = require("express");
const router = express.Router();
const categories = require('../services/category');

router.get('/', async function(req, res, next) {
  try {
    res.json(await categories.get());
  } catch (err) {
    console.error(`Error while getting categories `, err.message);
    next(err);
  }
});

router.post('/create', async function(req, res, next) {
  try {
    res.json(await categories.create(req.body.name,req.body.description));
  } catch (err) {
    console.error(`Error while creating categories `, err.message);
    next(err);
  }
});

router.post('/update/:id', async function(req, res, next) {
  try {
    res.json(await categories.update(req.params.id, req.body.name,req.body.description));
  } catch (err) {
    console.error(`Error while updating categories `, err.message);
    next(err);
  }
});

router.post('/delete', async function(req, res, next) {
  try {
    res.json(await categories.remove(req.body.id));
  } catch (err) {
    console.error(`Error while updating categories `, err.message);
    next(err);
  }
});

module.exports = router;
