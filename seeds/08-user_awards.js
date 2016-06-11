exports.seed = function(knex, Promise) {
  return knex('user_awards').del().then(function () {
    return Promise.all([
        knex('user_awards').insert({
          user_id: 1,
          award_id: 1,
        }),
        knex('user_awards').insert({
          user_id: 2,
          award_id: 2,
        }),
        knex('user_awards').insert({
          user_id: 1,
          award_id: 3,
        }),
        knex('user_awards').insert({
          user_id: 2,
          award_id: 4,
        }),
        knex('user_awards').insert({
          user_id: 1,
          award_id: 5,
        }),
        knex('user_awards').insert({
          user_id: 2,
          award_id: 6,
        }),
        knex('user_awards').insert({
          user_id: 1,
          award_id: 7,
        }),
      ]);
  });
};
