import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button3 } from './Button3';
import './HeroSection.css';
import { Button2 } from './Button2';
import Typewriter from "typewriter-effect";

function HeroSection(props) {
  return (
    <div className='hero-container'>
      <video src='/videos/Goa.mp4' autoPlay loop muted /> 

      <div id = "header1">
   <div id= "header2">

    <Typewriter
    options={{
      autoStart: true,
      loop: true,
      delay: 40,
      strings: [
        "Welcome to GOA",
        "Happiness is closer than you think!",
        "Adventure awaits, go find it.","Dont be a tourist,be a traveler!",

      ],
    }}
       />
      </div>
    </div>


      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      {props.status &&
          <Button3
            className='btns'
            buttonStyle='mybtn--primary'
            buttonSize='mybtn--large'
          //onClick={console.log('hey')}
        >
         PLAN YOUR TRIP NOW <i className='far fa-play-circle' />
        </Button3>
      }
      {
        props.status ||
         <Button2
            className='btns'
            buttonStyle='mybtn--primary'
            buttonSize='mybtn--large'
        >
         PLAN YOUR TRIP NOW  <i class="fa-solid fa-signs-post"></i>
        </Button2>
      }
    </div>
    </div>
  );
}

export default HeroSection;
