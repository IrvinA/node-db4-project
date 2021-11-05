exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        { ingredient_name: 'egg' },
        { ingredient_name: 'salt' },
        { ingredient_name: 'pepper' },
        { ingredient_name: 'parmesean' },
        { ingredient_name: 'water' },
        { ingredient_name: 'spaghetti' },
        { ingredient_name: 'basil' },
        { ingredient_name: 'butter' }
    ])
}