import React from 'react'
import '../../App.css'
import { motion } from 'framer-motion'
import { pageVariants } from '../../App.js'
import { pageTransitions } from '../../App.js'


export default function Services() {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions}>
            <h1 className='services'>SERVICES</h1>
        </motion.div>)
}