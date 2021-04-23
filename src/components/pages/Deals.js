import React from 'react'
import '../../App.css'
import { motion } from 'framer-motion'
import { pageVariants } from '../../App.js'
import { pageTransitions } from '../../App.js'
import CardItem from '../CardItem'
import picture1 from '../../images/img-9.jpg'

export default function Deals() {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions} className="deze">
            <div className="deals">
                <h1>SPECIAL DEALS</h1>
                <ul className="listas">
                    <CardItem
                        src={picture1}
                        lokacija="Lithuania"
                        text="Discover the colours you never knew existed"
                        label='Sightseeing & Nature'
                        price="500"
                        test="prior arrival"
                        isolation="7 days"
                        path='/destinations'
                        linkutis="https://reopen.europa.eu/en/map/LTU/5006"
                    />
                </ul>

            </div>
        </motion.div>
    )
}