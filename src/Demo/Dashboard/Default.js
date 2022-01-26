import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import test from '../../assets/images/user/channels4_profile.jpg';

class Dashboard extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={3}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <img className="fa rounded-circle" style={{ width: '70px' }} src={test} alt="activity-user" />
                                        {/* <i className="fa fa-facebook text-primary f-36"/> */}
                                    </div>
                                    <div className="col text-center">
                                        <h4>소녀의 행성</h4>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-6">
                                        <div className="text-center">
                                            <span className="text-muted m-b-20">Category</span>
                                            <h5 className="text-white"><Badge className="youtube-red" pill>Pet</Badge></h5>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-center">
                                            <span className="text-muted m-b-20">Subscribers</span>
                                            <h5>83000</h5>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <img className="fa rounded-circle" style={{ width: '70px' }} src={test} alt="activity-user" />
                                        {/* <i className="fa fa-facebook text-primary f-36"/> */}
                                    </div>
                                    <div className="col text-center">
                                        <h4>소녀의 행성</h4>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-6">
                                        <div className="text-center">
                                            <span className="text-muted m-b-20">Category</span>
                                            <h5 className="text-white"><Badge className="youtube-red" pill>Pet</Badge></h5>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-center">
                                            <span className="text-muted m-b-20">Subscribers</span>
                                            <h5>83000</h5>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <img className="fa rounded-circle" style={{ width: '70px' }} src={test} alt="activity-user" />
                                        {/* <i className="fa fa-facebook text-primary f-36"/> */}
                                    </div>
                                    <div className="col text-center">
                                        <h4>소녀의 행성</h4>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-6">
                                        <div className="text-center">
                                            <span className="text-muted m-b-20">Category</span>
                                            <h5 className="text-white"><Badge className="youtube-red" pill>Pet</Badge></h5>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-center">
                                            <span className="text-muted m-b-20">Subscribers</span>
                                            <h5>83000</h5>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <img className="fa rounded-circle" style={{ width: '70px' }} src={test} alt="activity-user" />
                                        {/* <i className="fa fa-facebook text-primary f-36"/> */}
                                    </div>
                                    <div className="col text-center">
                                        <h4>소녀의 행성</h4>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-6">
                                        <div className="text-center">
                                            <span className="text-muted m-b-20">Category</span>
                                            <h5 className="text-white"><Badge className="youtube-red" pill>Pet</Badge></h5>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-center">
                                            <span className="text-muted m-b-20">Subscribers</span>
                                            <h5>83000</h5>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;