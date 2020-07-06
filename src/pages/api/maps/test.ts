import { NextApiResponse, NextApiRequest } from 'next'
import db from '../../../database/connectDB.js'

export default async function getUsers(req: NextApiRequest, res: NextApiResponse): Promise<any> {
    return new Promise((resolve) => {
        db.select()
            .from('nextauth_users')
            .then((rows) => {
                resolve(res.status(200).json(rows))
            })
            .catch((err) => {
                res.json(err)
                res.status(405).end()
            })
        // .finally(() => {
        //     knex.destroy();
        // })
    })
}
