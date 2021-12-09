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

module.exports = router;
