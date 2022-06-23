// export default function SwiperCSSExample() {
//   return (
//     <div className="swiper">
//       <div class="swiper-container">
//         <a href="#slide-1">1</a>
//         <a href="#slide-2">2</a>
//         <a href="#slide-3">3</a>
//         <a href="#slide-4">4</a>
//         <a href="#slide-5">5</a>

//         <div class="slides">
//           <div id="slide-1">1</div>
//           <div id="slide-2">2</div>
//           <div id="slide-3">3</div>
//           <div id="slide-4">4</div>
//           <div id="slide-5">5</div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react"
import { getCharacters } from "../services/characterService"

export default function ProjectView() {
  const [ characters, setCharacters ] = useState([])
  const [ isSliderShown, setIsSliderShown] = useState(false)
  const [slideIndex, setSlideIndex] = useState(1)

  const handleClick = (i) => {
    setIsSliderShown(current => !current);
    setSlideIndex(i + 1)
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
    <div className="swiper">
      <div class="swiper-container">
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a>

        <div class="slides">
          {characters.map((item, i) => (
            <div id={`slide-${i+1}`}>
              <img src={item.img}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}