exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('batches').del(),
    knex('batches').insert({
      'datetime': '05-21-16 12:22:00',
      'quote': 'CARPE THA DIEM SEIZE THE CARP',
      'tank': 'B4',
      'beer_id': 'white-rascal'
    }),
    knex('batches').insert({
      'datetime': '02-29-16 10:13:00',
      'quote': 'SHE TURNED ME INTO A NEWT!',
      'tank': 'B4',
      'beer_id': 'joe-s-pils'
    }),
    knex('batches').insert({
      'datetime': '05-31-16 15:29:00',
      'quote': '',
      'tank': 'FV32',
      'beer_id': 'ipa'
    }),
  );
};
