exports.up = function (knex) {
    return Promise.all ([
        knex.schema.createTable('nade_maps', tbl => {
            tbl.increments('id').unsigned();
            tbl.string('name')
            tbl.string('description')
        }),
        knex.schema.createTable('nade_spots', tbl => {
            tbl.increments('id').unsigned();
            tbl.string('name')
            tbl.string('description')
            tbl.string('link')
            tbl.integer('type')
            tbl.integer('side')
            tbl.integer('map_id').unsigned()
            tbl.integer('position_id')
            tbl.timestamp('date_created').defaultTo(knex.fn.now());

            tbl.foreign('map_id').references('nade_maps.id')
        }),
    ])
}

exports.down = function (knex) {
    return Promise.all ([
        knex.schema.dropTableIfExists('nade_spots'),
        knex.schema.dropTableIfExists('nade_maps'),
    ])
}
