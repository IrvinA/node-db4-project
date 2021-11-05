exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    { step_number: 1, step_instructions: "Heat pan", recipe_id: 1 },
    { step_number: 2, step_instructions: "Add Butter", recipe_id: 1 },
    { step_number: 3, step_instructions: "Crack Eggs", recipe_id: 1 },
    {
      step_number: 4,
      step_instructions: "Add salt and pepper and parmesean",
      recipe_id: 1,
    },
    { step_number: 5, step_instructions: "Serve", recipe_id: 1 },
    {
      step_number: 1,
      step_instructions: "Add water to pot and heat",
      recipe_id: 2,
    },
    { step_number: 2, step_instructions: "Add salt to water", recipe_id: 2 },
    {
      step_number: 3,
      step_instructions: "Let boil for about 15 mins",
      recipe_id: 2,
    },
    { step_number: 4, step_instructions: "Add spaghetti pasta", recipe_id: 2 },
    {
      step_number: 5,
      step_instructions: "Drain pasta once Al Dente",
      recipe_id: 2,
    },
    {
      step_number: 6,
      step_instructions: "Add basil and parmesean and serve",
      recipe_id: 2,
    },
  ]);
};
