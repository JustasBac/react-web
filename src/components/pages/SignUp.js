import { motion } from 'framer-motion'
import React from 'react'
import '../../App.css'
import { pageVariants } from '../../App.js'
import { pageTransitions } from '../../App.js'

export default function SignUp() {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions}>
            <h1 className='sign-up'>SIGN UP</h1>
        </motion.div>
    )
}