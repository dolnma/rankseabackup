import axios from 'axios'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { SWRConfig } from 'swr'
import { Nav } from '../components/Nav'
import { Make } from '../database/getMakes'
import { Model } from '../database/getModels'
import { CarModel } from '../../api/Car'
import { Provider } from 'next-auth/client'
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'

const { Header, Footer, Sider, Content } = Layout;

export interface IMyApp {
    Component: string[]
    pageProps: string[]
    session: string[]
}

const Container = styled.div`
    background-color: #fff;
    padding: 2rem;
`

export const MyApp: React.FC<IMyApp> = (props: { Component; pageProps; session }) => {
    const { Component, pageProps, session } = props

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
                <meta name="description" content='zajímavosti'/>
                <meta name="keywords" content='těžko říct' />
            </Head>
            <Layout className="layout">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <Nav />
                </Header>
                <Content style={{ marginTop: 64 }}>
                    <SWRConfig value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}>
                        <Provider session={session}>
                                <Component {...pageProps} />
                        </Provider>
                    </SWRConfig>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
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
