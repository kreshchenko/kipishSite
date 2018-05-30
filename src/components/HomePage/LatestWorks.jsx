import React from 'react';

import {Row, Col, Container} from 'mdbreact';

import img1 from '../../img/player/01282.JPG';
import img2 from '../../img/player/01281.JPG';
import img3 from '../../img/player/01283.JPG';

class LatestWorks extends React.Component{
    render(){
        return (
            <div id="dg">
                <Container>
                    <h4>Клуб</h4>
                    <Row className='centered'>
                        <Col>
                            <div className="tilt">
                                <a href="#"><img src={img1} alt=""/></a>
                            </div>
                            <p>Президент</p>
                        </Col>
                        <Col>
                            <div className="tilt">
                                <a href="#"><img src={img2} alt=""/></a>
                            </div>
                            <p>Капітан</p>
                        </Col>
                        <Col>
                            <div className="tilt">
                                <a href="#"><img src={img3} alt=""/></a>
                            </div>
                            <p>Тренер</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LatestWorks;