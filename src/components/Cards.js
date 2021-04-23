import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards" id="kortos">
            <h1>Check out our suggested destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='https://res.cloudinary.com/dfx4mjv8p/image/upload/c_scale,w_540/v1619156950/react-app/img-9_q1ymgn.jpg'
                            lokacija="Lithuania"
                            text="Discover the colours you never knew existed"
                            label='Sightseeing & Nature'
                            price="500"
                            test="prior arrival"
                            isolation="7 days"
                            path='/destinations'
                            linkutis="https://reopen.europa.eu/en/map/LTU/5006"
                        />
                        <CardItem src='https://res.cloudinary.com/dfx4mjv8p/image/upload/c_scale,w_540/v1619156951/react-app/img-2_mmh9ks.jpg'
                            lokacija="Mallorca"
                            text="Travel to the most sunny island in Spain!"
                            price="600"
                            label='Relax & Explore'
                            path='/destinations'
                            linkutis="https://reopen.europa.eu/en/map/ESP/5006"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src='https://res.cloudinary.com/dfx4mjv8p/image/upload/c_scale,w_540/v1619156950/react-app/img-3_r4pafh.jpg'
                            lokacija="Sweden"
                            text="Celebrate swedish Midsummer"
                            label='Sightseeing & Nature'
                            price="800"
                            test="prior arrival"
                            path="/destinations"
                            linkutis="https://reopen.europa.eu/en/map/SWE/5006"
                        />
                        <CardItem src='https://res.cloudinary.com/dfx4mjv8p/image/upload/c_scale,w_540/v1619156951/react-app/img-4_cujcqi.jpg'
                            lokacija="Czechia"
                            text="Explore one of the most beautiful capitals of Europe!"
                            label='City Tour'
                            price="450"
                            test="prior arrival"
                            path='/destinations'
                            linkutis="https://reopen.europa.eu/en/map/CZE/5006"
                        />
                        <CardItem src='https://res.cloudinary.com/dfx4mjv8p/image/upload/c_scale,w_540/v1619156949/react-app/img-5_pqi97o.jpg'
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
