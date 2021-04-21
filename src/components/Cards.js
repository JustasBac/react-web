import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import picture1 from '../images/img-9.jpg'
import picture2 from '../images/img-2.jpg'
import picture3 from '../images/img-3.jpg'
import picture4 from '../images/img-4.jpg'
import picture5 from '../images/img-5.jpg'


function Cards() {
    return (
        <div className="cards" id="kortos">
            <h1>Check out our suggested destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={picture1}
                            lokacija="Lithuania"
                            text="Discover the colours you never knew existed"
                            label='Sightseeing & Nature' path='/services'
                            price="500"
                            test="prior arrival"
                            isolation="7 days"
                            path='/destinations'
                            linkutis="https://reopen.europa.eu/en/map/LTU/5006"
                        />
                        <CardItem src={picture2}
                            lokacija="Mallorca"
                            text="Travel to the most sunny island in Spain!"
                            price="600"
                            label='Relax & Explore'
                            path='/destinations'
                            linkutis="https://reopen.europa.eu/en/map/ESP/5006"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={picture3}
                            lokacija="Sweden"
                            text="Celebrate swedish Midsummer"
                            label='Sightseeing & Nature'
                            price="800"
                            test="prior arrival"
                            path="/destinations"
                            linkutis="https://reopen.europa.eu/en/map/SWE/5006"
                        />
                        <CardItem src={picture4}
                            lokacija="Czechia"
                            text="Explore one of the most beautiful capitals of Europe!"
                            label='City Tour'
                            price="450"
                            test="prior arrival"
                            path='/destinations'
                            linkutis="https://reopen.europa.eu/en/map/CZE/5006"
                        />
                        <CardItem src={picture5}
                            lokacija="Greece"
                            text="Discover a country with the most beautiful islands in Europe"
                            label='Relax & Nature'
                            price="500"
                            path='/destinations'
                            linkutis="https://reopen.europa.eu/en/map/GRC/5006"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
