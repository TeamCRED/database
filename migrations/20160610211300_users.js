
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.text('email');
    table.text('first_name');
    table.text('last_name');
    table.date('birthday');
    table.text('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
