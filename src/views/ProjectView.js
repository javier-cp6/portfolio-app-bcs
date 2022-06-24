import { useState, useEffect } from "react"
import { getCharacters } from "../services/characterService"
import Slider from "../components/Slider"
import Swiper from "../components/Swiper";

export default function ProjectView() {
  const [ characters, setCharacters ] = useState([])
  const [ isSliderShown, setIsSliderShown] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (i) => {
    setIsSliderShown(current => !current);
    setSlideIndex(i)
  }

  useEffect(()=> {
    if (isSliderShown) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
    if (!isSliderShown) {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  },[isSliderShown])

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
    <>
      {/* <Slider characters={characters} handleClick={handleClick} isSliderShown={isSliderShown} setIsSliderShown={setIsSliderShown} slideIndex={slideIndex} setSlideIndex={setSlideIndex}/> */}
      <Swiper characters={characters} handleClick={handleClick} isSliderShown={isSliderShown} setIsSliderShown={setIsSliderShown} slideIndex={slideIndex} setSlideIndex={setSlideIndex}/>
      <div className="characters-container">
        {characters.map((item, i) => (
          <div className="character-card" key={i}>
            <img className="card-img" src={item.img} onClick={() => {handleClick(i)}}></img>
            <div>{`${item.name} - "${item.nickname}"`}</div>
          </div>
        ))}
      </div>
    </>
  )
}
