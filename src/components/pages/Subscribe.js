import { motion } from 'framer-motion'
import React from 'react'
import '../../App.css'
import { pageVariants } from '../../App.js'
import { pageTransitions } from '../../App.js'

export default function Subscribe() {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions} className="deze">
            <div className="subscribe">
                <h1>SUBSCRIBE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam itaque sunt sapiente veritatis officiis error eos, vitae impedit reprehenderit, cupiditate repudiandae pariatur repellat numquam laboriosam quis voluptatem assumenda similique voluptatibus.
                Incidunt consequatur maiores, alias omnis voluptatem neque quae laboriosam mollitia consectetur blanditiis molestiae quisquam necessitatibus inventore eveniet, rerum accusamus quia tenetur soluta veniam et quos? Nesciunt consectetur facilis omnis adipisci.
                Ullam alias eligendi itaque reprehenderit dolorem, nobis repellat ducimus facere obcaecati magni non perspiciatis ab provident repellendus maiores laudantium expedita, ratione a est neque totam consequatur. Non rerum quidem sit?
            </p>
            </div>
        </motion.div>
    )
}