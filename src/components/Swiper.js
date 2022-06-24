import { useEffect, useRef, useState } from "react"

export default function Swiper({characters, isSliderShown, setIsSliderShown, slideIndex, setSlideIndex}) {
  const myRef = useRef([])

  const scrollToSlide = (i) => {
    myRef.current[i].scrollIntoView(
      // { behavior: 'smooth', block: 'start' }
    )
  }

  const nextSlide = () => {
    if(slideIndex !== characters.length - 1){
        setSlideIndex(slideIndex + 1)
        myRef.current[slideIndex + 1].scrollIntoView(
          { behavior: 'smooth', block: 'start' }
        )
    } 
    // else if (slideIndex === characters.length - 1){
    //     setSlideIndex(0)
    //     myRef.current[0].scrollIntoView(
    //       { behavior: 'smooth', block: 'start' }
    //     )
    // }
  }

  const prevSlide = () => {
    if(slideIndex !== 0){
        setSlideIndex(slideIndex - 1)
        myRef.current[slideIndex - 1].scrollIntoView(
          { behavior: 'smooth', block: 'start' }
        )
    }
    // else if (slideIndex === 0){
    //     setSlideIndex(characters.length - 1)
    //     myRef.current[characters.length - 1].scrollIntoView(
    //       { behavior: 'smooth', block: 'start' }
    //     )
    // }
  }

  const closeSlide = () => {
    setIsSliderShown(current => !current)
  }

  useEffect(()=> {
    // console.log(myRef.current)
    if(myRef.current[slideIndex] != null) {
      scrollToSlide(slideIndex)
    }
  })

  if(isSliderShown === false) return 
  
  return (
    <div className="swiper">
      <div className="swiper-container">
        <div className="slides">
          {characters.map((item, i) => (
            // <div id={`slide-${i+1}`}>
            <div ref={(node) => {
              // console.log(node)
              myRef.current[i] = node
              }} key={i}>
              <img src={item.img}/>
            </div>
          ))}

          <button className="btn-slide close" onClick={closeSlide}><i className="fa-solid fa-xmark"></i></button>
          <button className="btn-slide next" onClick={nextSlide}><i className="fa-solid fa-circle-arrow-right"></i></button>
          <button className="btn-slide prev" onClick={prevSlide}><i className="fa-solid fa-circle-arrow-left"></i></button>
        </div>

      </div>
    </div>
  );
}