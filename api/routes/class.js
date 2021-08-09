const express = require("express");
const router = express.Router();
const Class = require('../services/class');

router.get('/', async function(req, res, next) {
  try {
    res.json(await Class.get());
  } catch (err) {
    console.error(`Error while getting Class `, err.message);
    next(err);
  }
});

router.post('/create', async function(req, res, next) {
  try {
    res.json(await Class.create(req.body.name,req.body.description,req.body.category));
  } catch (err) {
    console.error(`Error while creating Class `, err.message);
    next(err);
  }
});

router.post('/update/:id', async function(req, res, next) {
  try {
    res.json(await Class.update(req.params.id, req.body.name,req.body.description,req.body.category));
  } catch (err) {
    console.error(`Error while updating Class `, err.message);
    next(err);
  }
});

router.post('/delete', async function(req, res, next) {
  try {
    res.json(await Class.remove(req.body.id));
  } catch (err) {
    console.error(`Error while updating Class `, err.message);
    next(err);
  }
});

module.exports = router;
