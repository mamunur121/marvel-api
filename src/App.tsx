import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";
import {fetchCharacterList, fetchQueryCharacter} from "./lib/api";
import {CharacterTypeList} from "./types";

const App = () => {
  const[items,setItems] = useState<CharacterTypeList[]>([]);
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [query,setQuery] = useState('');
  const[isLoading,setLoading] = useState(true);
  useEffect(()=> {
    if(query==='') {
      setLoading(true);
      fetchCharacterList()
        .then((data) => setItems(data.data.results))
        .then(() => setLoading(false))
        .then((error) => {
          console.error(error);
        })
    } else {
      fetchQueryCharacter(query)
        .then((data) => setItems(data.data.results))
        .then(() => setLoading(false))
        .then((error) => {
          console.error(error);
        })
    }
  }, [query]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <CharacterList
              items={items}
              pageSize={pageSize}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
              isLoading={isLoading}
              setQuery={setQuery}
            />
          </Route>
          <Route path="/character/:id">
            <Character />
          </Route>
        </Switch>
      </Router>
    </>

  );
};

export default App;
