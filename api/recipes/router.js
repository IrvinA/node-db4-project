const express = require('express');
const Recipes = require('./model');

const router = express.Router();

router.get('/:recipe_id', (req, res, next) => {
  Recipes.getRecipeById(req.params.recipe_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.use((err, req, res, next) => {//eslint-disable-line
  res.status(500).json({
    customMessage: 'something went wrong within the recipes router',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
