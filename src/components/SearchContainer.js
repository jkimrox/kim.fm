import { useState, useEffect } from 'react';
import Search from './Search';
import Results from './Results';

const SearchContainer = () => {
    const[query, setQuery] = useState([])
    const[results, setResults] = useState(null)

    const getData = async () => {
        try {
            const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Steven Leftovers&api_key=ee3289f986456b1b8e715ff002105cd6&format=json`)
            const data = await response.json()
            setResults(data)
          } catch (err) {
            console.log(err)
          }
        }
    
    // async function getData() {
    //     // e.preventDefault()
    //     // console.log(query)
    //     try {
    //         const apiKey = "ee3289f986456b1b8e715ff002105cd6"
    //         const URL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=ee3289f986456b1b8e715ff002105cd6&format=json`
    //     console.log(URL)
    //         const response = await fetch(URL)
    //         const data = await response.json()
    //         setResults(data.data)
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }
    console.log(results)
    useEffect(() => {getData()}, [])
    // function handleChange(e) {
    //     setQuery(e.target.value)
    // }
    
    

    const displayData = (displayElement) =>{
        return(
          <>
          <h1>{displayElement.topalbums['@attr'].artist}</h1>
          <h2>{displayElement.topalbums.album[0].name}</h2>
          {/* <h2>{displayElement.topalbums.album[0].image}</h2> */}
          <h2>{displayElement.topalbums.album[1].name}</h2>
          <h2>{displayElement.topalbums.album[2].name}</h2>
          <h2>{displayElement.topalbums.album[3].name}</h2>
          <h2>{displayElement.topalbums.album[4].name}</h2>
          <h2>{displayElement.topalbums.album[5].name}</h2>
          <h2>{displayElement.topalbums.album[6].name}</h2>
          </>
        )
      };return (
            <div>{results ? displayData(results) : <h1>Loading...</h1>}</div>
      )
    } 

export default SearchContainer;