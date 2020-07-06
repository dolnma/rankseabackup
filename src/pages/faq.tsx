import React from 'react'
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { GetStaticProps, NextPage } from 'next'


const Home: NextPage = (): JSX.Element => {
    return (
        <div>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Otázka 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Odpověď</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
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

export default Home
