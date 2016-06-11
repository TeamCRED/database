
exports.up = function(knex, Promise) {
  return knex.schema.createTable('batches', function (table) {
    table.increments();
    table.datetime('datetime');
    table.text('quote');
    table.text('tank');
    table.text('beer_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('batches');
};
