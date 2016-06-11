exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE users_id_seq restart with 5;').then(function () {
    return knex('users').del().then(function () {
      return Promise.all([
        knex('users').insert({
          id: 1,
          first_name: 'Derik',
          last_name: 'Linch',
          birthday: '04-26-1991',
          password: '$2a$08$5v6LS.nqvjC1gjY3cqeph.KwlR0cjkCbhyr7I8oR7CLqyJ0fpyALC',
          email: 'dlinch33@gmail.com',
          image_url: '../assets/derik.jpg',
        }),
        knex('users').insert({
          id: 2,
          first_name: 'Elana',
          last_name: 'Kopelevich',
          birthday: '04-26-1980',
          password: '$2a$08$5v6LS.nqvjC1gjY3cqeph.KwlR0cjkCbhyr7I8oR7CLqyJ0fpyALC',
          email: 'ekopelevich@gmail.com',
          image_url: '../assets/elana.jpg',
        }),
        knex('users').insert({
          id: 3,
          first_name: 'CJ',
          last_name: 'R',
          birthday: '05-21-1990',
          password: '$2a$08$5v6LS.nqvjC1gjY3cqeph.KwlR0cjkCbhyr7I8oR7CLqyJ0fpyALC',
          email: 'hello@cjr.co.de',
          image_url: '../assets/cj.jpg',
        }),
        knex('users').insert({
          id: 4,
          first_name: 'Roberto',
          last_name: 'Ortega',
          birthday: '07-04-1962',
          password: '$2a$08$5v6LS.nqvjC1gjY3cqeph.KwlR0cjkCbhyr7I8oR7CLqyJ0fpyALC',
          email: 'roberto@ortega.com',
          image_url: '../assets/berto.jpg',
        }),
      ]);
    })
  });

};
