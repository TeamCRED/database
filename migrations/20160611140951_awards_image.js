
exports.up = function(knex, Promise) {
  return knex.schema.table('awards', function (table) {
    table.text('image_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('awards', function (table) {
    table.dropColumn('image_url');
  })
};
