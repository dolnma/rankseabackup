import * as knex from './connectDB'

const getUsers = async (res) => {

    return new Promise((resolve, reject) => {

        knex.select().from('nextauth_users')
            .then((rows) => {
                resolve()
                console.log(rows)
                return res.json(rows)
            })
            .catch((err) => {
                reject()
                return err
            })
        // .finally(() => {
        //     knex.destroy();
        // })

    })
}

export default getUsers