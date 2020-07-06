exports.up = function (knex) {
    return Promise.all([
        knex.schema.hasColumn('nade_spots', 'map_id').then((exists) => {
            if (exists) {
                return knex.schema.table('nade_spots', (table) => {
                    table.dropForeign('map_id')
                    table.dropColumn('map_id')
                })
            }
            // console.log('prošlo')
            // if (!exists) {
            //     return knex.schema.table('nade_spots', (table) => {
            //         table.dropForeign('map_id')
            //         table.dropColumn('map_id')
            //     })
            // }
        }),
    ])
}

exports.down = function (knex) {}
