import React from 'react'
import Head from 'next/head'
import { NextPage, GetServerSideProps } from 'next'
import useSWR from 'swr'

export interface IUser {
    users: [
        {
            id: number
            name: string
            email: string
        },
    ]
}

export interface IUsers {
    users: IUser[]
}

export const Index: NextPage<IUser> = (props) => {
    const { users } = props
    
    return (
        <React.Fragment>
            <Head>
                <title>Nevim</title>
                <meta name="description" content="ahojda" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                {users.map((todo) => (
                    <div key={todo.id}>
                        {todo.email} {todo.name}
                    </div>
                ))}
                <style jsx>{`
                    .container {
                        background-color: #fff;
                        padding: 2rem;
                    }
                `}</style>
            </div>
        </React.Fragment>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(process.env.SITE + '/api/maps/test')
    const users: string[] = await res.json()

    return {
        props: {
            users,
        },
    }
}

export default Index
