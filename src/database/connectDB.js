import knex from 'knex'
import * as knexfile from '../../knexfile'

const env = process.env.NODE_ENV || 'development'
const configOptions = knexfile[env]

const db = knex(configOptions)

// module.exports = knex(configOptions)
export default db
