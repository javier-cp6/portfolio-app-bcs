export default function Slider({characters, isSliderShown, setIsSliderShown, slideIndex, setSlideIndex}) {

  const nextSlide = () => {
    if(slideIndex !== characters.length){
        setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === characters.length){
        setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
        setSlideIndex(characters.length)
    }
  }

  const closeSlide = () => {
    setIsSliderShown(current => !current)
  }

  if(isSliderShown === false) return 

  return (
    <div className="slider">
      <div className="slider-container">
        {characters.map((item, i) => (
          <div key={i} className={slideIndex === i + 1 ? "slide active-anim" : "slide"}>
            <img src={item.img} />
          </div>
        ))}
        
        <button className="btn-slide close" onClick={closeSlide}><i className="fa-solid fa-xmark"></i></button>
        <button className="btn-slide next" onClick={nextSlide}><i className="fa-solid fa-circle-arrow-right"></i></button>
        <button className="btn-slide prev" onClick={prevSlide}><i className="fa-solid fa-circle-arrow-left"></i></button>
      </div>
    </div>
  );
}
