
exports.up = function(knex, Promise) {
  return knex.schema.createTable('awards', function (table) {
    table.increments();
    table.text('name');
    table.text('description');
    table.integer('points');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('awards');
};
