import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { usePrevNextButtons, NextButton, PrevButton } from "./BtnCaroussel";
import imageTab from "./ImageTab";
const Carousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log(emblaApi.slideNodes()) // Access API
  //   }
  // }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__leftbar"></div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={imageTab(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div className="embla__rightbar"></div>
    </div>
  );
};

export default Carousel;
