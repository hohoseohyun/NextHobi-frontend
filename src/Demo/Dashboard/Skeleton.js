import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonMainList() {
    return (
        <Col md={6} xl={3}>
            <Card className='card-social'>
                <Card.Body className='border-bottom'>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <Skeleton variant="circular" width={70} height={70} />
                        </div>
                        <div className="col text-center">
                            <Skeleton variant="text" width={150} />
                        </div>
                    </div>
                </Card.Body>
                <Card.Body>
                    <div className="row align-items-center justify-content-center card-active">
                        <div className="col-6">
                            <div className="text-center">
                                <Skeleton variant="text" width={120} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="text-center">
                                <Skeleton variant="text" width={120} />
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}