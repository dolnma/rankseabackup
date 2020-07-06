import React from 'react'
import Head from 'next/head'
import { NextPage, GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import SpotItem from '../components/SpotItem/SpotItem'
import { ISpots } from '../interfaces/interfaces'
import newitemsBgImg from '../assets/img/newitemsBg.jpg'

export const Index: NextPage<ISpots.IProps> = (props) => {
    const { spots } = props
    const [session, loading] = useSession()
    console.log(session)

    return (
        <React.Fragment>
            <Head>
                <title>Nevim</title>
                <meta name="description" content="ahojda" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <SpotItem spots={spots} />
                <style jsx>{`
                    .container {
                        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${newitemsBgImg});
                        background-position: center;
                        background-size: cover;
                        background-color: #fff;
                        padding: 2rem;
                    }
                `}</style>
            </div>
        </React.Fragment>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(process.env.SITE + '/api/spots')
    const spots: string[] = await res.json()

    return {
        props: {
            spots,
        },
    }
}

export default Index
