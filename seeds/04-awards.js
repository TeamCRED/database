exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE awards_id_seq restart;').then(function () {
    return knex('awards').del().then(function () {
      return Promise.all([
        knex('awards').insert({
          id: 1,
          'name': 'Drink an IPA',
          'points': 50
        }),
        knex('awards').insert({
          id: 2,
          'name': 'Drink a Pilsner',
          'points': 50
        }),
        knex('awards').insert({
          id: 3,
          'name': '1 of Every Beer',
          'points': 500
        }),
        knex('awards').insert({
          id: 4,
          'name': 'Visit a Brewery',
          'points': 400
        }),
        knex('awards').insert({
          id: 5,
          'name': 'Tour India',
          'points': 700
        }),
        knex('awards').insert({
          id: 6,
          'name': 'Drink a Beer',
          'points': 10
        }),
        knex('awards').insert({
          id: 7,
          'name': 'Drink a 6 Pack',
          'points': 60
        })
      ]);
    })
  });
};
