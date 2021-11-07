const db = require('../../data/db-config.js');

async function getRecipeById(recipe_id) {
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

  const rows = await db('recipes as r')
    .join('steps as st', { 'r.recipe_id': 'st.recipe_id' })
    .leftJoin('step_ingredients as st_i', { 'st.step_id': 'st_i.step.id' })
    .leftJoin('ingredients as i', { 'st_i.ingredient_id': 'i.ingredient_id' })
    .select(
      'r.recipe_id',
      'recipe_name',
      'created_at',
      'st.step_id',
      'step_number',
      'step_instructions',
      'st_i.ingredient_id',
      'ingredient_name',
      'quantity',
      'ingredient_unit'
    )
    .where('r.recipe_id', recipe_id);

  let result = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
    steps: [],
  };
  let ing = [];

  rows.forEach((row) => {
    if (!row.ingredient_id) {
      result.steps.push({
        step_id: row.step_id,
        step_number: row.step_number,
        step_instructions: row.step_instructions,
        ingredients: ing,
      });
    } else {
      result.steps.push({
        step_id: row.step_id,
        step_number: row.step_number,
        step_instructions: row.step_instructions,
        ingredients: ing.push({
          ingredient_id: row.ingredient_id,
          ingredient_name: row.ingredient_name,
          quantity: `${row.quantity} ${row.ingredient_unit}`,
        }),
      });
    }
  });

  return result;
}

module.exports = {
  getRecipeById,
};
