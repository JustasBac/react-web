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
                {/* <div className="cards"> */}
                <ul className="cards__items">
                    <CardItem
                        src={picture1}
                        lokacija="Lithuania"
                        text="Discover the colours you never knew existed"
                        label='Sightseeing & Nature' path='/services'
                        price="500"
                        test="prior arrival"
                        isolation="7 days"
                        path='/destinations'
                        linkutis="https://reopen.europa.eu/en/map/LTU/5006"
                    />
                </ul>


                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam itaque sunt sapiente veritatis officiis error eos, vitae impedit reprehenderit, cupiditate repudiandae pariatur repellat numquam laboriosam quis voluptatem assumenda similique voluptatibus.
                    Incidunt consequatur maiores, alias omnis voluptatem neque quae laboriosam mollitia consectetur blanditiis molestiae quisquam necessitatibus inventore eveniet, rerum accusamus quia tenetur soluta veniam et quos? Nesciunt consectetur facilis omnis adipisci.
                    Ullam alias eligendi itaque reprehenderit dolorem, nobis repellat ducimus facere obcaecati magni non perspiciatis ab provident repellendus maiores laudantium expedita, ratione a est neque totam consequatur. Non rerum quidem sit?
                    </p> */}
                {/* </div> */}
            </div>
        </motion.div>
    )
}