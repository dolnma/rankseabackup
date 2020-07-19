exports.up = function (knex) {
    let table = 'nade_spots'
    return Promise.all([
        knex(table).insert({ name: 'Test', description: 'Test spot', link: 'https://www.youtube.com/watch?v=chqxzr9T88M', type: 1, side: 1, location_id: 1}),
        knex(table).insert({ name: 'Test2', description: 'Test spot 2', link: 'https://www.youtube.com/watch?v=_sdzt0G58JU&t=277s', type: 2, side: 2, location_id: 1}),
    ])
}

exports.down = function (knex) {
    let table = 'nade_locations'
    return Promise.all ([
        knex.raw('SET foreign_key_checks = 0'),
        knex(table).truncate(),
        knex.raw('SET foreign_key_checks = 1'),
    ])
}