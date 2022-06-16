import { useEffect, useState } from "react";
import { getCharacters } from "../services/characterService";

export default function CharacterList() {
  const [ characters, setCharacters ] = useState([])

  const getCharactersData = async() => {
    try {
      const charactersArr = await getCharacters()
      setCharacters([...characters, ...charactersArr])
    } catch (error) {
      throw error
    }

  }
  useEffect(() => {
    getCharactersData()
  }, [])

  if(characters.lenght === 0) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <ul>
        {characters.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
