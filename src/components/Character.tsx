import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Loading from "./Loading";
import RenderItems from "./RenderItems";
import {fetchCharacterItem} from "../lib/api";

const Character = () => {
  let { id }: {id: string} = useParams();
  const[character,setCharacter] = useState<any>([]);

  useEffect(()=> {
    fetchCharacterItem(id)
      .then((data) => setCharacter(data?.data?.results[0]))
      .then((error) => {
        console.log(error);
      })
  }, [id]);
  if(character.length === 0) {
    return <Loading />
  }
  return (
    <div className='charterContainer'>
      <div className="cartDetails">
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt='Marvel-Character'/>
        <h1>{character.name}</h1>
        <p>{character.description ? character.description : 'No description available here ...'}</p>
      </div>
      <div>
        <h1 style={{textAlign: 'center'}}>List of Comics</h1>
        <RenderItems character={character} types='comics'/>
        <hr/>
        <h1 style={{textAlign: 'center'}}>List of Series</h1>
        <RenderItems character={character} types='series'/>
        <hr/>
        <h1 style={{textAlign: 'center'}}>List of Stories</h1>
        <RenderItems character={character} types='stories'/>
        <hr/>
        <h1 style={{textAlign: 'center'}}>List of Events</h1>
        <RenderItems character={character} types='events'/>
      </div>
    </div>
  );
};

export default Character;
