exports.seed = function(knex, Promise) {

        return knex.raw('ALTER SEQUENCE employees_id_seq restart;').then(function() {
                return knex('title').del().then(function() {
                    return Promise.all([
                        knex('title').insert({
                            id: 1,
                            name: 'Adam & Larry'
                        }),
                        knex('title').insert({
                            id: 2,
                            name: 'Chief Barrel Herder'
                        }),
                        knex('title').insert({
                            id: 3,
                            name: 'Brewhouse Manager'
                        }),
                        knex('title').insert({
                            id: 4,
                            name: 'Barrel Romancer'
                        }),
                        knex('title').insert({
                            id: 5,
                            name: 'Senior Brewer'
                        }),
                        knex('title').insert({
                            id: 6,
                            name: 'Brewer'
                        }),
                        knex('title').insert({
                            id: 7,
                            name: 'Special Projects Brewer'
                        }),
                        knex('title').insert({
                            id: 8,
                            name: 'Barrel Professor'
                        }),
                        knex('title').insert({
                            id: 9,
                            name: 'Cellar Manager'
                        }),
                        knex('title').insert({
                            id: 10,
                            name: 'Cellar Assistant Manager'
                        }),
                        knex('title').insert({
                            id: 11,
                            name: 'Cellar'
                        }),
                        knex('title').insert({
                            id: 12,
                            name: 'Packaging Manager'
                        }),
                        knex('title').insert({
                            id: 13,
                            name: 'Scheduling'
                        }),
                        knex('title').insert({
                            id: 14,
                            name: 'Packaging Lead'
                        }),
                        knex('title').insert({
                            id: 15,
                            name: 'Packaging'
                        }),
                        knex('title').insert({
                            id: 16,
                            name: 'Yeast Manager'
                        }),
                        knex('title').insert({
                            id: 17,
                            name: 'Lab Technician'
                        }),
                        knex('title').insert({
                            id: 18,
                            name: 'QA Packaging Technician'
                        }),
                        knex('title').insert({
                            id: 19,
                            name: 'Warehouse Manager'
                        }),
                        knex('title').insert({
                            id: 20,
                            name: 'Warehouse Assistant'
                        }),
                        knex('title').insert({
                            id: 21,
                            name: 'Warehouse Ninja'
                        }),
                        knex('title').insert({
                            id: 22,
                            name: 'Head Brewer'
                        }),
                    ]);
                })
            })
        };
