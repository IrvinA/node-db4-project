const db = require("../data/db-config.js");

async function getRecipeById(recipe_id) {
  // First attempt:
  // SELECT * FROM recipes WHERE recipe_id = recipe_id
  //
  // Second attempt:
  // select r.recipe_id, recipe_name, created_at, step_id, step_number, step_instructions
  // from recipes as r
  // join steps as st
  //     on  r.recipe_id = st.recipe_id
  // where r.recipe_id = 1 (recipe_id)
  //
  // Final version receiving all information:
  // select
  //     r.recipe_id,
  //     recipe_name,
  //     created_at,
  //     st.step_id,
  //     step_number,
  //     step_instructions,
  //     st_i.ingredient_id,
  //     ingredient_name,
  //     quantity
  // from recipes as r
  // join steps as st
  //     on  r.recipe_id = st.recipe_id
  // left join step_ingredients as st_i
  //     on st.step_id = st_i.step_id
  // left join ingredients as i
  //     on st_i.ingredient_id = i.ingredient_id
  // where r.recipe_id = 1 (recipe_id)

  const rows = await db("recipes as r")
    .join("steps as st", { "r.recipe_id": "st.recipe_id" })
    .leftJoin("step_ingredients as st_i", { "st.step_id": "st_i.step.id" })
    .leftJoin("ingredients as i", { "st_i.ingredient_id": "i.ingredient_id" })
    .select(
      "r.recipe_id",
      "recipe_name",
      "created_at",
      "st.step_id",
      "step_number",
      "step_instructions",
      "st_i.ingredient_id",
      "ingredient_name",
      "quantity"
    )
    .where("r.recipe_id", recipe_id);

  let result = { steps: [] };
  let ing = [];

  for (let recipe of rows) {
    if (!result.ingredient_id) {
      result.recipe_id = recipe.recipe_id;
      result.recipe_name = recipe.recipe_name;
      result.created_at = recipe.created_at;
      result.steps.push({
        step_id: recipe.step_id,
        step_number: recipe.step_number,
        step_instructions: recipe.step_instructions,
        ingredients: ing,
      });
    }
    ing.push({
      ingredient_id: recipe.ingredient_id,
      ingredient_name: recipe.ingredient_name,
      quantity: recipe.quantity,
    });
  }
}

module.exports = {
  getRecipeById,
};
