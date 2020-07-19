exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable('nade_maps', tbl => {
            tbl.increments('id')
            tbl.string('name')
            tbl.string('csgo_name')
            tbl.string('description')
        }),
    ])
}

exports.down = function (knex) {
    return Promise.all ([
        knex.schema.dropTableIfExists('nade_maps'),
    ])
}