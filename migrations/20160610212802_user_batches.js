
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_batches', function (table) {
    table.increments();
    table.integer('batch_id').unsigned().references('id').inTable('batches').onDelete('cascade');
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_batches');
};
