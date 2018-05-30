import React from 'react';

import {Container} from 'mdbreact';
import HeaderText from '../components/TeamPage/HeaderText';
import GoalKeepers from '../components/TeamPage/GoalKeepers';


class TeamPage extends React.Component{
    render(){
        return(
            <span>
            <HeaderText />
            <Container>
                <br/>
                <GoalKeepers />
            </Container>
            </span>
        );
    }
}

export default TeamPage;