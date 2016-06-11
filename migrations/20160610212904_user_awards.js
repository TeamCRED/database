
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_awards', function (table) {
    table.increments();
    table.integer('award_id').unsigned().references('id').inTable('awards').onDelete('cascade');
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_awards');
};
