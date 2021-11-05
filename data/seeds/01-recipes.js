exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "Fried Eggs" },
    { recipe_name: "Parmesean Spaghetti" },
  ]);
};
