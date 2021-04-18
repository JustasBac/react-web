import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import picture1 from '../images/img-9.jpg'
import picture2 from '../images/img-2.jpg'
import picture3 from '../images/img-3.jpg'
import picture4 from '../images/img-4.jpg'
import picture5 from '../images/img-8.jpg'


function Cards() {
    return (
        <div className="cards">
            <h1>Check out these destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={picture1} text="Explore the hidden waterfall deep inside the Amazon jungle" label='Adventure' path='/services' />
                        <CardItem src={picture2} text="Travel through the Islands of Bali in a Private Cruise" label='Luxury' path='/services' />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={picture3} text="Explore the hidden waterfall deep inside the Amazon jungle" label='Adventure' path='/services' />
                        <CardItem src={picture4} text="Travel through the Islands of Bali in a Private Cruise" label='Luxury' path='/services' />
                        <CardItem src={picture5} text="Travel through the Islands of Bali in a Private Cruise" label='Luxury' path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
