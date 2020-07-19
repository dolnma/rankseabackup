exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable('nade_spots', tbl => {
            tbl.increments('id')
            tbl.string('name')
            tbl.string('description')
            tbl.string('link')
            tbl.integer('type')
            tbl.integer('side')
            tbl.integer('location_id').unsigned()
            tbl.timestamp('date_created').defaultTo(knex.fn.now())
        }),
    ])
}

exports.down = function (knex) {
    return Promise.all ([
        knex.schema.dropTableIfExists('nade_spots'),
    ])
}