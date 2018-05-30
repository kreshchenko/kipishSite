import React from 'react';

import {Container, Row, Col} from 'mdbreact';

class HeaderText extends React.Component{
    render(){
        return(
            <div id="blue">
                <Container>
                    <Row className="centered">
                        <Col>
                        <br/>
                            <h4>ФК "КіПіШ"</h4>
                            <p>СКЛАД КОМАНДИ</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HeaderText;