import { useState, useEffect } from "react";
import { getCharacters } from "../services/characterService";

export default function Slider() {
  const [ characters, setCharacters ] = useState([])
  const [slideIndex, setSlideIndex] = useState(1)

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

  const moveDot = index => {
    setSlideIndex(index)
  }


  const getCharactersData = async() => {
    try {
      const charactersArr = await getCharacters()
      const charactersArrFiltered = charactersArr.filter((item) => item.category.includes("Better Call Saul"))
      setCharacters(charactersArrFiltered)
      
    } catch (error) {
      throw error
    }
  }
  useEffect(() => {
    getCharactersData()
  },[])

  return (
    <div className="slider">
      <div className="slider-container">
        {characters.map((item, i) => (
          <div key={i} className={slideIndex === i + 1 ? "slide active-anim" : "slide"}>
            <img src={item.img} />
          </div>
        ))}
        <button className="btn-slide next" onClick={nextSlide}><i className="fa-solid fa-circle-arrow-right"></i></button>
        <button className="btn-slide prev" onClick={prevSlide}><i className="fa-solid fa-circle-arrow-left"></i></button>
      </div>
    </div>
  );
}
