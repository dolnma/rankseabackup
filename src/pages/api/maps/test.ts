import {NextApiRequest, NextApiResponse} from 'next'
import con from "../../../database/connectDB";

export default async function cars(req: NextApiRequest, res: NextApiResponse) {

    return new Promise((resolve, reject) => {

        knex.select().from('users')
            .then((rows: string) => {
                res.json(rows)
                resolve()
            })
            .catch((err) => {
                res.json(err);
                res.status(405).end();
                resolve()
            })
            .finally(() => {
                knex.destroy();
            })

    })
}