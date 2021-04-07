import React from 'react'
import '../Slider/slider.css'


export default function slider() {
  return (
    <div className='hero-container'>
          <video src = "/videos/video_1.mp4" autoPlay loop muted/>
           
          <h1>NUPTIAE</h1>
          <p>L'amour commence ici</p>
          <div className="hero-btns">
            <button 
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'>
              Mes souhaits  
            </button>      
            <button 
            className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'>
              Voyager 
            </button>
          </div>

        </div>
  )
}
