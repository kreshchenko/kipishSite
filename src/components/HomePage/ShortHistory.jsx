import React from 'react';

import {Container, Row} from 'mdbreact';

class ShortHistory extends React.Component{
    render(){
        return (
            <div id="r">
                <Container>
                <h4>Історія</h4>
                    <Row className="centered">
                    
                    <p> Клуб, який має
                        сучасну назву ФК “КіПіШ“ є
                        продовженням традицій міні-
                        футбольного клубу “Легіон“,
                        який було створено у 2007
                        році однодумцями-друзями,
                        які жили всі поруч на вулиці
                        Київській.
                    </p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ShortHistory;