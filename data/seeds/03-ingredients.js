exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        { ingredient_name: 'egg', ingredient_unit: 'ct' },
        { ingredient_name: 'salt', ingredient_unit: 'tsp' },
        { ingredient_name: 'pepper', ingredient_unit: 'tsp' },
        { ingredient_name: 'parmesean', ingredient_unit: 'oz' },
        { ingredient_name: 'water', ingredient_unit: 'cups' },
        { ingredient_name: 'spaghetti', ingredient_unit: 'grams' },
        { ingredient_name: 'basil', ingredient_unit: 'grams' },
        { ingredient_name: 'butter', ingredient_unit: 'tbsp' }
    ])
}