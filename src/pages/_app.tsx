import axios from 'axios'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { SWRConfig } from 'swr'
import { Nav } from '../components/Nav'
import { Make } from '../database/getMakes'
import { Model } from '../database/getModels'
import { CarModel } from '../../api/Car'
// import './_app.css'
import 'antd/dist/antd.css'

export interface IMyApp {
    Component: string[]
    pageProps: string[]
}

export const MyApp: React.FC<IMyApp> = (props: { Component; pageProps }) => {
    const { Component, pageProps } = props
    console.log({ ...pageProps })

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <Nav />
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default MyApp

// MyApp.propTypes = {
//     Component: PropTypes.elementType.isRequired,
//     pageProps: PropTypes.object.isRequired,
// }

// export default class MyApp extends App {
//     componentDidMount() {
//         // Remove the server-side injected CSS.
//         const jssStyles = document.querySelector('#jss-server-side')
//         if (jssStyles) {
//             jssStyles.parentElement!.removeChild(jssStyles)
//         }
//     }
//
//     render(): JSX.Element {
//         const { Component, pageProps } = this.props
//
//         return (
//             <React.Fragment>
//                 <Head>
//                     <title>Car Trader</title>
//                     <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//                 </Head>
//                 <Nav />
//                 <SWRConfig value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}>
//                     <Component {...pageProps} />
//                 </SWRConfig>
//             </React.Fragment>
//         )
//     }
// }
