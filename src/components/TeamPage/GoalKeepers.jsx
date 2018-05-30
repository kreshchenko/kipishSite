import React from 'react';

import {Row, Col} from 'mdbreact';

import img15 from '../../img/player/01289.JPG';
import img2 from '../../img/player/01291.JPG';
import img3 from '../../img/player/01281.JPG';
import img4 from '../../img/player/01296.JPG';
import img5 from '../../img/player/01295.JPG';
import img6 from '../../img/player/01294.JPG';
import img7 from '../../img/player/01288.JPG';
import img8 from '../../img/player/01283.JPG';
import img9 from '../../img/player/01293.JPG';
import img10 from '../../img/player/01287.JPG';
import img11 from '../../img/player/01284.JPG';
import img12 from '../../img/player/01292.JPG';
import img13 from '../../img/player/01282.JPG';
import img14 from '../../img/player/01286.JPG';
import img1 from '../../img/player/404.JPG';


class GoalKeepers extends React.Component{
    constructor(){
        super();

        this.state = {
            goalKeepers: [
                {name: 'Олексій', surname: 'Голубєв', date: '18.03.1992', url: 'fb.com', img: img15}, 
                {name: 'Данило', surname: 'Захаров', date: '19.05.1992', url: 'fb.com', img: img2},
                {name: 'Віталій', surname: 'Сарана', date: '29.06.1991', url: 'fb.com', img: img1}
            ],
            grenadiers: [
                {name: 'Ігор', surname: 'Крещенко', date: '12.05.1993', url: 'fb.com', img: img3}, 
                {name: 'Ігор', surname: 'Вознюк', date: '28.07.1977', url: 'fb.com', img: img4}, 
                {name: 'Сергій', surname: 'Холявко', date: '12.05.1993', url: 'fb.com', img: img5}, 
                {name: 'Роман', surname: 'Гах', date: '12.08.1985', url: 'fb.com', img: img6}, 
                {name: 'Данило', surname: 'Дробатий', date: '26.09.2001', url: 'fb.com', img: img1}, 
                {name: 'Валерій', surname: 'Калина', date: '26.11.1984', url: 'fb.com', img: img7}, 
                {name: 'Дмитро', surname: 'Маринович', date: '05.03.1985', url: 'fb.com', img: img8}, 
                {name: 'Мирослав', surname: 'Плішка', date: '12.07.1982', url: 'fb.com', img: img1}, 
                {name: 'Вадим', surname: 'Постернак', date: '20.05.1984', url: 'fb.com', img: img9},
                {name: 'Андрій', surname: 'Рижук', date: '14.05.1988', url: 'fb.com', img: img10},
                {name: 'Євген', surname: 'Черниш', date: '02.02.1989', url: 'fb.com', img: img11},
                {name: 'Віталій', surname: 'Ковтонюк', date: '12.07.1982', url: 'fb.com', img: img12},
                {name: 'Михайло', surname: 'Шкрабало', date: '08.12.1974', url: 'fb.com', img: img1},
                {name: 'Ярослав', surname: 'Точенюк', date: '31.12.1994', url: 'fb.com', img: img13},
                {name: 'Ігор', surname: 'Рижук', date: '21.07.1991', url: 'fb.com', img: img14}
            ]
        }
    }


    render(){

        const keepers = this.state.goalKeepers.map( (item,i) => {
            return  <Col className="col-2">
                        <img className="rounded-circle" src={item.img} width="110" height="110" alt=""/>
                        <h4>{item.name + ' ' + item.surname}</h4>
                        <p>{item.date}</p>
                        <p><a href={item.url}>@Facebook</a></p>
                    </Col>
        } );

        const forwards = this.state.grenadiers.map( (item,i) => {
            return  <Col className="col-2">
                        <img className="rounded-circle" src={item.img} width="110" height="110" alt=""/>
                        <h4>{item.name + ' ' + item.surname}</h4>
                        <p>{item.date}</p>
                        <p><a href={item.url}>@Facebook</a></p>
                    </Col>
        } );

        return(
            <div>
                <h2>Воротарі</h2>
                <Row className="centered">
                    {keepers}
                </Row>

                <h2>Польові</h2>
                <Row className="centered">
                    {forwards}
                </Row>
            </div>
        );
    }
}

export default GoalKeepers;