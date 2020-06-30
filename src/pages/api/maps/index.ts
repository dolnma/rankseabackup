import {NextApiRequest, NextApiResponse} from 'next'
import con from "../../../database/connectDB";

export default async function cars(req: NextApiRequest, res: NextApiResponse) {

    con.promise().query("SELECT * FROM `users`")
        .then( ([rows,fields]) => {
            res.json(rows)
            console.log(rows);
        })
        .catch(console.log)
        .then( () => con.end());
}