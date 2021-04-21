import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import { pageVariants, pageTransitions } from '../../App.js'
import { Button } from '../Button'

export default function Subscribe() {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions} className="deze">
            <div className="subscribe">
                <h1>SUBSCRIBE</h1>
                <div className="dezute">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam itaque sunt sapiente veritatis officiis error eos, vitae impedit reprehenderit, cupiditate repudiandae pariatur repellat numquam laboriosam quis voluptatem assumenda similique voluptatibus.
                    Incidunt consequatur maiores, alias omnis voluptatem neque quae laboriosam mollitia consectetur blanditiis molestiae quisquam necessitatibus inventore eveniet, rerum accusamus quia tenetur soluta veniam et quos? Nesciunt consectetur facilis omnis adipisci.
                    </p>
                    <div className="inputas">
                        {/* <form> */}
                        <input type="email" name="email" placeholder="Your email" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                        {/* </form> */}
                    </div>
                    <div className="socialIkonos">
                        <Link to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/" target="_blank" aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to="/" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to={{ pathname: "https://www.linkedin.com/in/justasas/" }} target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}