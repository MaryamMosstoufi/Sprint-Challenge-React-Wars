import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './App.css';
import './../node_modules/uikit/dist/css/uikit.css';

import './../node_modules/uikit/dist/js/uikit-icons.js';
import './../node_modules/uikit/dist/js/uikit.js';
import {
  Container,
  // Icon,
  // Link,
  // List,
  // ListItem,
  // Offcanvas,
  // OffcanvasContainer,
  // Navbar,
  // NavbarContainer,
  // NavbarSticky,
  // Section,
} from 'uikit-react';
import Header from './components/Header.js';
import Card from './components/Character.js';
import Pagination from './components/Pagination.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState('https://rickandmortyapi.com/api/character');
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(page)
      .then(response => {
        setCharacters(response.data.results);
        setPrevPage(response.data.info.prev);
        setNextPage(response.data.info.next);
        console.log('axios response.data: ', response.data)
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [page])
  return (
    <div className='App uk-background-muted'>
      <Header></Header>
      <section className='uk-section uk-section-small'>
        <Container className='uk-container-large'>
          <div className='uk-child-width-1-2@s uk-child-width-1-4@l uk-text-center uk-grid uk-grid-small'>
            {
              characters.map(character => {
                return (
                  <Card key={character.id} character={character}></Card>
                )
              })
            }
          </div>
        </Container>
      </section>
      <Pagination prevPage={prevPage} nextPage={nextPage}></Pagination>

    </div >
  );
}

export default App;
