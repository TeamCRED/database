
exports.up = function(knex, Promise) {
  return knex.schema.table('batches', function (table) {
    table.dropColumn('datetime');
    table.time('time');
    table.date('date');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('batches', function (table) {
    table.dropColumn('time');
    table.dropColumn('date');
    table.datetime('datetime');
  })
};
