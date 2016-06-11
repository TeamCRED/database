
exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE awards_id_seq restart;').then(function () {
    return knex('awards').del().then(function () {
      return Promise.all([
        knex('awards').insert({
          'name': 'Drink an IPA',
          'points': 50
        }),
        knex('awards').insert({
          'name': 'Drink a Pilsner',
          'points': 50
        }),
        knex('awards').insert({
          'name': '1 of Every Beer',
          'points': 500
        }),
        knex('awards').insert({
          'name': 'Visit a Brewery',
          'points': 400
        }),
        knex('awards').insert({
          'name': 'Tour India',
          'points': 700
        }),
        knex('awards').insert({
          'name': 'Drink a Beer',
          'points': 10
        }),
        knex('awards').insert({
          'name': 'Drink a 6 Pack',
          'points': 60
        })
      ]);
    })
  });

};
