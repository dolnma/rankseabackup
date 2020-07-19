exports.up = function (knex) {
    return Promise.all([
        knex.schema.table('nade_locations', (table) => {
            table.foreign('map_id').references('nade_maps.id')
        }),
        knex.schema.table('nade_spots', (table) => {
            table.foreign('location_id').references('nade_locations.id')
        }),
    ])
}

exports.down = function (knex) {
    return Promise.all([
        knex.schema.table('nade_locations', (table) => {
            table.dropForeign('map_id')
        }),
        knex.schema.table('nade_spots', (table) => {
            table.dropForeign('location_id')
        }),
    ])
}
