import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Backbone/UserContext";
import styled from "styled-components";

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Search = () => {

  // THIS FUNCTIONALITY IS BASED ON REACT - SEARCH - AUTOCOMPLET
     // ALL CODE WAS FROM THE PROVIDED NPM
       // SEARCH RESULTS ARE GENERATED USING TOP 1000 INGREDIENTS - KEPT IN CONTEXT FROM THE INITIAL PAGE LOAD

    //grab all the ingredient names from Context
    const { ingredientsMaster, setOneIngredient , setIngredientSearchQuery, ingredientSearchQuery, oneIngredient} = useContext(UserContext);

    let items;

    // set items to ingredients 
  if (ingredientsMaster) {
    items = ingredientsMaster;
  }

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result)
  }

  const handleOnSelect = (item) => {

    // the item selected
    let itemWithAmount = {
      _id: item._id,
      name: item.name,
      id: item.id,
      amount: 0,
      unit_type: null
    }

    setOneIngredient(itemWithAmount)

    let tempArr = []
    tempArr.push(itemWithAmount)
    setIngredientSearchQuery([...ingredientSearchQuery, tempArr[0]])

  }


  const handleOnFocus = () => {
    //console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default Search;

const Wrapper = styled.div``;
