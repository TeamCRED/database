
exports.seed = function(knex, Promise) {
  return knex('batches').del().then(function () {
    return Promise.all([
        knex('batches').insert({
          'date': '05-21-16',
          'time': '12:22:00',
          'quote': 'CARPE THA DIEM SEIZE THE CARP',
          'tank': 'B4',
          'beer_id': 'white-rascal'
        }),
        knex('batches').insert({
          'date': '02-29-16',
          'time': '10:13:00',
          'quote': 'SHE TURNED ME INTO A NEWT!',
          'tank': 'B4',
          'beer_id': 'joe-s-pils'
        }),
        knex('batches').insert({
          'date': '05-31-16',
          'time': '15:29:00',
          'quote': '',
          'tank': 'FV32',
          'beer_id': 'ipa'
        }),
      ]);
  });
};
