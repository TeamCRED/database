exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE users_id_seq restart;').then(function () {
    return knex('users').del().then(function () {
      return Promise.all([
        knex('users').insert({
          id: 1,
          first_name: 'Derik',
          last_name: 'Linch',
          birthday: '04-26-1991',
          password: '$2a$08$5v6LS.nqvjC1gjY3cqeph.KwlR0cjkCbhyr7I8oR7CLqyJ0fpyALC',
          email: 'dlinch33@gmail.com',
        }),
        knex('users').insert({
          id: 2,
          first_name: 'Elana',
          last_name: 'Kopelevich',
          birthday: '04-26-1980',
          password: '$2a$08$5v6LS.nqvjC1gjY3cqeph.KwlR0cjkCbhyr7I8oR7CLqyJ0fpyALC',
          email: 'dlinch33@gmail.com',
        }),
      ]);
    })
  });

};
