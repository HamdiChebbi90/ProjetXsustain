
import React from 'react';
import Marquee from 'react-fast-marquee';
import "./style.css"


const Banner = () => {
    return (
        <div className="banner">
        <h1>BREAKING NEWS</h1>
      <h2>{">"}</h2>
      <Marquee className="marquee">
      WE ARE LIVE!  WE ARE LIVE!  WE ARE LIVE!  WE ARE LIVE!  WE ARE LIVE!</Marquee>
      </div>
    )
}

export default Banner;