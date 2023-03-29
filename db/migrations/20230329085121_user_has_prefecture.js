/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user_has_prefecture', function(table) {
    table.integer('user_id')
    .references('id')
    .inTable('user');
    table.integer('prefecture_id')
    .notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable('user_has_prefecture');
};
