const express = require("express");
const router = express.Router();
const submaterial = require('../services/submaterial');

router.get('/', async function(req, res, next) {
  try {
    res.json(await submaterial.get());
  } catch (err) {
    console.error(`Error while getting submaterial `, err.message);
    next(err);
  }
});

router.post('/create', async function(req, res, next) {
  try {
    res.json(await submaterial.create(req.body.title,req.body.content,req.body.materialId));
  } catch (err) {
    console.error(`Error while creating submaterial `, err.message);
    next(err);
  }
});

router.post('/update/:id', async function(req, res, next) {
  try {
    res.json(await submaterial.update(req.params.id, req.body.title,req.body.content,req.body.materialId));
  } catch (err) {
    console.error(`Error while updating submaterial `, err.message);
    next(err);
  }
});

router.post('/delete', async function(req, res, next) {
  try {
    res.json(await submaterial.remove(req.body.id));
  } catch (err) {
    console.error(`Error while updating submaterial `, err.message);
    next(err);
  }
});

module.exports = router;
