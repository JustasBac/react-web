import { motion } from 'framer-motion'
import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'
import Hero from '../Hero'
import { pageVariants } from '../../App.js'
import { pageTransitions } from '../../App.js'

function Home() {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions}>
            <Hero />
            <Cards />
            <Footer />
        </motion.div>
    )
}

export default Home;