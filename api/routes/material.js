const express = require("express");
const router = express.Router();
const material = require('../services/material');

router.get('/', async function(req, res, next) {
  try {
    res.json(await material.get());
  } catch (err) {
    console.error(`Error while getting material `, err.message);
    next(err);
  }
});

router.post('/create', async function(req, res, next) {
  try {
    res.json(await material.create(req.body.title,req.body.description,req.body.classId));
  } catch (err) {
    console.error(`Error while creating material `, err.message);
    next(err);
  }
});

router.post('/update/:id', async function(req, res, next) {
  try {
    res.json(await material.update(req.params.id, req.body.title,req.body.description,req.body.classId));
  } catch (err) {
    console.error(`Error while updating material `, err.message);
    next(err);
  }
});

router.post('/delete', async function(req, res, next) {
  try {
    res.json(await material.remove(req.body.id));
  } catch (err) {
    console.error(`Error while updating material `, err.message);
    next(err);
  }
});

module.exports = router;
