
exports.up = function(knex, Promise) {
  return knex.schema.createTable('title', function (table) {
    table.increments();
    table.text('name');
    table.text('bio');
    table.text('factoid');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('title');
};
