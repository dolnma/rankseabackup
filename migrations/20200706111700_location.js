exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable('nade_locations', (table) => {
            table.increments('id')
            table.string('name')
            table.string('description')
            table.integer('map_id').unsigned()

            table.foreign('map_id').references('nade_maps.id')
        }),
        knex.schema.hasColumn('nade_spots', 'position_id').then((exists) => {
            if (exists) {
                return knex.schema.table('nade_spots', (table) => {
                    table.renameColumn('location_id', 'position_id')
                })
            }
        }),
        knex.schema.table('nade_spots', (table) => {
            table.integer('location_id').unsigned().alter()

            table.foreign('location_id').references('nade_locations.id')
        }),
    ])
}

exports.down = function (knex) {
    return Promise.all([
        knex.schema.table('nade_spots', (table) => {
            table.dropForeign('location_id')
        }),
        knex.schema.table('nade_locations', (table) => {
            table.dropForeign('map_id')
        }),
        knex.schema.dropTableIfExists('nade_locations'),
        knex.schema.hasColumn('nade_spots', 'location_id').then((exists) => {
            if (!exists) {
                return knex.schema.table('nade_spots', (table) => {
                    table.renameColumn('position_id', 'location_id')
                })
            }
        }),
    ])
}
