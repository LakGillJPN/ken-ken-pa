/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('photos', function(table) {
    table.increments('id')
    .primary();
    table.integer('user_id')
    .references('id')
    .inTable('user');
    table.integer('prefecture_id')
    .references('prefecture_id')
    .inTable('user_has_prefecture')
    table.string('IMG_64') 
    table.varchar('description')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
