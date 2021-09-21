import React, { useState } from 'react'
import SearchContext from './SearchContext'


const SearchState = ({children}) => {
  const [searchQuery, setSearchQuery] = useState({
    input: '',
    videos: []
  })
  const [ showSpecialSearchBar, setShowSpecialSearchBar ] = useState(false)

  const API_KEY = process.env.REACT_APP_API_KEY
  const API_SEARCH = process.env.REACT_APP_API_SEARCH_URL

  const showSearchBar = () => {
    setShowSpecialSearchBar(true)
  }

  const hiddeSearchBar = () => {
    setShowSpecialSearchBar(false)
  }

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      API_SEARCH,
      API_KEY,
      showSpecialSearchBar,
      setShowSpecialSearchBar,
      showSearchBar,
      hiddeSearchBar
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchState
