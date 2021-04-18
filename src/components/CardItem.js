import React from 'react'
import { Link } from 'react-router-dom'


function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={{
                    pathname: props.path,
                    state: { lokacija: props.lokacija }
                }}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel image" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__lokacija">
                            {props.lokacija}
                        </h5>
                        <h5 className="cards__item__text">
                            {props.text}
                        </h5>
                        <p className="cards__item__price">
                            Expected one week expenses: <span>{props.price}€</span>/person
                        </p>
                        <p className="cards__item__test">
                            Corona test prior arrival: {props.test ? <span className="required">{props.test}</span> : <span>not required</span>}
                        </p>
                        <p className="cards__item__test">
                            Self-isolation: {props.isolation ? <span className="required">{props.isolation}</span> : <span>not required</span>}
                        </p>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
