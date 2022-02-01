import React, { useEffect, useState } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import VideoList from './VideoList';
import * as mainSvc from "../../services/main"

function MainDetail() {
    const [current, setCurrent] = useState([]);
    const [data, setData] = useState([]);

    const loadData = async () => {
        mainSvc.getVideoList('UCkh6TlSape86-iHiehXvsmA')
            .then(({ data }) => {
                setData(data);
            });
    }

    const handelChange = (videoKey) => {
        for (let i = 0; i < data.length; i++) {
            if (videoKey === data[i].id.videoId)
                setCurrent(data[i]);
            break;
        }
    };

    useEffect(() => {
        loadData();
        handelChange();
    }, []);

    return (
        <Aux>
            <Row>
                <Col xl={4}>
                    <VideoList clickTitle={handelChange} videos={data}></VideoList>
                </Col>
                <Col xl={8}>
                    <hr />
                    <Tabs defaultActiveKey="home">
                        <Tab eventKey="home" title="정보">
                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                        </Tab>
                        <Tab eventKey="profile" title="제품">
                            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                        </Tab>
                        <Tab eventKey="contact" title="지도">
                            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Aux>
    );
}

export default MainDetail;
