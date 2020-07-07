declare namespace ISpots {
    export interface InitialProps {}

    export interface IProps {
        initialData: ISpot[]
        url: string
    }

    export interface ISpot {
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
