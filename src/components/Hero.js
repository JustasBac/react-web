import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';
import { HashLink } from 'react-router-hash-link'

function Hero() {
    return (
        <div className='hero-container'>
            <h1>TRAVELLING IN EUROPE</h1>
            <p>Where can you go during the pandemic?</p>
            <div className="hero-btns">
                <HashLink smooth to="/#kortos">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>SUGGESTED</Button>
                </HashLink>
            </div>
            <div className="rodykle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Hero;
