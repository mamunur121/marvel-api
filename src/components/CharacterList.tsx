import React, {Dispatch} from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import Pagination from "./Pagination";
import {paginate} from "../utils/paginate";
import Loading from "./Loading";
import Search from "./Search";
import {CharacterTypeList} from "../types";

const CharacterList = ({items, pageSize, handlePageChange, currentPage, isLoading, setQuery}:
                         {items: CharacterTypeList[], pageSize: number, handlePageChange: (page: number)=> void, currentPage: number, isLoading: boolean,
                           setQuery:  Dispatch<React.SetStateAction<string>>}) => {
  const paginateLen = paginate(items, currentPage, pageSize);
  console.log(paginateLen);
  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <Search search={(q: string) => setQuery(q)}/>
      <div className='containers'>
        {paginateLen.length ? paginateLen.map((imageContainer) => (
          <div key={imageContainer.id} className='polaroid'>
            <Link to={`character/${imageContainer.id}`}>
              <img
                src={`${imageContainer.thumbnail.path}.${imageContainer.thumbnail.extension}`}
                style={{width: 375, height: 200, alignItems: 'center', objectFit: 'cover'}}
                alt='Marvel-Character'
              />
            </Link>
            <div className="container">
              <h1>{imageContainer.name}</h1>
              <p>{imageContainer.description ? imageContainer.description.slice(0, 70) + '...' : 'No description available here ...'}</p>
            </div>
          </div>
        )): (
          <div>
            <h1>There is no matching items, search another character</h1>
          </div>
        )}
      </div>
      <Pagination itemsCount={items.length} pageSize={pageSize} onPageChane={handlePageChange} currentPage={currentPage}/>
    </>
  );
};

export default CharacterList;
