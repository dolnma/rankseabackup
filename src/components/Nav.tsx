// import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 22px;
    background-color: black;
`

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
// }))
export const Nav: React.FC = (): JSX.Element => {
    return (
        <Container>
            <Link href="/faq">
                <Button type="primary">Button 1</Button>
            </Link>
        </Container>
        // <AppBar position="static">
        //     <Toolbar variant="dense">
        //         <Typography variant="h6" className={classes.title}>
        //             Car Trader
        //         </Typography>
        //
        //         <Button color="inherit">
        //             <Link href="/">
        //                 <a style={{ color: 'white' }}>
        //                     <Typography color="inherit">Home</Typography>
        //                 </a>
        //             </Link>
        //         </Button>
        //
        //         <Button color="inherit">
        //             <Link href="/faq">
        //                 <a style={{ color: 'white' }}>
        //                     <Typography color="inherit">FAQ</Typography>
        //                 </a>
        //             </Link>
        //         </Button>
        //     </Toolbar>
        // </AppBar>
    )
}

// export function Nav() {
//     return (
//         <Container>
//             <Button type="primary">
//                 <Link href="/faq">
//                     <a style={{ color: 'white' }}>FAQ</a>
//                 </Link>
//             </Button>
//         </Container>
//         // <AppBar position="static">
//         //     <Toolbar variant="dense">
//         //         <Typography variant="h6" className={classes.title}>
//         //             Car Trader
//         //         </Typography>
//         //
//         //         <Button color="inherit">
//         //             <Link href="/">
//         //                 <a style={{ color: 'white' }}>
//         //                     <Typography color="inherit">Home</Typography>
//         //                 </a>
//         //             </Link>
//         //         </Button>
//         //
//         //         <Button color="inherit">
//         //             <Link href="/faq">
//         //                 <a style={{ color: 'white' }}>
//         //                     <Typography color="inherit">FAQ</Typography>
//         //                 </a>
//         //             </Link>
//         //         </Button>
//         //     </Toolbar>
//         // </AppBar>
//     )
// }

export default Nav
