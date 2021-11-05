const express = require("express");
const recipes = require("./model");

const router = express.Router();

router.get("/:id", (req, res) => {
  recipes
    .getRecipeById(req.params.id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
