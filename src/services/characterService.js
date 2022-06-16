import axios from 'axios';

const URL = process.env.REACT_APP_API

const getCharacters = async () => {
  try {
    const endpoint = `${URL}/api/characters`
    const {data, status} = await axios.get(endpoint)
    if(status === 200) return data
    throw Error("Failed to get data")
  } catch (error) {
    throw error
  }
}

export {
  getCharacters
}
