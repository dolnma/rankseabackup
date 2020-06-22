import React from 'react'
import { GetStaticProps } from 'next'
// Components and plugins
import { FaqModel } from '../../../api/Faq'
import { openDB } from '../../openDB'

interface FaqProps {
    faq: FaqModel[]
}

export default function Faq({ faq }: FaqProps) {
    return <React.Fragment>Ahoj</React.Fragment>
}

export const getStaticProps: GetStaticProps<FaqProps> = async () => {
    const db = await openDB()
    const faq = await db.all('SELECT * FROM FAQ ORDER BY createDate DESC')
    return { props: { faq } }
}
