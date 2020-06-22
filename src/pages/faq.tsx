import React from 'react'
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { GetStaticProps, NextPage } from 'next'
import { FaqModel } from '../../api/Faq'
import { openDB } from '../openDB'

export interface FaqProps {
    faq: FaqModel[]
}

const Home: NextPage<FaqProps> = ({ faq }: FaqProps): JSX.Element => {
    return (
        <div>
            {faq.map((f) => (
                <ExpansionPanel key={f.id}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{f.question}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>{f.answer}</Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </div>
    )
}

// export default function Faq({ faq }: FaqProps) {
//     return (
//         <div>
//             {faq.map((f) => (
//                 <ExpansionPanel key={f.id}>
//                     <ExpansionPanelSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel1a-content"
//                         id="panel1a-header"
//                     >
//                         <Typography>{f.question}</Typography>
//                     </ExpansionPanelSummary>
//                     <ExpansionPanelDetails>
//                         <Typography>{f.answer}</Typography>
//                     </ExpansionPanelDetails>
//                 </ExpansionPanel>
//             ))}
//         </div>
//     )
// }

export const getStaticProps: GetStaticProps<FaqProps> = async () => {
    const db = await openDB()
    const faq = await db.all('SELECT * FROM FAQ ORDER BY createDate DESC')
    return { props: { faq } }
}

export default Home
