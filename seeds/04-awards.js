exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE awards_id_seq restart with 8;').then(function () {
    return knex('awards').del().then(function () {
      return Promise.all([
        knex('awards').insert({
          id: 1,
          'name': 'Drink an IPA',
          'points': 50,
          'image_url': '../assets/badge-01.png'
        }),
        knex('awards').insert({
          id: 2,
          'name': 'Drink a Pilsner',
          'points': 50,
          'image_url': '../assets/badge-02.png'
        }),
        knex('awards').insert({
          id: 3,
          'name': '1 of Every Beer',
          'points': 500,
          'image_url': '../assets/badge-03.png'
        }),
        knex('awards').insert({
          id: 4,
          'name': 'Visit a Brewery',
          'points': 400,
          'image_url': '../assets/badge-04.png'
        }),
        knex('awards').insert({
          id: 5,
          'name': 'Tour India',
          'points': 700,
          'image_url': '../assets/badge-05.png'
        }),
        knex('awards').insert({
          id: 6,
          'name': 'Drink a Beer',
          'points': 10,
          'image_url': '../assets/badge-06.png'
        }),
        knex('awards').insert({
          id: 7,
          'name': 'Drink a 6 Pack',
          'points': 60,
          'image_url': '../assets/badge-07.png'
        })
      ]);
    })
  });
};
