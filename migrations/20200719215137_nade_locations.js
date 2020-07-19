exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable('nade_locations', (table) => {
            table.increments('id')
            table.string('name')
            table.string('description')
            table.integer('map_id').unsigned()
        })
    ])
}

exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTableIfExists('nade_locations'),
    ])
}
