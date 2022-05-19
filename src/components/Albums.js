import { useState, useEffect } from 'react';
import '../albums.css'
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
          <div class="albums">
          <h1>{displayElement.topalbums['@attr'].artist}</h1>
          <h2>{displayElement.topalbums.album[0].name}</h2>
          <img src={displayElement.topalbums.album[0].image[2]['#text']} alt="cover art"/>
          {/* {console.log(displayElement.topalbums.album[0].image[2]['#text'])} */}
          <h2>{displayElement.topalbums.album[1].name}</h2>
          <img src={displayElement.topalbums.album[1].image[2]['#text']} alt="cover art"/>
          <h2>{displayElement.topalbums.album[2].name}</h2>
          <img src={displayElement.topalbums.album[2].image[2]['#text']} alt="cover art"/>
          <h2>{displayElement.topalbums.album[3].name}</h2>
          <img src={displayElement.topalbums.album[3].image[2]['#text']} alt="cover art"/>
          <h2>{displayElement.topalbums.album[6].name}</h2>
          <img src={displayElement.topalbums.album[6].image[2]['#text']} alt="cover art"/>
          </div>
        )
      };return (
            <div>{results ? displayData(results) : <h1>Loading...</h1>}</div>
      )
    } 

export default Albums;