import React from 'react';

import {Container, Row, Col} from 'mdbreact';

import img1 from '../../img/c01.gif';
import img2 from '../../img/c02.gif';
import img3 from '../../img/c03.gif';
import img4 from '../../img/c04.gif';

class Partners extends React.Component{
    render(){
        return(
            <div id="lg">
                <Container>
                    <h4>Наші партнери</h4>
                    <Row className="centered">
                        <Col>
                            <img src={img1} alt="Федерація футболу м. Вінниця" />
                        </Col>
                        <Col>
                            <img src={img2} alt="AllSimple" />
                        </Col>
                        <Col>
                            <img src={img3} alt="Асоціація футзалу м. Вінниця" />
                        </Col>
                        <Col>
                            <img src={img4} alt="Футбольна Битва Районів - ФБР" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Partners;