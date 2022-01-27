import React from "react";
import { Row, Col, Card, Badge } from 'react-bootstrap';

class MainItem extends React.Component {
    state = {};

    render() {
        const { ItemCard } = this.props;
        return (
            <Row>
                {ItemCard && ItemCard.map((itemdata) => {
                    return (
                        <Col md={6} xl={3} key={itemdata.channelId}>
                            <Card className='card-social'>
                                <Card.Body className='border-bottom'>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-auto">
                                            <img className="fa rounded-circle" style={{ width: '70px' }} src={itemdata.profileImage} alt="activity-user" />
                                        </div>
                                        <div className="col text-center">
                                            <h4>{itemdata.channelName}</h4>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body>
                                    <div className="row align-items-center justify-content-center card-active">
                                        <div className="col-6">
                                            <div className="text-center">
                                                <span className="text-muted m-b-20">Category</span>
                                                <h5 className="text-white"><Badge className="youtube-red" pill>{itemdata.categoryType}</Badge></h5>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="text-center">
                                                <span className="text-muted m-b-20">Subscribers</span>
                                                <h5>{itemdata.subscribers}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        );
    }
}
export default MainItem;