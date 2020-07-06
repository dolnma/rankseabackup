import { NextApiResponse, NextApiRequest } from 'next'
import db from '../../../database/connectDB.js'

export default async function getMaps(req: NextApiRequest, res: NextApiResponse): Promise<any> {
    return new Promise((resolve) => {
        db.select()
            .from('nade_maps')
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
