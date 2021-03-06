
exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE batches_id_seq restart with 5;').then(function () {

  return knex('batches').del().then(function () {
    return Promise.all([
        knex('batches').insert({
          'id': 1,
          'date': '05-21-16',
          'time': '12:22:00',
          'quote': 'CARPE THA DIEM SEIZE THE CARP',
          'tank': 'B4',
          'beer_id': 'white-rascal'
        }),
        knex('batches').insert({
          'id': 2,
          'date': '02-29-16',
          'time': '10:13:00',
          'quote': 'SHE TURNED ME INTO A NEWT!',
          'tank': 'B4',
          'beer_id': 'joe-s-pils'
        }),
        knex('batches').insert({
          'id': 3,
          'date': '05-31-16',
          'time': '15:29:00',
          'quote': '',
          'tank': 'FV32',
          'beer_id': 'ipa'
        }),
        knex('batches').insert({
          'id': 4,
          'date': '05-21-16',
          'time': '11:25:00',
          'quote': 'YOU CAN\'T TAKE THE SKY FROM ME',
          'tank': 'F3',
          'beer_id': 'white-rascal'
        }),
        knex('batches').insert({
          'id': 5,
          'date': '02-29-16',
          'time': '10:14:00',
          'quote': 'SHE TURNED ME INTO A NEWT!',
          'tank': 'B4',
          'beer_id': 'joe-s-pils'
        }),
      ]);
  });
});
};
