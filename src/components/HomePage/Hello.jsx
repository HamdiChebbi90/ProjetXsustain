
import Marquee from "react-fast-marquee";

import Carousel from "../carousel/carousel";

const OPTIONS = { align: 'start', containScroll: 'trimSnaps' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Hello = ()=>{


    return(
        <>
      <Carousel slides={SLIDES} options={OPTIONS} />
       
        <div className="fol">
          <Marquee className="follow">
            FOLLOW FOR MORE FOLLOW FOR MORE FOLLOW FOR MORE FOLLOW FOR
            MORE FOLLOW FOR MOREFOLLOW FOR MORE FOLLOW FOR MORE
          </Marquee>
        </div>
        <div className="stream">
          <video width="100%" height="100%" controls>
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    )
}

export default Hello;