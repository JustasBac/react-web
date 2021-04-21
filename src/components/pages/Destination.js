import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransitions } from '../../App.js'
import { Button } from '../Button'
import './Destination.css'
import euLogo from '../../images/re-open.jpg'
import { Link, Redirect } from 'react-router-dom'


export default function Destinations(props) {
    if (props.location.state) {
        return (
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions}>
                <div className="page-destinations">
                    <img className='bakraundas' src={props.location.state.src} alt="" />
                    <h1>{props.location.state.lokacija}</h1>
                    <div className="page-lentele">
                        <img src={euLogo} alt="" />
                        <h2>{props.location.state.text}</h2>
                        <p>One person approximately spends {props.location.state.price}€ when travelling for one week</p>
                        <h3>Corona travelling restrictions</h3>
                        <div className="restrictions">
                            <p>
                                Is corona test required? {props.location.state.test ? <span className="required">{props.location.state.test}</span> : <span>Not required</span>}
                            </p>
                            <p>
                                Do I have to self-isolate after arriving? {props.location.state.isolation ? <span className="required">Yes, {props.location.state.isolation}</span> : <span>Not required</span>}
                            </p>
                        </div>
                        <p className='lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quis excepturi exercitationem eveniet sed deserunt ducimus tempore tenetur nihil officiis mollitia, veritatis iure consequuntur fugit est earum, ex consequatur omnis?</p>
                        <div className="mygtukai">
                            <Link to='/'>
                                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>BACK <i className="fas fa-arrow-left"></i></Button>
                            </Link>
                            <Link to={{ pathname: props.location.state.linkutis }} target="_blank">
                                <Button buttonStyle='btn--outline' buttonSize='btn--medium'>MORE <i className="fas fa-info-circle"></i></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div >
        )
    } else {
        return (
            <Redirect to="/" />
            // <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions}>
            //     <h1 className='products'>Destination</h1>
            //     <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>SUGGESTED</Button>
            // </motion.div >
        )
    }
}