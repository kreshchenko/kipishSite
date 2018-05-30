import React from 'react';

import HeaderWrap from '../components/HomePage/HeaderWrap';
import ThreeFacts from '../components/HomePage/ThreeFacts';
import LatestWorks from '../components/HomePage/LatestWorks';
import Partners from '../components/HomePage/Partners';
import ShortHistory from '../components/HomePage/ShortHistory';

class HomePage extends React.Component{
    render(){
        return <h1>
            <HeaderWrap />
            <ThreeFacts />
            <LatestWorks />
            <Partners />
            <ShortHistory />
        </h1>
    }
}

export default HomePage;