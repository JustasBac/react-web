import React from 'react'
import '../../App.css'
import { motion } from 'framer-motion'
import { pageVariants } from '../../App.js'
import { pageTransitions } from '../../App.js'
import CardItem from '../CardItem'

export default function Deals() {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions} className="deze">
            <div className="deals">
                <h1>SPECIAL DEALS</h1>
                <ul className="listas">
                    <CardItem
                        src='https://res.cloudinary.com/dfx4mjv8p/image/upload/c_scale,w_540/v1619156950/react-app/img-9_q1ymgn.jpg'
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