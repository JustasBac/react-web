import React from 'react'
import '../../App.css'
import { motion } from 'framer-motion'
import { pageVariants } from '../../App.js'
import { pageTransitions } from '../../App.js'

export default function Products() {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions}>
            <h1 className='products'>PRODUCTS</h1>
        </motion.div>
    )
}