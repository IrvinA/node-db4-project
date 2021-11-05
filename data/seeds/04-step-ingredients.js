exports.seed = function (knex, Promise) {
  return knex("step_ingredients").insert([
    { step_id: 2, ingredient_id: 8, quantity: "2 tbsp" },
    { step_id: 3, ingredient_id: 1, quantity: "2 eggs" },
    { step_id: 4, ingredient_id: 2, quantity: "1 tsp" },
    { step_id: 4, ingredient_id: 3, quantity: "1 tsp" },
    { step_id: 4, ingredient_id: 4, quantity: "10 grams" },
    { step_id: 6, ingredient_id: 5, quantity: "4 cups" },
    { step_id: 7, ingredient_id: 2, quantity: "3 tbsp" },
    { step_id: 9, ingredient_id: 6, quantity: "100 grams" },
    { step_id: 11, ingredient_id: 7, quantity: "10 grams" },
    { step_id: 11, ingredient_id: 4, quantity: "1 cup" }
  ]);
};
