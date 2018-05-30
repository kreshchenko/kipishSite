import React from 'react';

import HeaderText from '../components/HistoryPage/HeaderText';
import MainText from '../components/HistoryPage/MainText';

class HistoryPage extends React.Component{
    render(){
        return(
            <div>
                <HeaderText />
                <MainText />
            </div>
        );
    }
}

export default HistoryPage;