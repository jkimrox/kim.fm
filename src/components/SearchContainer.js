import { useState } from 'react';

import Search from './Search';
import Results from './Results'

const SearchContainer = () => {
    const[query, setQuery] = useState([])
    const[results, setResults] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(query)
        try {
            const apiKey = "ee3289f986456b1b8e715ff002105cd6"
            const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${query}&api_key=${apiKey}&format=json`

            const response = await fetch(URL)
            const data = await response.json()
            setResults(data.data)
        } catch(err) {
            console.log(err)
        }
    }

    function handleChange(e) {
        setQuery(e.target.value)
    }

    return(
        <>
            < Search handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
            < Results results={results}/>
        </>
    )
}

export default SearchContainer;