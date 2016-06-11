
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employee_batches', function (table) {
    table.increments();
    table.integer('batch_id').unsigned().references('id').inTable('batches').onDelete('cascade');
    table.integer('employee_id').unsigned().references('id').inTable('employees').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employee_batches');
};
