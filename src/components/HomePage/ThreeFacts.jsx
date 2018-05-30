import React from 'react';

import {Container, Row, Col, Fa} from 'mdbreact';

class ThreeFacts extends React.Component{
    render(){
        return (
            <Container>
                <Row className='centered'>
                    <Col>
                        <p><Fa icon="camera-retro" size="4x"/></p>
                        <h4>ФБР</h4>
                        <p>4 сезон - Перша ліга - 2 місце</p>
                    </Col>
                    <Col>
                        <p><Fa icon="camera-retro" size="4x"/></p>
				        <h4>Чемпіонат міста</h4>
				        <p>2016-2017 - 3 ліга - 3 місце</p>
                        <p>2017-2018 - 4 ліга - 2 місце</p>
                    </Col>
                    <Col>
                        <p><Fa icon="camera-retro" size="4x"/></p>
                        <h4>Кубок міста</h4>
                        <p>2015-2016 - 3 ліга - Фіналіст</p>
				        <p>2016-2017 - 3 ліга - Переможець</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ThreeFacts;