import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>TRAVELLING IN EUROPE</h1>
            <p>Where can you go during the pandemic?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>SUGGESTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>BEST DEALS <i className="fas fa-suitcase-rolling"></i> </Button>
            </div>
        </div>
    )
}

export default Hero;
