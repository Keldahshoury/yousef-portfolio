"use client";
import { useRef } from 'react';
import moon from "../images/wallpaper 1.webp";
import land from '../images/land.png';
import cat from '../images/cat.gif';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Scroll(){
    const ref = useRef();
    return (
        <div>
        <Parallax pages={4}>
          {/* <ParallaxLayer speed={1}>
              <h2>Welcome to my website</h2>
          </ParallaxLayer>
  
          <ParallaxLayer offset={1} speed={0.5}>
              <h2>Web development is fun!</h2>
          </ParallaxLayer> */}
  
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
                backgroundImage: `url(${moon})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
          >
            <img src={moon.src}/>
          </ParallaxLayer>
  
          <ParallaxLayer
            offset={2}
            speed={1}
            factor={2}
            style={{
                backgroundImage: `url(${land})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
          > 
            <img src={land.src} />
          </ParallaxLayer>

  
          <ParallaxLayer
            sticky={{ start: 0, end: 1}}
            style={{
                display: 'flex',
                justifyContent: 'center',  // Centers horizontally
                alignItems: 'center',      // Centers vertically
              }}
            offset={0}
            speed={1}
          >
            <h2>Welcome to my website</h2>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
}

export default Scroll;