import React from 'react'
import { Button } from './Button'
import '../App.css'
import './Main.css'

function Main() {
    return (
        <div className="main-container">
           {<video src="./Videos/video-3.mp4" autoPlay loop muted  />  }
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <br/>

            <div className="main-btns">
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    GET STARTED
                </Button>

                <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>

            </div>
            
        </div>
    )
}

export default Main
