const BASE_URL = 'http://gateway.marvel.com/v1/public/characters'
const PUBLIC_KEY = '344d40df0c8cc373141c1dc321fae9cf'
const hash =  "bd0722d5750b6362d5ba0212ca36726b";

export const fetchCharacterList = () => {
  return fetch(`${BASE_URL}?ts=1&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${50}`)
    .then((response) => response.json())
}

export const fetchQueryCharacter = (query: string) => {
  console.log(query);
  return fetch(`${BASE_URL}?nameStartsWith=${query}&ts=1&apikey=${PUBLIC_KEY}&hash=${hash}`)
    .then((response) => response.json())
}

export const fetchCharacterItem = (id: string) => {
  return fetch(`${BASE_URL}/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${hash}`)
    .then((response) => response.json())
}
