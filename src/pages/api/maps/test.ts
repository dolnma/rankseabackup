import {NextApiRequest, NextApiResponse} from 'next'
import * as knex from '../../../database/connectDB'

export default async function cars(req: NextApiRequest, res: NextApiResponse) {

    return new Promise((resolve, reject) => {

        knex.select().from('nextauth_users')
            .then((rows) => {
                res.json(rows)
                resolve()
            })
            .catch((err) => {
                res.json(err);
                res.status(405).end();
                resolve()
            })
            // .finally(() => {
            //     knex.destroy();
            // })

    })
}