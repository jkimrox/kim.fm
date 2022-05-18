import { useState, useEffect } from 'react';
// require('dotenv').config();
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

const Albums = () => {
    const[query, setQuery] = useState([])
    const[results, setResults] = useState(null)
    
    const getData = async () => {
        try {
            const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Steven Leftovers&api_key=${REACT_APP_API_KEY}&format=json`)
            const data = await response.json()
            setResults(data)
          } catch (err) {
            console.log(err)
          }
        }
    
    console.log(results)
    useEffect(() => {getData()}, [])

    const displayData = (displayElement) =>{
        return(
          <>
          <h1>{displayElement.topalbums['@attr'].artist}</h1>
          <h2>{displayElement.topalbums.album[0].name}</h2>
          {/* <h2>{displayElement.topalbums.album[0].image[0]}</h2> */}
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

export default Albums;