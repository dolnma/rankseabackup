// Interfaces
import { ISpots } from '../../interfaces/interfaces'
// Modules
import ReactPlayer from 'react-player/lazy'
import { Row, Col } from 'antd'

const SpotItem: React.FC<ISpots.IProps> = ({ spots }) => {
    return (
        <Row>
            {spots.map((spot) => (
                <Col xs={24} md={12} lg={8} xl={8} key={spot.id}>
                    <div className="spotitem">
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player" url={spot.link} width="100%" height="100%" />
                        </div>
                        <div className="info">
                            <div>
                                <h2>{spot.name}</h2>
                                {spot.description}
                            </div>
                            <div>{spot.side}</div>
                        </div>
                    </div>
                    <style jsx>{`
                        .spotitem {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin: 5px;
                            padding: 15px;
                            background-color: white;
                            border-radius: 8px;
                        }
                        .player-wrapper {
                            position: relative;
                            width: 100%;
                            height: 350px;
                        }

                        .react-player {
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                        .info {
                            padding-top: 15px;
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                        }
                    `}</style>
                </Col>
            ))}
        </Row>
    )
}

export default SpotItem
