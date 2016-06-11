exports.seed = function(knex, Promise) {

        return knex.raw('ALTER SEQUENCE employees_id_seq restart with 23;').then(function() {
                return knex('title').del().then(function() {
                    return Promise.all([
                        knex('title').insert({
                            id: 1,
                            name: 'Adam & Larry',
                            description: 'Founded by:'
                        }),
                        knex('title').insert({
                            id: 2,
                            name: 'Chief Barrel Herder',
                            description: 'Barrel herded by:'
                        }),
                        knex('title').insert({
                            id: 3,
                            name: 'Brewhouse Manager',
                            description: 'Brewhouse managed by:'
                        }),
                        knex('title').insert({
                            id: 4,
                            name: 'Barrel Romancer',
                            description: 'Barrel romanaced by:'
                        }),
                        knex('title').insert({
                            id: 5,
                            name: 'Senior Brewer',
                            description: 'Brewed by:'
                        }),
                        knex('title').insert({
                            id: 6,
                            name: 'Brewer',
                            description: 'Brewed by:'
                        }),
                        knex('title').insert({
                            id: 7,
                            name: 'Special Projects Brewer',
                            description: 'Brewed especially by:'
                        }),
                        knex('title').insert({
                            id: 8,
                            name: 'Barrel Professor',
                            description: 'Barrel graded by:'
                        }),
                        knex('title').insert({
                            id: 9,
                            name: 'Cellar Manager',
                            description: 'Cellar managed by:'
                        }),
                        knex('title').insert({
                            id: 10,
                            name: 'Cellar Assistant Manager',
                            description: 'Cellar managed by:'
                        }),
                        knex('title').insert({
                            id: 11,
                            name: 'Cellar',
                            description: 'In the cellar with:'
                        }),
                        knex('title').insert({
                            id: 12,
                            name: 'Packaging Manager',
                            description: 'Packaged by:'
                        }),
                        knex('title').insert({
                            id: 13,
                            name: 'Scheduling',
                            description: 'Scheduled by:'
                        }),
                        knex('title').insert({
                            id: 14,
                            name: 'Packaging Lead',
                            description: 'Packaged by:'
                        }),
                        knex('title').insert({
                            id: 15,
                            name: 'Packaging',
                            description: 'Packaged by:'
                        }),
                        knex('title').insert({
                            id: 16,
                            name: 'Yeast Manager',
                            description: 'Yeast managed by:'
                        }),
                        knex('title').insert({
                            id: 17,
                            name: 'Lab Technician',
                            description: 'Measurements taken by:'
                        }),
                        knex('title').insert({
                            id: 18,
                            name: 'QA Packaging Technician',
                            description: 'Quality packaging assured by:'
                        }),
                        knex('title').insert({
                            id: 19,
                            name: 'Warehouse Manager',
                            description: 'Warehouse managed by:'
                        }),
                        knex('title').insert({
                            id: 20,
                            name: 'Warehouse Assistant',
                            description: 'Warehouse managed by:'
                        }),
                        knex('title').insert({
                            id: 21,
                            name: 'Warehouse Ninja',
                            description: 'Warehouse managed by:'
                        }),
                        knex('title').insert({
                            id: 22,
                            name: 'Head Brewer',
                            description: 'Brewed by:'
                        }),
                    ]);
                })
            })
        };
