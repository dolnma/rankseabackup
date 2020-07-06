declare namespace ISpots {
    export interface InitialProps {}

    export interface IProps {
        spots: [
            {
                id: number
                name: string
                link: string
                description: string
                side: number
            },
        ]
    }

    export interface IStateProps {}
}

export { ISpots }
