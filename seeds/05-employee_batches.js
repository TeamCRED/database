exports.seed = function(knex, Promise) {
  return knex('employee_batches').del().then(function () {
    return Promise.all([
        knex('employee_batches').insert({
          employee_id: 22,
          batch_id: 1,
        }),
        knex('employee_batches').insert({
          employee_id: 13,
          batch_id: 1,
        }),
        knex('employee_batches').insert({
          employee_id: 12,
          batch_id: 1,
        }),
        knex('employee_batches').insert({
          employee_id: 16,
          batch_id: 2,
        }),
        knex('employee_batches').insert({
          employee_id: 15,
          batch_id: 2,
        }),
        knex('employee_batches').insert({
          employee_id: 35,
          batch_id: 2,
        }),
        knex('employee_batches').insert({
          employee_id: 3,
          batch_id: 3,
        }),
        knex('employee_batches').insert({
          employee_id: 27,
          batch_id: 3,
        }),
        knex('employee_batches').insert({
          employee_id: 16,
          batch_id: 3,
        }),
        knex('employee_batches').insert({
          employee_id: 10,
          batch_id: 4,
        }),
        knex('employee_batches').insert({
          employee_id: 34,
          batch_id: 4,
        }),
        knex('employee_batches').insert({
          employee_id: 7,
          batch_id: 4,
        }),
      ]);
  });
};
