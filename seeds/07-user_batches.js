exports.seed = function(knex, Promise) {
  return knex('user_batches').del().then(function () {
    return Promise.all([
        knex('user_batches').insert({
          user_id: 1,
          batch_id: 1,
        }),
        knex('user_batches').insert({
          user_id: 2,
          batch_id: 3,
        }),
        knex('user_batches').insert({
          user_id: 2,
          batch_id: 2,
        }),
        knex('user_batches').insert({
          user_id: 1,
          batch_id: 4,
        }),
      ]);
  });
};
