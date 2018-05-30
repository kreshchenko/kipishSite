import React from 'react';

import {Container, Row, Col} from 'mdbreact';

class HeaderWrap extends React.Component{
    render(){
        return (
            <div id="headerwrap">
                <Container>
                    <Row>
                        <Col lg="12" >
                            <h1><b>К</b>и<b>П</b>и<b>Ш</b></h1>
                            <h2>футбольный клуб</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HeaderWrap;