exports.up = function (knex) {
    return Promise.all([
        knex('nade_maps').insert({ name: 'Dust2', csgo_name: 'de_dust2', description: 'the best map' }),
        knex('nade_maps').insert({ name: 'Inferno', csgo_name: 'de_inferno', description: 'blah...' }),
        knex('nade_maps').insert({ name: 'Train', csgo_name: 'de_train', description: 'blah...' }),
        knex('nade_maps').insert({ name: 'Mirage', csgo_name: 'de_mirage', description: 'blah...' }),
        knex('nade_maps').insert({ name: 'Nuke', csgo_name: 'de_nuke', description: 'blah...' }),
        knex('nade_maps').insert({ name: 'Overpass', csgo_name: 'de_overpass', description: 'blah...' }),
        knex('nade_maps').insert({ name: 'Vertigo', csgo_name: 'de_overpass', description: 'blah...' }),
    ])
}

exports.down = function (knex) {}
