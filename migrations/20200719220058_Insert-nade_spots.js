exports.up = function (knex) {
    let table = 'nade_locations'
    return Promise.all([
        knex(table).insert({ name: 'Short', description: 'Short A', map_id: 1 }),
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