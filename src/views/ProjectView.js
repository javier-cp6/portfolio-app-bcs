import { useState, useEffect } from "react"
import { getCharacters } from "../services/characterService"

export default function ProjectView() {
  const [ characters, setCharacters ] = useState([])

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
    <div>
      <div className="characters-container">
        {characters.map((item, i) => (
          <div className="character-card" key={i}>
            <img className="card-img" src={item.img}></img>
            <div>{`${item.name} - "${item.nickname}"`}</div>
          </div>
        ))}


      </div>
      
    </div>
  )
}
