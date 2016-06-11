
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function (table) {
    table.increments();
    table.text('first_name');
    table.text('last_name');
    table.text('bio');
    table.text('factoid');
    table.integer('title_id').unsigned().references('id').inTable('title').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {

};
