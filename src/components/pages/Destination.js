import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransitions } from '../../App.js'
import { Button } from '../Button'
import './Destination.css'


export default function Destinations(props) {
    if (props.location.state) {
        return (
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions}>
                <div className="page-destinations">
                    <h1 className='destinations'>{props.location.state.lokacija}</h1>
                </div>



            </motion.div >
        )
    } else {
        return (
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions}>
                <h1 className='products'>Destination</h1>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>SUGGESTED</Button>
            </motion.div >
        )
    }
}